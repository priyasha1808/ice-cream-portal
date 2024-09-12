import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PayComponent } from './pay/pay.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { UsersComponent } from './users/users.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NodeutilityService } from './nodeutility.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceComponent } from './service/service.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { MyhighlightDirective } from './myhighlight.directive';
import { MylenPipe } from './mylen.pipe';
import { TickComponent } from './tick/tick.component';
import { MobilevalidateDirective } from './mobilevalidate.directive';
import { BillComponent } from './bill/bill.component';
import { AddressComponent } from './address/address.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AddflavourComponent } from './addflavour/addflavour.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    ContactComponent,
    AboutComponent,
    PayComponent,
    RegisterComponent,
    AdminComponent,
    ShoppingComponent,
    UsersComponent,
    ForgotpwComponent,
    ShoppingCartComponent,
    ServiceComponent,
    DeleteComponent,
    LoginAdminComponent,
    MyhighlightDirective,
    MylenPipe,
    TickComponent,
    MobilevalidateDirective,
    BillComponent,
    AddressComponent,
    UserdashboardComponent,
    AddflavourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [NodeutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
