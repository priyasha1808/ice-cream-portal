import { Component } from '@angular/core';
import { NodeutilityService } from '../nodeutility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  constructor(private util:NodeutilityService,private router:Router) { }
  
  imageUrl='-webkit-radial-gradient(#90F6FB,#2C3283)';

  email:string='';
  pw:string="";
  msg:string="";
  delete(){
    this.util.delete(this.email,this.pw).subscribe((data)=>{
      if(data.status){
        this.msg=data.message;
      }
      else{
        this.msg=data.message;
      }
    });
  }
}
