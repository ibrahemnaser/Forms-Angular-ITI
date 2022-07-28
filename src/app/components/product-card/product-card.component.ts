import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/_interfaces/iproduct';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: IProduct;

  constructor(private cartservices: CartService, private router: Router) {}

  ngOnInit(): void {}
  setSelectedProduct(product: IProduct) {
    this.cartservices.setProductdata(product);
  }
  showDetails(id: number) {
    this.router.navigate(['productdtl', id]);
  }
}
