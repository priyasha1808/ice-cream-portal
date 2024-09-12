import { Component } from '@angular/core';

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity?: number;
}

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent {




  openShopping: HTMLElement | null = document.querySelector('.shopping');
  closeShopping: HTMLElement | null = document.querySelector('.closeShopping');
  list: HTMLElement | null = document.querySelector('.list');
  listCard: HTMLElement | null = document.querySelector('.listCard');
  body: HTMLElement | null = document.querySelector('body');
  total: HTMLElement | null = document.querySelector('.total');
  quantity: HTMLElement | null = document.querySelector('.quantity');

    

  products: Product[] = [
    {
        id: 1,
        name: 'CORNETTO',
        image: 'src/assets/img/cornetto.jpg',
        price: 150
    },
    {
        id:2,
        name:'VANILLA',
        image:'../../assets/img/vennila1.jpg',
        price:90
    },
    {
        id:3,
        name:'STRAWBERRY',
        image:'../../assets/img/strawberry1.jpg',
        price:90
    },
    {
        id:4,
        name:'BLACKCURRANT',
        image:'../../assets/img/bc.jpg',
        price:100
    },
    {

        id:5,
        name:'MAGNUM',
        image:'../../assets/img/magnum.jpg',
        price:200
    },
    {
        id:6,
        name:'MINT CHOCOLATE',
        image:'../../assets/img/chocolate mint.jpg',
        price:150
    },
    {
        id:7,
        name:'CHOCOLATE',
        image:'../../assets/img/choco.jpg',
        price:100
    },
    {

        id:8,
        name:'BUTTERSCOTCH',
        image:'../../assets/img/butterscotch1.jpg',
        price:100
    },
  ];

  listCards: Product[] = [];

  constructor() {
    this.initApp();
  }

  initApp(): void {
    if (this.list) {
        this.products.forEach((value: Product, key: number) => {
            let newDiv: HTMLDivElement = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML = `
                <img src="img/${value.image}" style="border-radius:20%;width:70%;"/>
                <div class="title" style="font-size:30px;font-weight:800;">${value.name}</div>
                <div class="price" style="font-size:30px;font-weight:500;">Rs:${value.price.toLocaleString()}</div>
                <button (click)="addToCard(${key})" style="background-color:orange;">Add To Cart</button>
            `;
            if (this.list) {
                this.list.appendChild(newDiv);
            }
        });
    }
  }
  

  addToCard(key: number): void {
    if (!this.listCards[key]) {
        this.listCards[key] = { ...this.products[key], quantity: 1 };
    } else {
        this.listCards[key].quantity = (this.listCards[key].quantity || 0) + 1;
    }
    this.reloadCard();
  }

  reloadCard(): void {
    if (this.listCard && this.total && this.quantity) {
        this.listCard.innerHTML = '';
        let count: number = 0;
        let totalPrice: number = 0;

        this.listCards.forEach((value: Product | undefined, key: number) => {
            if (value) {
                totalPrice += value.price * (value.quantity || 0);
                count += value.quantity || 0;

                let newDiv: HTMLLIElement = document.createElement('li');
                newDiv.innerHTML = `
                    <div><img src="img/${value.image}"/></div>
                    <div>${value.name}</div>
                    <div>${(value.price || 0).toLocaleString()}</div>
                    <div>${value.quantity}</div>
                    <div>
                        <button (click)="changeQuantity(${key},${(value.quantity || 0) - 1})">-</button>
                        <div class="count">${value.quantity}</div>
                        <button (click)="changeQuantity(${key},${(value.quantity || 0) + 1})">+</button>
                    </div>
                `;
                if (this.listCard) {
                    this.listCard.appendChild(newDiv);
                }
            }
        });

        if (this.total) {
            this.total.innerText = totalPrice.toLocaleString();
        }
        if (this.quantity) {
            this.quantity.innerText = count.toString();
        }
    }
  }

  changeQuantity(key: number, quantity: number): void {
    if (quantity <= 0) {
        delete this.listCards[key];
    } else if (this.listCards[key]) {
        this.listCards[key].quantity = quantity;
        this.listCards[key].price = (quantity || 0) * this.products[key].price; // Recalculate the price based on the new quantity
    }
    this.reloadCard();
  }
}


