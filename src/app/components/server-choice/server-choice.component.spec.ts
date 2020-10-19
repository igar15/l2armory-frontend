import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerChoiceComponent } from './server-choice.component';

describe('ServerChoiceComponent', () => {
  let component: ServerChoiceComponent;
  let fixture: ComponentFixture<ServerChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
