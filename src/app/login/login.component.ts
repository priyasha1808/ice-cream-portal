import { Component } from '@angular/core';
import { NodeutilityService } from '../nodeutility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  msg:string="";
  user:string | null="";
  constructor(private util:NodeutilityService,private router:Router){}
  ngOnInit(): void {
    // Retrieve the 'user' value from local storage
    this.user = localStorage.getItem('user');
    if(this.user!=null)
      {
        this.router.navigate(['/shopping-cart']);
      }
  }
  onSubmit(form: any) {
    if(form.valid){
      this.util.insert1(form.value.email, form.value.password).subscribe((data) => {
        if (data.status){
          localStorage.setItem("user",form.value.email);
          this.msg = data.message;
          this.router.navigate(['/shopping-cart']);
        }
      
        else{
          this.msg = data.message;
          alert(this.msg);
        }
        
      });
    }
    
  }

  imageUrl='../../assets/img/carousel-1.jpg'

  myMenuFunction() {
  const i = <HTMLInputElement>document.querySelector(".navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
  }

  

  login() {
    const a = <HTMLInputElement>document.querySelector(".loginBtn");
    const b = <HTMLInputElement>document.querySelector(".registerBtn");
    const x = <HTMLInputElement>document.querySelector(".login");
    const y = <HTMLInputElement>document.querySelector(".register");
      x.style.left = "4px";
      y.style.right = "-520px";
      a.className += " white-btn";
      b.className = "btn";
      x.style.opacity = "1";
      y.style.opacity = "0";
    }

    register() {
      const a = <HTMLInputElement>document.querySelector(".loginBtn");
      const b = <HTMLInputElement>document.querySelector(".registerBtn");
      const x = <HTMLInputElement>document.querySelector(".login");
      const y = <HTMLInputElement>document.querySelector(".register");
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = "0";
        y.style.opacity = "1";
    }
}
