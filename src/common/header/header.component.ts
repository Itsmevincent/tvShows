import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-tab',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerTitle = "Shows";
  searchShows: any = "";
  pathUrl: any = "";

  constructor(private router: Router) { }
  /* Searching the show names */
  searchBtn() {
    if (this.searchShows && this.searchShows !=" ") {
      this.router.navigate(['tvshows-search', this.searchShows]);
    }
  }
  /* Navigating to dashboard page */
  headerBtn() {
    this.router.navigate(['tvshows-dash']);
    this.searchShows = "";
  }
}