import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspaceComponent } from './inspace.component';

describe('InspaceComponent', () => {
  let component: InspaceComponent;
  let fixture: ComponentFixture<InspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
