import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternanceComponent } from './alternance.component';

describe('AlternanceComponent', () => {
  let component: AlternanceComponent;
  let fixture: ComponentFixture<AlternanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlternanceComponent]
    });
    fixture = TestBed.createComponent(AlternanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
