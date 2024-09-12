import { Component } from '@angular/core';
import { NodeutilityService } from '../nodeutility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpw',
  templateUrl: './forgotpw.component.html',
  styleUrl: './forgotpw.component.css'
})
export class ForgotpwComponent {
  constructor(private util:NodeutilityService,private router:Router) { }
  
  msg:string='';

  onSubmit(form: any) {
    this.util.update(form.value.email, form.value.oldpw,form.value.newpw).subscribe((data) => {
        if (data.status) {
          this.msg = data.message;
        }
        else{
          this.msg = data.message;
        }
      });
}
}
