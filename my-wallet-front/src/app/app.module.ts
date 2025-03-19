import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminProfileComponent } from './features/admin/admin-profile/admin-profile.component';
import { InvestidorProfileComponent } from './features/investidor/investidor-profile/investidor-profile.component';
import { InvestidorWalletComponent } from './features/investidor/investidor-wallet/investidor-wallet.component';
import { AdminBuscarInvestidoresComponent } from './features/admin/admin-buscar-investidores/admin-buscar-investidores.component';
import { LoginComponent } from './features/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminProfileComponent,
    InvestidorProfileComponent,
    InvestidorWalletComponent,
    AdminBuscarInvestidoresComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
