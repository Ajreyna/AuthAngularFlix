import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from'@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HeroComponent } from './hero/hero.component';
import { TitleListComponent } from './title-list/title-list.component';
import { HeroButtonComponent } from './hero-button/hero-button.component';
import { ItemComponent } from './item/item.component';
import { ListToggleComponent } from './list-toggle/list-toggle.component';
import { MainComponent } from './main/main.component';
import {MovieService} from './movie.service';
import {MovieApiService} from './movie-api.service';
import {ApiService} from './api.service';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { mainModule } from 'process';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SearchBoxComponent,
    HeroComponent,
    TitleListComponent,
    HeroButtonComponent,
    ItemComponent,
    ListToggleComponent,
    MainComponent,
    SignupLoginComponent,

  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
  
  ],
  providers: [MovieService,MovieApiService,ApiService,
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
