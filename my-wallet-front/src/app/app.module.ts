import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminProfileComponent } from './features/admin/admin-profile/admin-profile.component';
import { InvestidorProfileComponent } from './features/investidor/investidor-profile/investidor-profile.component';
import { AdminBuscarInvestidoresComponent } from './features/admin/admin-buscar-investidores/admin-buscar-investidores.component';
import { LoginComponent } from './features/pages/login/login.component';
import { InvestidorHomeComponent } from './features/investidor/investidor-home/investidor-home.component';
import { CarteiraResumoComponent } from './features/investidor/investidor-carteira/carteira-resumo/carteira-resumo.component';
import { CarteiraProventosComponent } from './features/investidor/investidor-carteira/carteira-proventos/carteira-proventos.component';
import { CarteiraGraficosComponent } from './features/investidor/investidor-carteira/carteira-graficos/carteira-graficos.component';
import { CarteiraMetasComponent } from './features/investidor/investidor-carteira/carteira-metas/carteira-metas.component';
import { CarteiraLancamentosComponent } from './features/investidor/investidor-carteira/carteira-lancamentos/carteira-lancamentos.component';
import { CarteiraConfiguracoesComponent } from './features/investidor/investidor-carteira/carteira-configuracoes/carteira-configuracoes.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminProfileComponent,
    InvestidorProfileComponent,
    AdminBuscarInvestidoresComponent,
    LoginComponent,
    InvestidorHomeComponent,
    CarteiraResumoComponent,
    CarteiraProventosComponent,
    CarteiraGraficosComponent,
    CarteiraMetasComponent,
    CarteiraLancamentosComponent,
    CarteiraConfiguracoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
