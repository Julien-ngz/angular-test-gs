import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  product: Product | undefined;
  items = this.cartService.getItems();
  customerForm = this.formBuilder.group({
    name: '',
    phone_number: '',
    time: '',
    comment: ''
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    //window.alert('Your product has been added to the cart!' + product);
    console.warn('addToCart', product);
  }
  onSubmitKitchen(): void {
    //ATTENTION !!! c'est ici où je devrais faire un appel pour stocker en BDD
    // Process checkout data here
    console.warn('Items submitted', this.items);
    this.items = this.cartService.clearCart();
    console.warn('Items submitted', this.items);
    console.warn('Order submitted', this.customerForm.value);
    this.customerForm.reset();
    //window.alert('Commande envoyée en cuisine!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
