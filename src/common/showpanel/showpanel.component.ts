import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'show-panel',
    templateUrl: './showpanel.component.html',
    styleUrls: ['./showpanel.component.scss']
})
export class ShowPanelComponent implements OnInit {
    @Input() shows: any;

    constructor(private router: Router) { }

    ngOnInit() {}

    showBtn(showId: any) {
        if (showId) {
          this.router.navigate(['tvshows-showdetails', showId]);
        }
      }
}