import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import { HttpService } from '../services/http.service';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from '../app.module';
// platformBrowserDynamic().bootstrapModule(AppModule);
// declare var $:JQueryStatic;

@Component({
  selector: 'my-dashboard',
  // template: '<h3>My Dashboard</h3>',
  templateUrl: '../app/templates/dashboard.component.html',
  providers: [HttpService]
})

export class DashboardComponent implements OnInit, AfterViewInit {
	@ViewChild('wrapper') el: ElementRef;
	public token: any;
	public dashboard: any;

	constructor(private http: HttpService, private _router: Router, private _cookie: CookieService) {}

	ngOnInit(): void {
		// this.logout();
		this.token = this._cookie.getObject('token');
		// console.log(this.token);
		if (this.token == undefined || this.token.access_token == undefined) this.logout();
		this.http.get('dashboard')
			.then(data => {
				this.dashboard = data;
				// console.log(this.dashboard);
			})
	}

	ngAfterViewInit (): void {
		// var dataPreferences = {
		//     series: [
		//         [25, 30, 20, 25]
		//     ]
		// };

		// var optionsPreferences = {
		//     donut: true,
		//     donutWidth: 40,
		//     startAngle: 0,
		//     height: "245px",
		//     total: 100,
		//     showLabel: false,
		//     axisX: {
		//         showGrid: false
		//     }
		// };

		// Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

		// Chartist.Pie('#chartPreferences', {
		//   labels: ['60%','40%'],
		//   series: [60, 40]
		// });

		//   **************** Public Preferences - Pie Chart ******************** 

		// var dataPreferences2 = {
		//     series: [
		//         [25, 30, 20, 25]
		//     ]
		// };

		// var optionsPreferences2 = {
		//     donut: true,
		//     donutWidth: 40,
		//     startAngle: 0,
		//     height: "245px",
		//     total: 100,
		//     showLabel: false,
		//     axisX: {
		//         showGrid: false
		//     }
		// };

		// Chartist.Pie('#chartPreferences2', dataPreferences2, optionsPreferences2);

		// Chartist.Pie('#chartPreferences2', {
		//   labels: ['40%','60%'],
		//   series: [40, 60]
		// });
	}

	logout(): void {
		this._cookie.remove('token');
		this._router.navigateByUrl('/login');
	}

}