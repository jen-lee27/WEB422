import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShooterGamesComponent } from './shooter-games.component';

describe('ShooterGamesComponent', () => {
  let component: ShooterGamesComponent;
  let fixture: ComponentFixture<ShooterGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShooterGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShooterGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
