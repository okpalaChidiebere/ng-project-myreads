import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { lastValueFrom, map } from 'rxjs';

const API_HOST = 'https://reactnd-books-api.udacity.com';

type Book = {
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
};

type EmptySearch = { error: string; items: [] };

export type SearchResult = { books: Book[] } | EmptySearch;

@Injectable({
  providedIn: 'root',
})
export class BooksApiService {
  private headers = new HttpHeaders({ Accept: 'application/json' });

  private token: string;

  constructor(private http: HttpClient) {
    // Generate a unique token for storing your bookshelf data on the backend server.
    this.token = localStorage.token;
    if (!this.token)
      this.token = localStorage.token = Math.random().toString(36).substr(-8);

    this.headers = this.headers.append('Authorization', this.token);
  }

  handleError(error: Error) {
    alert(error.message);
  }

  get(bookId: string): Promise<any> {
    const url = `${API_HOST}/books/${bookId}`;
    const req = this.http.get(url, { headers: this.headers });
    // .pipe(map(this.extractData));

    return lastValueFrom(req).catch((e) => {
      this.handleError(e);
      throw e;
    });
  }

  getAll(): Promise<any> {
    const url = `${API_HOST}/books`;
    const headers = this.headers;
    const req = this.http.get(url, { headers }).pipe(map(this.extractData));

    return lastValueFrom(req).catch((e) => {
      this.handleError(e);
      throw e;
    });
  }

  update(book: any, shelf: string): Promise<any> {
    const url = `${API_HOST}/books/${book.id}`;
    let headers = this.headers;
    headers = headers.append('Content-Type', 'application/json');
    const req = this.http.put(url, JSON.stringify({ shelf }), {
      headers: headers,
    });

    return lastValueFrom(req).catch((e) => {
      this.handleError(e);
      throw e;
    });
  }

  async search(query: string): Promise<SearchResult> {
    const url = `${API_HOST}/search`;
    let headers = this.headers;
    headers = headers.append('Content-Type', 'application/json');
    const req = this.http.post<SearchResult>(url, JSON.stringify({ query }), {
      headers: headers,
    });

    return lastValueFrom(req).catch((e) => {
      this.handleError(e);
      throw e;
    });
  }

  /// Utilities
  private extractData(res: HttpEvent<any>) {
    const body = res;
    return body || {};
  }
}
