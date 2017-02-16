import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }	 from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './components/login.component';
import { DashboardComponent }  from './components/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  	imports:      [ 
	  	BrowserModule,
	  	HttpModule,
	  	FormsModule,
	  	RouterModule.forRoot(appRoutes)
  	],
  	declarations: [ 
  		AppComponent,
  		LoginComponent,
  		DashboardComponent
  	],
	providers: 	[ CookieService ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
