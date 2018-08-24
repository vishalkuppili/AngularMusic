import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Load module into the browser
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.component';
import { ProductModule } from './products/product.module';

@NgModule({
  // All modules will be declared here
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'order', component: OrderComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: NotFoundComponent}
    ]),
    ProductModule
  ],

  // All pipes and components and routers will be declared here
  declarations: [
    AppComponent,
    OrderComponent,
    HomeComponent,
    NotFoundComponent
  ],

  bootstrap: [
    AppComponent
  ],

  providers: [
  ]
})
export class AppModule { }
