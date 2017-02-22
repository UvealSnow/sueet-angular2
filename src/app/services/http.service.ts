import { Injectable } 	 from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

import 'rxjs/add/operator/map';

import { Token } from '../classes/token';

@Injectable() 
export class HttpService {
	private apiUrl = 'http://localhost:8000/api';
	public token: any;
	public data: any;

	constructor(private http: Http, private _cookie: CookieService, private _router: Router) {
		this.token = this._cookie.getObject('token');
	}

	get(uri: string): Promise<any> {

		return new Promise (resolve => {
			const url = `${this.apiUrl}/${uri}`;
			var api_headers = this.getHeaders();
			this.http.get(url, { headers: api_headers })
				.map(res => res.json())
				.subscribe(data => {
					this.data = data;
					resolve(this.data);
				});

		});
	}

	post (uri: string, data: Array<any>): Promise<any> {

		return new Promise (resolve => {
			const url = `${this.apiUrl}/${uri}`;
			console.log(this.getHeaders());

			this.http.post(url, data)
				.map(res => res.json())
				.subscribe(data => {
					this.data = data;
					resolve(this.data);
				})
		});

	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	}

	getHeaders() {
		if (this.token == undefined && this.token.access_token == undefined) this._router.navigateByUrl('/login');
		else {
			let api_headers = new Headers();
			api_headers.append('Content-type', 'application/json');
			api_headers.append('Accept', 'application/json');
			api_headers.append('Authorization', 'Bearer ' + this.token.access_token);
			return api_headers;	
		}
		return false;
	}

}