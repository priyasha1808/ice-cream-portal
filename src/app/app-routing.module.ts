import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { PayComponent } from './pay/pay.component';
import { UsersComponent } from './users/users.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { ContactComponent } from './contact/contact.component';
import { Admin } from 'mongodb';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ServiceComponent } from './service/service.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { TickComponent } from './tick/tick.component';
import { BillComponent } from './bill/bill.component';
import { AddressComponent } from './address/address.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AddflavourComponent } from './addflavour/addflavour.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"shopping-cart",component:ShoppingCartComponent},
  {path:"pay",component:PayComponent},
  {path:"users",component:UsersComponent},
  {path:"forgotpw",component:ForgotpwComponent},
  {path:"contact",component:ContactComponent},
  {path:"admin",component:AdminComponent},
  {path:"about",component:AboutComponent},
  {path:"users",component:UsersComponent},
  {path:"service",component:ServiceComponent},
  {path:"delete",component:DeleteComponent},
  {path:"login-admin",component:LoginAdminComponent},
  {path:"tick",component:TickComponent},
  {path:"bill",component:BillComponent},
  {path:"address",component:AddressComponent},
  {path:"userdashboard",component:UserdashboardComponent},
  {path:"addflavour",component:AddflavourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
