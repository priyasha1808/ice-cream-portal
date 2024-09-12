import { Component } from '@angular/core';
import { NodeutilityService } from '../nodeutility.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  msg:string="";
  sList:any[]=[];
  constructor(private util:NodeutilityService){
    this.display();
  }
  display(){
    this.util.display().subscribe((data)=>{
      if(data.status){
        this.sList=data.list;
      }
      this.msg=data.message;
    }
    );
  }
}
