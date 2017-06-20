import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailComponent }  from './movie-detail.component';
import { MoviesComponent } from './movies.component';
import { MovieTimeComponent } from './movie-time.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component:  MoviesComponent},
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'time/:id', component: MovieTimeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}