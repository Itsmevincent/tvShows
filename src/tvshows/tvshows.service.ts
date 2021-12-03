import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  apiUrl: string = "http://api.tvmaze.com/";
  extendUrl = "shows/";

  constructor(private httpClient: HttpClient) { }

  getAllShows() {
    return this.httpClient.get(this.apiUrl + "show");
  }

  getShowById(showId: any) {
    return this.httpClient.get(this.apiUrl + this.extendUrl + showId);
  }

  getShowCast(castId: any) {
    return this.httpClient.get(this.apiUrl + this.extendUrl + castId + "/cast");
  }

  getShowSearch(showName: any) {
    return this.httpClient.get(this.apiUrl + "search/shows?q=" + showName);
  }
}