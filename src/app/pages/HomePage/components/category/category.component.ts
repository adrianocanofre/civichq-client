import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
    @Input() category;
    public noOfApps = 1;
    public theSlides = [];


    constructor(@Inject('Window') window:Window, private router:Router) {
        this.noOfApps = CategoryComponent.getNumberOfAppsPerSlide(window.innerWidth);
    }

    ngOnInit() {
        this.theSlides = this.getSlides();

    }

    goToApp(app) {
        let appName = app.appName = app.appName.replace(/\s+/g, '');
        let link = ['/apps', app.id, appName];
        this.router.navigate(link);

    }

    getSlides() {
        return new Array(Math.ceil(this.category.apps.length / this.noOfApps));
    }

    onResize(event) {
        const size = event.target.innerWidth;
        const oldNoOfApps = this.noOfApps;
        this.noOfApps = CategoryComponent.getNumberOfAppsPerSlide(size);
        if (oldNoOfApps != this.noOfApps) {
            this.theSlides = [];
            setTimeout(() => {
                this.theSlides = this.getSlides();
            }, 50);
        }
    }

    static getNumberOfAppsPerSlide(size) {
        if (size > 1200) {
            return 4;
        } else if (size > 991 ) {
            return 3;
        } else if (size > 767) {
            return 2;
        } else{
            return 1;
        }
    }
}
