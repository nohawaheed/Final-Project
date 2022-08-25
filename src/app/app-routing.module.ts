import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/login/login.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { NotfoundPageComponent } from './Components/notfound-page/notfound-page.component';
import { RegisterComponent } from './Components/register/register.component';
import { TvComponent } from './Components/tv/tv.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomepageComponent },
  { path: 'tv', canActivate: [AuthGuard], component: TvComponent },
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent },
  {
    path: 'moviedetails/:id',
    canActivate: [AuthGuard],
    component: MovieDetailsComponent,
  },
  {
    path: 'tvdetails/:id',
    canActivate: [AuthGuard],
    component: TvDetailsComponent,
  },
  { path: '**', component: NotfoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
