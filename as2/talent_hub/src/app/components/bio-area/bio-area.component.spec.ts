import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAreaComponent } from './bio-area.component';

describe('BioAreaComponent', () => {
  let component: BioAreaComponent;
  let fixture: ComponentFixture<BioAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioAreaComponent]
    });
    fixture = TestBed.createComponent(BioAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
