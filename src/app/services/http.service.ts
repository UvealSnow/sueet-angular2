import { Injectable } 	 from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';

// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Token } from '../classes/token';
// import { USERS } from '../dummy/users';

@Injectable() 
export class HttpService {
	private apiUrl = 'http://localhost:8000/api';
	public token: Token;

	constructor(private http: Http, private _cookie: CookieService) {  }

	// getUsers(): Promise<User[]> {
	// 	return Promise.resolve(USERS);
	// }

	get(uri: string): Promise<any> {
		// const url = `${this.apiUrl}/${uri}`;
		// return this.http.get(url)
		// 			.toPromise()
		// 			.then(function(res) {
		// 				return Promise.resolve(res);
		// 			})
		// 			.catch(this.handleError);

		return new Promise (resolve => {
			const url = `${this.apiUrl}/${uri}`;
			console.log(this.getHeaders());
			// this.http.get(url, { headers: api_headers })
			this.http.get(url)
				.map(res => res.json())
				.subscribe(data => {
					this.data = data;
					console.log(this.data);
					resolve(this.data);
				});

		});
	}

	// post(uri: string): Promise<any> {	
	// 	const url = `${this.apiUrl}/${uri}`;
	// 	return this.http.post	(url)
	// 				.toPromise()
	// 				.then(response => response.json() as response)
	// 				.catch(this.handleError);
	// }

	// delete(uri: string): Promise<any> {
	// 	const url = `${this.apiUrl}/${uri}`;
	// 	return this.http.get(url)
	// 				.toPromise()
	// 				.then(response => response.json() as response)
	// 				.catch(this.handleError);
	// }

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	}

	getHeaders() {

		return this._cookie.getObject('token');
		// if (this._cookie.getObject('token'))

	}

	getHeaders() {

		if (this.token && this._cookie.getObject('token') != undefined) {

			return new Promise (resolve => {
				let api_headers = new Headers();
				api_headers.append('Content-type', 'application-json');
				api_headers.append('Accept', 'application-json');
				api_headers.append('Authorization', 'Bearer ' + this.credentials.bearer);
			});

		}

		return false;

	}

	// getHeaders() {
	// 	return true;

		// if (this.credentials) {
		// 	console.log(this.credentials);
		// 	return Promise.resolve(JSON.parse(this.credentials));
		// }

		// return new Promise (resolve => {

		// 	this.dataCtrl.getData()
		// 		.then((credentials) => {
		// 			this.credentials = JSON.parse(credentials);

		// 			let api_headers = new Headers();
		// 			api_headers.append('Content-type', 'application/json');
		// 			api_headers.append('Accept', 'application/json');
		// 			api_headers.append('Authorization', 'Bearer ' + this.credentials.bearer);

		// 			resolve(api_headers);
		// 		});

		// });

}