import { Component } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css'
})
export class BillComponent {
  total: string | null="";
  item: string | null="";

  
  ngOnInit():void{
      this.total=localStorage.getItem('total');
      this.item=localStorage.getItem('item');

  }
}
