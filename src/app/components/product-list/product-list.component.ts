import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[] = [];
  categories: any[] = [];
  selectedCategory: string = '';

constructor(private productService:ProductsService){

}
ngOnInit(): void {
  this.productService.getProducts().subscribe((data: any[]) => {
    this.products = data;
  });
  this.productService.getCategories().subscribe((categories: any[]) => {
    this.categories = categories;
  });
}

onCategoryChange(event: Event): void {
  const selectElement = event.target as HTMLSelectElement;
  const category = selectElement.value;
  this.selectedCategory = category;
  if (category === '') {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  } else {
    this.productService.getProductsByCategory(category).subscribe((data: any[]) => {
      this.products = data;
    });
  }
}

}
