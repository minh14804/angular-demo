import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.myapp.cart.getItems();
  constructor(public myapp: AppComponent) {}
  ngOnInit(): void {}
}
