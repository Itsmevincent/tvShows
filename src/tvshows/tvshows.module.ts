import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TvShowsService } from './tvshows.service';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ShowDetailsComponent } from './showDetails/showDetails.component';
import { ReturnTopComponent } from '../common/returntop/returntop.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SearchComponent,
    ShowDetailsComponent,
    ReturnTopComponent
  ],
  imports: [CommonModule, FormsModule],
  providers: [TvShowsService]

})
export class TvShowsModule { }