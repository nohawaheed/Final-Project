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
import { PeopleDetailsComponent } from './Components/people-details/people-details.component';
import { PeopleComponent } from './Components/people/people.component';
import { TvDetailsComponent } from './Components/tv-details/tv-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomepageComponent },
  { path: 'tv/:id', canActivate: [AuthGuard], component: TvComponent },
  {
    path: 'movies/:id',
    canActivate: [AuthGuard],
    component: MoviesComponent,
  },
  {
    path: 'people',
    canActivate: [AuthGuard],
    component: PeopleComponent,
  },
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
  {
    path: 'persondetails/:id',
    canActivate: [AuthGuard],
    component: PeopleDetailsComponent,
  },
  { path: '**', component: NotfoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
