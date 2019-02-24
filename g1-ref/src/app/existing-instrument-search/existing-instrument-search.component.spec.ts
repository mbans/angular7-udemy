import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingInstrumentSearchComponent } from './existing-instrument-search.component';

describe('ExistingInstrumentSearchComponent', () => {
  let component: ExistingInstrumentSearchComponent;
  let fixture: ComponentFixture<ExistingInstrumentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingInstrumentSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingInstrumentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
