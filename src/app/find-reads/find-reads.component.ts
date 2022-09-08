import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, map, Subject, Subscription } from 'rxjs';

import { BooksApiService, SearchResult } from '../api/books-api.service';

@Component({
  selector: 'app-find-reads',
  templateUrl: './find-reads.component.html',
  styleUrls: ['./find-reads.component.css'],
})
export class FindReadsComponent implements OnInit, OnDestroy {
  query: string = ''; //we will bind our input field to to whatever the value of a certain property of a state is
  books: Promise<SearchResult>;
  subject = new Subject<string>();
  searchSub: Subscription;

  constructor(private router: Router, private booksApi: BooksApiService) {}

  ngOnInit(): void {
    this.searchSub = this.subject
      .pipe(
        debounceTime(500),
        map((searchText) => this.booksApi.search(searchText))
      )
      .subscribe((data) => {
        this.books = data;
      });
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }

  gotToHome() {
    this.router.navigateByUrl('/');
  }

  searchBooks() {
    if (this.query === '') return;
    this.subject.next(this.query);
  }
}
