import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L20InputoutputComponent } from './l-20-inputoutput.component';

describe('L20InputoutputComponent', () => {
  let component: L20InputoutputComponent;
  let fixture: ComponentFixture<L20InputoutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L20InputoutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L20InputoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
