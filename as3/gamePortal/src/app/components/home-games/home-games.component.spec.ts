import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGamesComponent } from './home-games.component';

describe('HomeGamesComponent', () => {
  let component: HomeGamesComponent;
  let fixture: ComponentFixture<HomeGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
