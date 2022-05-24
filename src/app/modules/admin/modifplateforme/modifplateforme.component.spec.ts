import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifplateformeComponent } from './modifplateforme.component';

describe('ModifplateformeComponent', () => {
  let component: ModifplateformeComponent;
  let fixture: ComponentFixture<ModifplateformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifplateformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifplateformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
