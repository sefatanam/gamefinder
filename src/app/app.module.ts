import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { GaugeModule } from "angular-gauge";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpHeadersInterceptor } from "./interceptors/http-headers.interceptor";
import { HttpErrorsInterceptor } from "./interceptors/http-errors.interceptor";
import { DetailsComponent } from './components/details/details.component';
import { GameTabsComponent } from './components/game-tabs/game-tabs.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent,
    GameTabsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GaugeModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorsInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
