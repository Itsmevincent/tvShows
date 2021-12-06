import { Component, OnInit } from '@angular/core';
import { TvShowsService } from '../tvshows.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  recordMessage = "No record";
  showLists: any = [];
  totalGenresList: any = [];

  constructor(private tvShowsService: TvShowsService) { }

  ngOnInit() {
    /* Getting all the show details*/
    this.tvShowsService.getAllShows().subscribe((res: any) => {
      this.showLists = res.sort((a: any, b: any) => b.rating.average - a.rating.average);
      this.showLists.forEach((item: any) => {
        this.totalGenresList = [...this.totalGenresList, ...item.genres];
      });
      this.totalGenresList = [...new Set(this.totalGenresList)].sort();
    });
  }
}