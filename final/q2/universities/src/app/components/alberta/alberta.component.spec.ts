import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbertaComponent } from './alberta.component';

describe('AlbertaComponent', () => {
  let component: AlbertaComponent;
  let fixture: ComponentFixture<AlbertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbertaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
