import { Component, Input, OnInit } from '@angular/core';

import { Book, ShelfService } from '../services/shelf.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;

  constructor(private shelfService: ShelfService) {}

  ngOnInit(): void {
    //set the default value for the control to be the current shelf the book is in.
    this.book.shelf = this.shelfService.getBookShelf(this.book.id);
  }

  bookShelfChange() {
    this.shelfService.onUpdateShelf(this.book);
  }
}
