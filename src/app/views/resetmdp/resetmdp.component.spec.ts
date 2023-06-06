import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetmdpComponent } from './resetmdp.component';

describe('ResetmdpComponent', () => {
  let component: ResetmdpComponent;
  let fixture: ComponentFixture<ResetmdpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetmdpComponent]
    });
    fixture = TestBed.createComponent(ResetmdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
