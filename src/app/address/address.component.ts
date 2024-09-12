import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  total:string="";
  userid:string="";
  constructor(private router:Router) { }
  customer: any = {};
  data:any = {};

  ngOnInit(): void {
    // Retrieve the total value from localStorage
    this.total = localStorage.getItem('total') || '0'; // If total is not available in localStorage, set it to '0'
    this.userid=localStorage.getItem('user1') || '0';
  }

  onSubmit(form :any){
    this.data = form.data;
  }

  saveCustomer(): void {
    // Validate inputs before proceeding
    if (this.isValid()) {
      localStorage.setItem('price',this.total);
      localStorage.setItem('username',this.userid);
      this.router.navigate(['/pay']);
    }
  }

  isValid(): boolean {
    // Basic validation, you can add more complex validation logic as needed
    const nameRegex = /^[a-zA-Z ]*$/;
    const mobileRegex = /^[0-9]{10}$/;
    return !!this.customer.name && !!this.customer.mobile && !!this.customer.address && !!this.customer.city && !!this.customer.state &&
      nameRegex.test(this.customer.name) && mobileRegex.test(this.customer.mobile);
  }
}
