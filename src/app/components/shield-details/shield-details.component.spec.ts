import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShieldDetailsComponent } from './shield-details.component';

describe('ShieldDetailsComponent', () => {
  let component: ShieldDetailsComponent;
  let fixture: ComponentFixture<ShieldDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShieldDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShieldDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
