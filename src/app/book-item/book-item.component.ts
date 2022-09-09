import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../api/books-api.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book & { shelf: string };

  constructor() {}

  ngOnInit(): void {}
}
