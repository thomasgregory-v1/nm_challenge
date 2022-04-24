import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFilteringComponent } from './test-filtering.component';

describe('TestFilteringComponent', () => {
  let component: TestFilteringComponent;
  let fixture: ComponentFixture<TestFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFilteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
