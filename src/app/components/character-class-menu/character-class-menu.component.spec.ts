import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterClassMenuComponent } from './character-class-menu.component';

describe('CharacterClassMenuComponent', () => {
  let component: CharacterClassMenuComponent;
  let fixture: ComponentFixture<CharacterClassMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterClassMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterClassMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
