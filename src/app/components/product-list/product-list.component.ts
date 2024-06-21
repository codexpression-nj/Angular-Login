import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[] = [];
constructor(private productService:ProductsService){

}
ngOnInit(): void {
  this.productService.getProducts().subscribe((data: any[]) => {
    this.products = data;
  });
}
}
