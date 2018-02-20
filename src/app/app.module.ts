import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ViewsSharedModule } from './views/shared/views.shared.module';
import { BucketsModule } from './views/buckets/buckets.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DashboardModule,
    BucketsModule,
    CoreModule,
    SharedModule,
    ViewsSharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
