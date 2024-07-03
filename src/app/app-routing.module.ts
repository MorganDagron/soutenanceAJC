import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  { path: 'apropos', component: AproposComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
