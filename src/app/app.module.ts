import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.component';
import { ProductModule } from './products/product.module';
import { MusicComponent } from './Music/music.component';
import { MusicService } from './Music/music.service';
import { ImagePath } from './Music/imagePath.pipe';

@NgModule({
  // All modules will be declared here
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'music', component: MusicComponent},
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
    NotFoundComponent,
    MusicComponent,
    ImagePath
  ],

  bootstrap: [
    AppComponent
  ],

  providers: [
    MusicService
  ]
})
export class AppModule { }
