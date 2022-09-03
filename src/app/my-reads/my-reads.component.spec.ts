import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReadsComponent } from './my-reads.component';

describe('MyReadsComponent', () => {
  let component: MyReadsComponent;
  let fixture: ComponentFixture<MyReadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
