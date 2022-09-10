import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Book, ShelfService } from '../services/shelf.service';

@Component({
  selector: 'app-my-reads',
  templateUrl: './my-reads.component.html',
  styleUrls: ['./my-reads.component.css'],
})
export class MyReadsComponent implements OnInit, OnDestroy {
  sub: Subscription;
  myReads: Map<string, Book[]> | {}; //groups the books by their shelf

  constructor(private router: Router, private shelfService: ShelfService) {}

  ngOnInit(): void {
    this.sub = this.shelfService.books.subscribe((books) => {
      this.myReads = books.reduce((acc, currentBook) => {
        const shelfKey = currentBook.shelf;
        if (!acc[shelfKey]) {
          acc[shelfKey] = [];
        }
        acc[shelfKey].push(currentBook);
        return acc;
      }, {});
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  findBook() {
    this.router.navigateByUrl('/search');
  }
}
