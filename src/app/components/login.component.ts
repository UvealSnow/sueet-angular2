import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/map';

import { HttpService } from '../services/http.service';
import { User } from '../classes/user';
import { Token } from '../classes/token';

@Component({
  selector: 'my-app',
  templateUrl: '../app/templates/login.component.html',
  providers: [HttpService]
})

export class LoginComponent implements OnInit { 
	private loginUrl = 'http://localhost:8000/oauth/token';
	public user: User = { email: null, password: null };
	public token: Token;

	constructor(private _http: Http, private http: HttpService, private _cookie: CookieService, private _router: Router) {  }

	ngOnInit(): void {
		// this.token = this._cookie.getObject('token');
		// if (this.token != undefined) console.log(this.token);
	}

	login(): void {

		// console.log(this.user);

		const formData = new FormData();
		formData.append("grant_type", 'password');
		formData.append("client_id", '2');
		formData.append("client_secret", 'Oi03SsVwusAFC8KxF8tju9K1vSoMrxd7xaCbuKjb');
		formData.append("username", this.user.email);
		formData.append("password", this.user.password);
		formData.append("scope", '');

		this._http.post(this.loginUrl, formData)
			.map(res => res.json())
			.subscribe(data => {
				this.token = data;
				this._cookie.putObject('token', this.token);
				// console.log(this._cookie.getObject('token'));
				this._router.navigateByUrl('/dashboad');
			},
			err => {
				this.handleError(err);
			});

	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	}

}
