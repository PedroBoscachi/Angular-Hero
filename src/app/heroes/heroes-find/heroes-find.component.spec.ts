import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesFindComponent } from './heroes-find.component';

describe('HeroesFindComponent', () => {
  let component: HeroesFindComponent;
  let fixture: ComponentFixture<HeroesFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesFindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
