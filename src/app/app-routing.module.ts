import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindReadsComponent } from './find-reads/find-reads.component';
import { MyReadsComponent } from './my-reads/my-reads.component';
import { RouterModule, Routes } from '@angular/router';

// sets up routes constant where you define your routes
const routes: Routes = [
  { path: 'search', component: FindReadsComponent },
  { path: '', component: MyReadsComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
