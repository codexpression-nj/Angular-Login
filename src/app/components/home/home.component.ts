import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { RouterOutlet } from '@angular/router';
import { Product, Products } from '../../models/types';
import { ProductsService } from '../../services/products.service';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NgFor,HeaderComponent, RouterOutlet, ProductDetailComponent]
})
export class HomeComponent {
    
    constructor(private productService:ProductsService){

    }
    products: Product[] = [];

    ngOnInit(){
        this.fetchProducts(0,1)
    }

    fetchProducts(page: number, perPage: number) {
        this.productService.getProducts().subscribe((data: any[]) => {
            this.products = data;
          })
           
      }
    
}
