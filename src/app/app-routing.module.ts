import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../tvshows/dashboard/dashboard.component';
import { SearchComponent } from '../tvshows/search/search.component';
import {ShowDetailsComponent} from '../tvshows/showDetails/showDetails.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'tvshows-dash', component: DashboardComponent },
      { path: '', redirectTo: '/tvshows-dash', pathMatch: 'full' },
      { path: 'tvshows-search/:showName', component: SearchComponent },
      { path: 'tvshows-showdetails/:id', component: ShowDetailsComponent },
      { path: '**', redirectTo: '/tvshows-dash' },
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
