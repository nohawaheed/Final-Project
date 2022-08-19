import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/login/login.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NotfoundPageComponent } from './Components/notfound-page/notfound-page.component';
import { RegisterComponent } from './Components/register/register.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { TvComponent } from './Components/tv/tv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    MovieDetailsComponent,
    NavbarComponent,
    NotfoundPageComponent,
    MoviesComponent,
    TvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
