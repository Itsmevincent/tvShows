import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'show-panel',
    templateUrl: './showpanel.component.html',
    styleUrls: ['./showpanel.component.scss']
})
export class ShowPanelComponent {
    @Input() shows: any;

    constructor(private router: Router) { }
    /* Navigating to search detail page */
    showBtn(showId: any) {
        if (showId) {
          this.router.navigate(['tvshows-showdetails', showId]);
        }
      }
}