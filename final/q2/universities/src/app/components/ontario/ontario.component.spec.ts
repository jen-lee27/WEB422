import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OntarioComponent } from './ontario.component';

describe('OntarioComponent', () => {
  let component: OntarioComponent;
  let fixture: ComponentFixture<OntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OntarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
