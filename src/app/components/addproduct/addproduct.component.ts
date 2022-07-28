import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/_interfaces/iproduct';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  myform = new FormGroup({
    title: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    rating: new FormGroup({
      count: new FormControl(0),
      rate: new FormControl(0),
    }),
  });
  // productData = {
  //   id: 0,
  //   title: '',
  //   price: 0,
  //   description: '',
  //   category: '',
  //   image: '',
  //   rating: {
  //     rate: 0,
  //     count: 0,
  //   },
  // };

  get title() {
    return this.myform.get('title') as FormControl;
  }
  get price() {
    return this.myform.get('price') as FormControl;
  }
  get description() {
    return this.myform.get('description') as FormControl;
  }
  get image() {
    return this.myform.get('image') as FormControl;
  }
  get category() {
    return this.myform.get('category') as FormControl;
  }
  get rate() {
    return this.myform.get('rating.count') as FormControl;
  }
  get count() {
    return this.myform.get('rating.rate') as FormControl;
  }

  constructor(private productService: CartService) {}

  ngOnInit(): void {}
  addProduct(product: any) {
    this.productService.addNewProduct(product);
  }
}
