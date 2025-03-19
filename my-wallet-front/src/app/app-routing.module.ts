import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Admin
import { AdminBuscarInvestidoresComponent } from './features/admin/admin-buscar-investidores/admin-buscar-investidores.component';
import { AdminProfileComponent } from './features/admin/admin-profile/admin-profile.component';

// Investidor
import { InvestidorProfileComponent } from './features/investidor/investidor-profile/investidor-profile.component';
import { InvestidorWalletComponent } from './features/investidor/investidor-wallet/investidor-wallet.component';

// Pages (todos os usuários)
import { LoginComponent } from './features/pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // Rotas do Administrador
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: AdminProfileComponent },
      { path: 'buscar-investidores', component: AdminBuscarInvestidoresComponent }
    ],
  },

  // Rotas do Investidor
  {
    path: 'investidor',
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: InvestidorProfileComponent },
      { path: 'wallet', component: InvestidorWalletComponent }
    ],
  },

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
