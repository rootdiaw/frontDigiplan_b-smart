import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdigiplanComponent } from './newdigiplan.component';

describe('NewdigiplanComponent', () => {
  let component: NewdigiplanComponent;
  let fixture: ComponentFixture<NewdigiplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdigiplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdigiplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
