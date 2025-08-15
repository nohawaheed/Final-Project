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
import { TvDetailsComponent } from './Components/tv-details/tv-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './Components/header/header.component';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { PeopleComponent } from './Components/people/people.component';
import { PeopleDetailsComponent } from './Components/people-details/people-details.component';

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
    TvDetailsComponent,
    HeaderComponent,
    PeopleComponent,
    PeopleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
