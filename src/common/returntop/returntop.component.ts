import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core'

@Component({
    selector: 'return-top',
    templateUrl: './returntop.component.html',
    styleUrls: ['./returntop.component.scss']
})
export class ReturnTopComponent implements OnInit {
    returnTitle = 'Top';
    @HostListener('window:scroll', ['$event'])
    ngOnInit() {
        this.scrollFunction();
    }

    scrollFunction() {
        let mybutton = document.getElementById('myBtn') as HTMLElement;
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}