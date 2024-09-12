import { Component } from '@angular/core';
import { NodeutilityService } from '../nodeutility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private util:NodeutilityService,private router:Router) { }
  msg:string='';
  selectedFavourite:string="";
  selectedGender:string="";
  mobile:string="";
  onSubmit(form: any) {
    this.util.insert(form.value.name, form.value.email, form.value.mobile, form.value.pw, 
      this.selectedFavourite,this.selectedGender).subscribe((data) => {
        if (data.status){
          this.msg = data.message;  
        } 
        else{
          this.msg = data.message;
        }
        if(data.status){
          this.router.navigate(['/login']);
        }
      });
      
        }
    
  

  imageUrl='-webkit-radial-gradient(#90F6FB,#2C3283)';

  printError(Id: string, Msg: string) {
    const element = document.getElementById(Id);
    if (element) {
      element.innerHTML = Msg;
    }
  }

  validateForm() {
    const nameElement = <HTMLInputElement>document.querySelector("#name");
    const emailElement = <HTMLInputElement>document.querySelector("#email");
    const mobileElement = <HTMLInputElement>document.querySelector("#mobile");
    const favouriteElement = <HTMLInputElement>document.querySelector("#Favourite");
    const genderElement = <HTMLInputElement>document.querySelector("#gender");
    const pwElement = <HTMLInputElement>document.querySelector("#pw");
    
    

    if (!nameElement || !emailElement || !mobileElement || !favouriteElement || !genderElement ||!pwElement) {
      return false; // Return false if any required element is missing
    }

    const name = nameElement.value;
    const email = emailElement.value;
    const mobile = mobileElement.value;
    const favourite = favouriteElement.value;
    const gender = genderElement.value;
    const pw = pwElement.value;

    let nameErr: boolean = true, emailErr: boolean = true, mobileErr: boolean = true, favouriteErr: boolean = true, genderErr: boolean = true,pwErr:boolean=true;

    if (name == "") {
      this.printError("nameErr", "Please enter your name");
      nameElement.classList.add("input-2");
      nameElement.classList.remove("input-1");
    } else {
      const regex = /^[a-zA-Z\s]+$/;
      if (regex.test(name) === false) {
        this.printError("nameErr", "Please enter a valid name");
        nameElement.classList.add("input-2");
        nameElement.classList.remove("input-1");
      } else {
        this.printError("nameErr", "");
        nameErr = false;
        nameElement.classList.add("input-1");
        nameElement.classList.remove("input-2");
      }
    }

    if (email == "") {
      this.printError("emailErr", "Please enter your email address");
      emailElement.classList.add("input-2");
      emailElement.classList.remove("input-1");
    } else {
      var regex = /^\S+@\S+\.\S+$/;
      if (regex.test(email) === false) {
        this.printError("emailErr", "Please enter a valid email address");
        emailElement.classList.add("input-2");
        emailElement.classList.remove("input-1");
      } else {
        this.printError("emailErr", "");
        emailErr = false;
        emailElement.classList.add("input-1");
        emailElement.classList.remove("input-2");
      }
    }

    if (mobile == "") {
      this.printError("mobileErr", "Please enter your mobile number");
      mobileElement.classList.add("input-2");
      mobileElement.classList.remove("input-1");
    } else {
      var regex = /^[1-9]\d{9}$/;
      if (regex.test(mobile) === false) {
        this.printError("mobileErr", "Please enter a valid 10 digit mobile number");
        mobileElement.classList.add("input-2");
        mobileElement.classList.remove("input-1");
      } else {
        this.printError("mobileErr", "");
        mobileErr = false;
        mobileElement.classList.add("input-1");
        mobileElement.classList.remove("input-2");
      }
    }

    if (favourite == "Select") {
      this.printError("favouriteErr", "Please select your Favourite");
      favouriteElement.classList.add("input-4");
      favouriteElement.classList.remove("input-3");
    } else {
      this.printError("FavouriteErr", "");
      favouriteErr = false;
      favouriteElement.classList.add("input-3");
      favouriteElement.classList.remove("input-4");
    }
    if(pw == ""){
      this.printError("pwErr","Please enter your password");
      pwElement.classList.add("input-4");
      pwElement.classList.remove("input-3");
    } else {
      this.printError("pwErr", "");
      pwErr = false;
      pwElement.classList.add("input-3");
      pwElement.classList.remove("input-4");
    }
    

    if (gender == "") {
      this.printError("genderErr", "Please select your gender");
      genderElement.classList.add("input-4");
      genderElement.classList.remove("input-3");
    } else {
      this.printError("genderErr", "");
      genderErr = false;
      genderElement.classList.add("input-3");
      genderElement.classList.remove("input-4");
    }
  

    // Repeat the same pattern for other form fields...

    if (nameErr || emailErr || mobileErr || favouriteErr || genderErr || pwErr) {
      return false;
    }
    return true;
  }
    
}
