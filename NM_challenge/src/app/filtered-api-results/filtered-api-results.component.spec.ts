import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredApiResultsComponent } from './filtered-api-results.component';

describe('FilteredApiResultsComponent', () => {
  let component: FilteredApiResultsComponent;
  let fixture: ComponentFixture<FilteredApiResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredApiResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredApiResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
