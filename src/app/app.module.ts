import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyReadsComponent } from './my-reads/my-reads.component';
import { FindReadsComponent } from './find-reads/find-reads.component';
import { QueryTrimDirective } from './find-reads/query-trim/query-trim.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyReadsComponent,
    FindReadsComponent,
    QueryTrimDirective,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
