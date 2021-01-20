import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
    ) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  removeItem(product) {
    //this.items = this.items.filter(p => p.Id !== product.Id);
    var index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    console.log("items: ", this.items);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
