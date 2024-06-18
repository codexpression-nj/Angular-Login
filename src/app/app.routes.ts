import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    {path: 'home-component', component:HomeComponent},
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'cart', component: CartComponent },
];
