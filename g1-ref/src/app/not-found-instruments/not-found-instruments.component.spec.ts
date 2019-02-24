import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundInstrumentsComponent } from './not-found-instruments.component';

describe('NotFoundInstrumentsComponent', () => {
  let component: NotFoundInstrumentsComponent;
  let fixture: ComponentFixture<NotFoundInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
