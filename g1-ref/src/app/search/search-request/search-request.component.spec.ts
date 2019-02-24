import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentRequestSearchComponent } from './search-request.component';

describe('SearchRequestComponent', () => {
  let component: InstrumentRequestSearchComponent;
  let fixture: ComponentFixture<InstrumentRequestSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentRequestSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentRequestSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
