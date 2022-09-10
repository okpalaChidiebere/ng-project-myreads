import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyReadsComponent } from './my-reads/my-reads.component';
import { FindReadsComponent } from './find-reads/find-reads.component';
import { QueryTrimDirective } from './find-reads/query-trim/query-trim.directive';
import { BookItemComponent } from './book-item/book-item.component';
import { TitleCaseWithSpacePipe } from './pipes/title-case-with-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyReadsComponent,
    FindReadsComponent,
    QueryTrimDirective,
    BookItemComponent,
    TitleCaseWithSpacePipe,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
