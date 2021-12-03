import { Component } from '@angular/core';
import { TvShowsService } from '../tvshows.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  title = 'Dashboard';
  recordMessage = "No record";
  showActionList: any = [];
  showComdeyList: any = [];
  showDramaList: any = [];
  showPopularList: any = [];

  constructor(private tvShowsService: TvShowsService, private router: Router) {
    this.tvShowsService.getAllShows().subscribe((res: any) => {
      res.forEach((item: any) => {
        if (item.rating.average) {
          this.showPopularList.push(item);
          if (item.genres.length > 0) {
            for (let genres of item.genres) {
              switch (genres) {
                case 'Action': return this.showActionList.push(item);
                case 'Comedy': return this.showComdeyList.push(item);
                case 'Drama': return this.showDramaList.push(item);
              }
            }
          }
        }
      });
      this.showPopularList.sort((a: any, b: any) => b.rating.average - a.rating.average);
      this.showActionList.sort((a: any, b: any) => b.rating.average - a.rating.average);
      this.showComdeyList.sort((a: any, b: any) => b.rating.average - a.rating.average);
      this.showDramaList.sort((a: any, b: any) => b.rating.average - a.rating.average);
    });
  }

  showBtn(showId: any) {
    if (showId) {
      this.router.navigate(['tvshows-showdetails', showId]);
    }
  }
}