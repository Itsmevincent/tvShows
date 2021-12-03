import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-tab',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerTitle = "TV Shows";
  searchShows: any = "";
  pathUrl: any = "";

  constructor(private router: Router) { }
  searchBtn() {
    if (this.searchShows) {
      this.router.navigate(['tvshows-search', this.searchShows]);
    }
  }

  headerBtn() {
    this.router.navigate(['tvshows-dash']);
    this.searchShows = "";
  }
}