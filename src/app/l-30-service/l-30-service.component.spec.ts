import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L30ServiceComponent } from './l-30-service.component';

describe('L30ServiceComponent', () => {
  let component: L30ServiceComponent;
  let fixture: ComponentFixture<L30ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L30ServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L30ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
