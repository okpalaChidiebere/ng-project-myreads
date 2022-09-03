import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindReadsComponent } from './find-reads.component';

describe('FindReadsComponent', () => {
  let component: FindReadsComponent;
  let fixture: ComponentFixture<FindReadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindReadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
