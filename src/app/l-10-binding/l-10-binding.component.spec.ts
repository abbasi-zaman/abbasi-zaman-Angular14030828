import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L10BindingComponent } from './l-10-binding.component';

describe('L10BindingComponent', () => {
  let component: L10BindingComponent;
  let fixture: ComponentFixture<L10BindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L10BindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L10BindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
