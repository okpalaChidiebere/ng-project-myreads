import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-reads',
  templateUrl: './find-reads.component.html',
  styleUrls: ['./find-reads.component.css'],
})
export class FindReadsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotToHome() {
    this.router.navigateByUrl('/');
  }
}
