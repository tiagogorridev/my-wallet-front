import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestidorWalletComponent } from './investidor-wallet.component';

describe('InvestidorWalletComponent', () => {
  let component: InvestidorWalletComponent;
  let fixture: ComponentFixture<InvestidorWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestidorWalletComponent]
    });
    fixture = TestBed.createComponent(InvestidorWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
