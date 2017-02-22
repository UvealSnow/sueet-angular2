import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }	 from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './components/login.component';
import { LogoutComponent }  from './components/logout.component';
import { DashboardComponent }  from './components/dashboard.component';
import { EstateComponent }  from './components/estate.component';
import { EstateShowComponent }  from './components/estate-show.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'estates', component: EstateComponent },
  { path: 'estates/:id', component: EstateShowComponent },
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
  		LogoutComponent,
      DashboardComponent,
      EstateComponent,
  		EstateShowComponent
  	],
	providers: 	[ CookieService ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
