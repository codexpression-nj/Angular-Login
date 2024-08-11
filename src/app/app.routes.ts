import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'home-component', component:HomeComponent},
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'cart', component: CartComponent },
    {path:'products', component:ProductListComponent},
    { path: 'checkout', component: CheckoutComponent },
    {path:'login',component:AppComponent}

];
