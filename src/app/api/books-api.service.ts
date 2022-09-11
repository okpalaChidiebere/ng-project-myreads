import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { lastValueFrom, map } from 'rxjs';

import { Book } from '../services/shelf.service';

const API_HOST = 'https://reactnd-books-api.udacity.com';

export type BookAPI = Omit<Book, 'shelf'>;
type EmptySearch = { error: string; items: [] };
export type SearchResult = { books: BookAPI[] } | EmptySearch;

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

  async getAll(): Promise<{ books: Book[] }> {
    const url = `${API_HOST}/books`;
    const headers = this.headers;
    const req = this.http.get<{ books: Book[] }>(url, { headers });
    // .pipe(map(this.extractData));

    return lastValueFrom(req).catch((e) => {
      this.handleError(e);
      throw e;
    });
  }

  async update(book: any, shelf: string): Promise<Map<string, string[]>> {
    const url = `${API_HOST}/books/${book.id}`;
    let headers = this.headers;
    headers = headers.append('Content-Type', 'application/json');
    const req = this.http.put<Map<string, string[]>>(
      url,
      JSON.stringify({ shelf }),
      { headers }
    );

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
