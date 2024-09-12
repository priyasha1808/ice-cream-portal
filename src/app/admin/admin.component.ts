import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  imageUrl='../../assets/img/about3.jpg';
  constructor(private router: Router) { }

  user1: string | null = '';

  logout() : void{
    if (this.user1 !== null) {
      localStorage.removeItem('user1');
    }
  
  }

  ngOnInit(): void {
    // Retrieve the 'user' value from local storage
    this.user1 = localStorage.getItem('user1');
  }
}

