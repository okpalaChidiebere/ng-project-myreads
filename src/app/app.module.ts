import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyReadsComponent } from './my-reads/my-reads.component';
import { FindReadsComponent } from './find-reads/find-reads.component';

@NgModule({
  declarations: [AppComponent, MyReadsComponent, FindReadsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
