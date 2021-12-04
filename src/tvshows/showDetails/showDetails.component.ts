import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowsService } from '../tvshows.service';

@Component({
    selector: 'show-details-tab',
    templateUrl: './showDetails.component.html',
    styleUrls: ['./showDetails.component.scss']
})
export class ShowDetailsComponent implements OnInit {
    showDetailsTitle = 'Show Info';
    castTitle: any = 'Cast';
    showdetails: any = "";
    genres: any = "";
    showId: any = this.route.snapshot.paramMap.get('id');;
    castDetails: any = [];

    constructor(private tvShowsService: TvShowsService, private route: ActivatedRoute) {}
         
    ngOnInit(){
        if (this.showId) {
            this.tvShowsService.getShowById(this.showId).subscribe((showResult: any) => {
                this.showdetails = showResult;
                this.genres = showResult.genres.join(' | ');
                this.getCastDetails();
            });
        }
    }
    getCastDetails() {
        this.tvShowsService.getShowCast(this.showId).subscribe((castResult: any) => {
            castResult.forEach((castItem: any) => {
                if (castItem.character.image) {
                    this.castDetails.push(castItem);
                }
            });
        });
    }
}