import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { DetailsComponent } from './component/details/details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: ProductsComponent},
  {path:'my-cart',component: CartComponent},
  {path:'products',component: ProductlistComponent},
  {path:'details/:id',component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
