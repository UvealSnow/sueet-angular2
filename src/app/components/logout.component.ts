import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'my-logout',
  // template: '<h3>My Dashboard</h3>',
  templateUrl: '../app/templates/logout.component.html',
  providers: [HttpService]
})

export class LogoutComponent implements OnInit, AfterViewInit {
	public estates: any;

	constructor (private _router: Router, private _cookie: CookieService) {}

	ngOnInit (): void  {
		this._cookie.remove('token');
	}

}
