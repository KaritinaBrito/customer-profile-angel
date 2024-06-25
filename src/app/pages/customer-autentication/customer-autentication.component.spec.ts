import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAutenticationComponent } from './customer-autentication.component';

describe('CustomerAutenticationComponent', () => {
  let component: CustomerAutenticationComponent;
  let fixture: ComponentFixture<CustomerAutenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAutenticationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAutenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
