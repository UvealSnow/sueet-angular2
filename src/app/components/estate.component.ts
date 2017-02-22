import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'my-estates',
  // template: '<h3>My Dashboard</h3>',
  templateUrl: '../app/templates/estate.component.html',
  providers: [HttpService]
})

export class EstateComponent implements OnInit, AfterViewInit {
	public estates: any;

	constructor (private http: HttpService, private _router: Router, private _cookie: CookieService) {}

	ngOnInit (): void  {
		this.http.get('estate')
			.then(data => { this.estates = data.estates; console.log(this.estates) });
	}

	ngAfterViewInit(): void {

	}

	onSelect (estate: any): void {
		// console.log(estate);
		this._router.navigate(['/estates', estate.id]);
	}

}
