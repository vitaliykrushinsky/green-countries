import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FwModule } from '../fw/fw.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    DashboardComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FwModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
