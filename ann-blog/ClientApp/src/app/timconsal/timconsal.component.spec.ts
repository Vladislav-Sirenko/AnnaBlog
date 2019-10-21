import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimconsalComponent } from './timconsal.component';

describe('TimconsalComponent', () => {
  let component: TimconsalComponent;
  let fixture: ComponentFixture<TimconsalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimconsalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimconsalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
