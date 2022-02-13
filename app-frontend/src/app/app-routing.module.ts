import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApolicesComponent } from './components/apolices/apolices.component';
import { CadastrarClientesComponent } from './components/cadastrar-clientes/cadastrar-clientes.component';
import { CadatrarApolicesComponent } from './components/cadatrar-apolices/cadatrar-apolices.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DetalhesApoliceComponent } from './components/detalhes-apolice/detalhes-apolice.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'apolices', component: ApolicesComponent },
  { path: 'clientes/cadastrar', component: CadastrarClientesComponent },
  { path: 'clientes/:id', component: CadastrarClientesComponent },
  { path: 'apolices/cadastrar', component: CadatrarApolicesComponent },
  { path: 'apolices/:id', component: DetalhesApoliceComponent },
  { path: 'apolices/cadastrar/:id', component: CadatrarApolicesComponent },
  { path: 'not-found' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
