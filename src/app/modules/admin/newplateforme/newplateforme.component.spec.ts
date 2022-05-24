import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewplateformeComponent } from './newplateforme.component';

describe('NewplateformeComponent', () => {
  let component: NewplateformeComponent;
  let fixture: ComponentFixture<NewplateformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewplateformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewplateformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
