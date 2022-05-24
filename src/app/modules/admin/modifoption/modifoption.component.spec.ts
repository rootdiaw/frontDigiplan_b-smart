import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifoptionComponent } from './modifoption.component';

describe('ModifoptionComponent', () => {
  let component: ModifoptionComponent;
  let fixture: ComponentFixture<ModifoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
