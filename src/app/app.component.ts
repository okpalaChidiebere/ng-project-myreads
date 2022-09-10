import { Component, OnInit } from '@angular/core';
import { ShelfService } from './services/shelf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private shelfService: ShelfService) {}

  ngOnInit(): void {
    this.shelfService.refreshBooksInMyShelf();
  }
}
