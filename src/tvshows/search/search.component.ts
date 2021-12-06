import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvShowsService } from '../tvshows.service';

@Component({
    selector: 'search-tab',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    searchTitle = "Search Shows";
    searchList: any = [];
    showName: any = this.route.snapshot.paramMap.get('showName');

    constructor(private tvShowsService: TvShowsService,
        private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        if (this.showName) {
            /* Searching the series based on show name */
            this.tvShowsService.getShowSearch(this.showName).subscribe((searchResult: any) => {
                this.searchList = searchResult;
                this.searchList.sort((a: any, b: any) => b.show.rating.average - a.show.rating.average);
            });
        }
    }

}