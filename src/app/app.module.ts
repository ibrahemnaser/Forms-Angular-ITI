import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SearchPipe } from './_pipes/search.pipe';
import { SliceStringPipe } from './_pipes/slice-string.pipe';
import { RepeatDirective } from './_directives/repeat.directive';
import { AddproductComponent } from './components/addproduct/addproduct.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ProductlistComponent, ProductCardComponent, SearchPipe, SliceStringPipe, RepeatDirective, AddproductComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
