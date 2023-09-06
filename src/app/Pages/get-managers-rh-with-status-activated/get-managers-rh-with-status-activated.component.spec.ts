import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetManagersRhWithStatusActivatedComponent } from './get-managers-rh-with-status-activated.component';

describe('GetManagersRhWithStatusActivatedComponent', () => {
  let component: GetManagersRhWithStatusActivatedComponent;
  let fixture: ComponentFixture<GetManagersRhWithStatusActivatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetManagersRhWithStatusActivatedComponent]
    });
    fixture = TestBed.createComponent(GetManagersRhWithStatusActivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
