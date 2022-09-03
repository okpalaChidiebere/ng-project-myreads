import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-reads',
  templateUrl: './my-reads.component.html',
  styleUrls: ['./my-reads.component.css'],
})
export class MyReadsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  findBook() {
    this.router.navigateByUrl('/search');
  }
}
