import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingInstrumentSearchParentComponent } from './existing-instrument-search-parent.component';

describe('ExistingInstrumentSearchParentComponent', () => {
  let component: ExistingInstrumentSearchParentComponent;
  let fixture: ComponentFixture<ExistingInstrumentSearchParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingInstrumentSearchParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingInstrumentSearchParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
