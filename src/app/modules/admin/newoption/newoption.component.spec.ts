import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewoptionComponent } from './newoption.component';

describe('NewoptionComponent', () => {
  let component: NewoptionComponent;
  let fixture: ComponentFixture<NewoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
