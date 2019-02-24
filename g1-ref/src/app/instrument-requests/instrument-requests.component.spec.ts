import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentRequestsComponent } from './instrument-requests.component';

describe('InstrumentRequestsComponent', () => {
  let component: InstrumentRequestsComponent;
  let fixture: ComponentFixture<InstrumentRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
