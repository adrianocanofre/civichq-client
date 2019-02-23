import { Component, OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
import { AppDetails } from './../../../../../shared/models/app-details.model';

import './app-details.component.scss';

@Component({
    selector: 'app-details',
    templateUrl: './app-details.template.html'

})

export class AppDetailsComponent {

    @Input() appDetails: AppDetails;

    technologies: string[];

    ngOnInit(){
    	console.log(this);
    	this.technologies = this.appDetails.technologies.split(',').map(e=>e.trim());

    }

}