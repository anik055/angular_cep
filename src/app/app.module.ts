import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CreateLicenseComponent } from './create-license/create-license.component';
import { FormsModule } from '@angular/forms';
import { AlertService } from './common/alert/alert';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CreateLicenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
