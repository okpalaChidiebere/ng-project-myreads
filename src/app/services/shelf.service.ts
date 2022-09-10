import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { BooksApiService } from '../api/books-api.service';

export type Book = {
  title: string;
  subtitle?: string | undefined;
  authors?: string[] | undefined;
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: { type: string; identifier: string }[];
  readingModes: { text: boolean; image: boolean };
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  imageLinks: {
    smallThumbnail?: string | undefined;
    thumbnail: string;
  };
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  id: string;
  shelf: string;
};

@Injectable({
  providedIn: 'root',
})
export class ShelfService {
  private booksEmitter: BehaviorSubject<Book[]> = new BehaviorSubject([]);
  public readonly books: Observable<Book[]> = this.booksEmitter.asObservable();

  constructor(private booksApi: BooksApiService) {}

  async refreshBooksInMyShelf() {
    try {
      const res = await this.booksApi.getAll();
      this.booksEmitter.next(res.books);
    } catch (e) {
      console.log(e.message);
    }
  }

  getBooks() {
    return this.books;
  }
}
