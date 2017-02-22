import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Token } from './_models/token';

@Component({
  selector: 'my-app',
  templateUrl: './app/templates/app.component.html',
})

export class AppComponent implements OnInit { 
	public token: any;

	constructor(private _cookie: CookieService, private _router: Router) {  }


	ngOnInit(): void {
		this.token = this._cookie.getObject('token');
		if (this.token == undefined || this.token.access_token == undefined) this._router.navigateByUrl('/login');
		// if (this.token != undefined && this.token.access_token != undefined) this._router.navigateByUrl('/dashboard');
		// else this._router.navigateByUrl('login');
	}

}