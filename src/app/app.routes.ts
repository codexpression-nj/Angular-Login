import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    {path: 'home-component', component:HomeComponent},
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'cart', component: CartComponent },
    {path:'products', component:ProductListComponent}
];
