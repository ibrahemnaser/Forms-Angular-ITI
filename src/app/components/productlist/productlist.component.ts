import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/_interfaces/iproduct';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  filterText = '';
  productsList!: IProduct[];
  constructor(private cartservices: CartService) {}

  ngOnInit(): void {
    this.productsList = this.cartservices.getProducts();
  }
}
