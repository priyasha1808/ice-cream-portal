import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NodeutilityService } from '../nodeutility.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent {
  total: string='';
  user1:string | null = '';
  items: any[] | null = null;

  constructor(private route: ActivatedRoute,private util:NodeutilityService,private router:Router) { }

  ngOnInit(): void {
    // Retrieve the total value from localStorage
    this.total = localStorage.getItem('total') || '0';
    const itemsString = localStorage.getItem('items');
    if (itemsString) {
      this.items = JSON.parse(itemsString);
    }
    this.user1 = localStorage.getItem('user1') || '0'; // If total is not available in localStorage, set it to '0'
  }

  msg:string="";
  onSubmit(form: any) {

    if(this.pay()==true){
      this.util.insertpay(form.value.cardno, form.value.cn, form.value.validtill, form.value.cvv, this.total).subscribe((data) => {
        if (data.status){
          this.msg = data.message;  
          this.router.navigate(['/tick']);
        } 
        else{
          this.msg = data.message;
        }
      });
      
      if (this.items) {
        // Extract the names of all items
        const itemNames = this.items.map(item => item.name);
        
        // Join the item names into a single string separated by a delimiter (e.g., comma)
        const itemNamesString = itemNames.join(', ');
        // Insert the concatenated item names into the database
        if (this.user1 && (!isNaN(parseFloat(this.total)))) {
          this.util.insert_prod(this.user1, itemNamesString, +this.total).subscribe((data) => {
            if (data.status) {
              this.msg = data.message;  
            } 
          });
        }
      }
            
  }
}
  back():void{
    
    if (this.total != null) {
      localStorage.removeItem('total');
      //this.router.navigate(['/home']);
    }
  }
      
  

  pay(): boolean {
    const cno: string = (document.getElementById('cardno') as HTMLInputElement).value.trim();
    const exp: string = (document.getElementById('validtill') as HTMLInputElement).value.trim();
    const cname: string = (document.getElementById('cn') as HTMLInputElement).value.trim();
    const cvv: string = (document.getElementById('cvv') as HTMLInputElement).value.trim();

    if (cno.length === 0 || exp.length === 0 || cname.length === 0 || cvv.length === 0) {
        alert("Fill all details");
        return false;
    }
    return true;
  }

  cardSpace(): void {
    let cd: string = (document.getElementById('cardno') as HTMLInputElement).value.replace(/-/g, ''); // Remove existing dashes
    cd = cd.replace(/\s+/g, ''); // Remove existing spaces

    let formattedCd = '';
    for (let i = 0; i < cd.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedCd += '-';
      }
      formattedCd += cd[i];
    }
    (document.getElementById('cardno') as HTMLInputElement).value = formattedCd;
  }

  addSlashes(): void {
    const validTill: string = (document.getElementById('validtill') as HTMLInputElement).value.trim();
  
    if (validTill.length === 2) {
      (document.getElementById('validtill') as HTMLInputElement).value = validTill + "/";
    }
  }

}
