import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedArmorDetailsComponent } from './typed-armor-details.component';

describe('TypedArmorDetailsComponent', () => {
  let component: TypedArmorDetailsComponent;
  let fixture: ComponentFixture<TypedArmorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypedArmorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypedArmorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
