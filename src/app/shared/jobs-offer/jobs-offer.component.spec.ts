import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsOfferComponent } from './jobs-offer.component';

describe('JobsOfferComponent', () => {
  let component: JobsOfferComponent;
  let fixture: ComponentFixture<JobsOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
