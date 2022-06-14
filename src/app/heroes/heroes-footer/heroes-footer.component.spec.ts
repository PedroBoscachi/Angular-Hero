import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesFooterComponent } from './heroes-footer.component';

describe('HeroesFooterComponent', () => {
  let component: HeroesFooterComponent;
  let fixture: ComponentFixture<HeroesFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
