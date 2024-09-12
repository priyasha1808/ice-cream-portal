import { Component } from '@angular/core';
import { NodeutilityService } from '../nodeutility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {
  msg:string="";
  user1:string | null="";
  constructor(private util:NodeutilityService,private router:Router){

  }
  ngOnInit(): void {
    // Retrieve the 'user' value from local storage
    this.user1 = localStorage.getItem('user1');
    if(this.user1!=null)
      {
        this.router.navigate(['/admin']);
      }
  }
  onSubmit(form: any) {
    this.util.insert2(form.value.email, form.value.pw).subscribe((data) => {
        if (data.status){
          localStorage.setItem("user1",form.value.email);
          this.msg = data.message;
          this.router.navigate(['/admin']);
        }
      
        else{
          this.msg = data.message;
        }
        
      });
  }

  imageUrl='../../assets/img/admin.jpg'
}
