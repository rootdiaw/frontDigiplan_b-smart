import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplateformeComponent } from './listplateforme.component';

describe('ListplateformeComponent', () => {
  let component: ListplateformeComponent;
  let fixture: ComponentFixture<ListplateformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListplateformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListplateformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
