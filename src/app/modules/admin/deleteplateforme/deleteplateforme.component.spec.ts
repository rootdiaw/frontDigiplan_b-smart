import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteplateformeComponent } from './deleteplateforme.component';

describe('DeleteplateformeComponent', () => {
  let component: DeleteplateformeComponent;
  let fixture: ComponentFixture<DeleteplateformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteplateformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteplateformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
