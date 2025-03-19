import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminProfileComponent } from './features/admin/admin-profile/admin-profile.component';
import { InvestidorProfileComponent } from './features/investidor/investidor-profile/investidor-profile.component';
import { WalletsComponent } from './features/investidor/wallets/wallets.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminProfileComponent,
    InvestidorProfileComponent,
    WalletsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
