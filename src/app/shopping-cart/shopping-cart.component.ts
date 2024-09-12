import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NodeutilityService } from '../nodeutility.service';
import { HttpClient } from '@angular/common/http';


interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string; // Add this property
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit{
  user: string | null = '';
  total:number=0;
  username:string | null = '';

  products: Product[] = [
    { id: 1, name: 'Vanilla', price: 30, imageUrl: '../../assets/img/vanilla.jpg' },
    { id: 2, name: 'Strawberry', price: 30, imageUrl: '../../assets/img/strawberry.jpg' },
    { id: 3, name: 'Chocolate', price: 30, imageUrl: '../../assets/img/choco.jpg'},
    { id: 4, name: 'Blackcurrant', price: 30, imageUrl: '../../assets/img/bc.jpg' },
    { id: 5, name: 'Magnum', price: 30, imageUrl: '../../assets/img/magnum.jpg' },
    { id: 6, name: 'Cornetto', price: 30, imageUrl: '../../assets/img/cornetto.jpg' },
    { id: 7, name: 'Butterscotch', price: 30, imageUrl: '../../assets/img/butterscotch1.jpg'},
];

  logout() : void{
    if (this.user != null) {
      localStorage.removeItem('user');
      //this.router.navigate(['/home']);
    }
  
  }

  ngOnInit(): void {
    // Retrieve the 'user' value from local storage
    this.user = localStorage.getItem('user');
    if(this.user==null)
      {
        this.router.navigate(['/home']);
      }
      if (this.user) {
        const atIndex = this.user.indexOf('@'); // Find the index of '@' symbol
        if (atIndex !== -1) {
          this.username = this.user.substring(0, atIndex); // Extract the substring before '@'
        }
      }
      this.fetchProducts(); // Fetch products initially
      setInterval(() => {
        this.fetchProducts();
      }, 300000); // 5 minutes in milliseconds
  }
  fetchProducts(): void {
    this.http.get<Product[]>('http://localhost:5000/products').subscribe(
      (newProducts) => {
        // Concatenate the new products with the existing products
        newProducts.forEach(newProduct => {
          const existingProductIndex = this.products.findIndex(product => product.id === newProduct.id);
          if(existingProductIndex === -1){
            this.products.push(newProduct)
          }
          else{
            alert("Product id  already exists");
          }
        })
        //this.products = this.products.concat(newProducts);
        //alert(JSON.stringify(this.products));
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  
  cart: Product[] = [];

  

  constructor(private router: Router, private util:NodeutilityService, private http: HttpClient) {}
  msg:string='';
  

  addToCart(product: Product): void {
    
    this.cart.push(product);
  }

  removeFromCart(product: Product): void {
    const index = this.cart.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  getTotal(): number {
    this.total= this.cart.reduce((total, product) => total + product.price, 0);
    return this.total;
  }

  

  checkout(): void {
    // Perform checkout logic here
    // For demonstration purposes, navigate to the payment page
    const quantity = this.cart.length; 
    if (quantity < 1 || !Number.isInteger(quantity)) {
      alert('Please enter a valid quantity.');
      return;
    }
    else{
      if(this.user){
        this.total = this.getTotal();
      localStorage.setItem("total", JSON.stringify(this.total));
      const allItems = this.cart.map(item => ({
        name: item.name,
        price: item.price
      }));
      localStorage.setItem("items",JSON.stringify(allItems));
      
      localStorage.setItem("user1",this.user);
      this.router.navigate(['/address']);
      }
}
}
}
