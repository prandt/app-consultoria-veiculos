import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ApolicesComponent } from './components/apolices/apolices.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastrarClientesComponent } from './components/cadastrar-clientes/cadastrar-clientes.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadatrarApolicesComponent } from './components/cadatrar-apolices/cadatrar-apolices.component';
import { DetalhesApoliceComponent } from './components/detalhes-apolice/detalhes-apolice.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    ApolicesComponent,
    NavbarComponent,
    CadastrarClientesComponent,
    CadatrarApolicesComponent,
    DetalhesApoliceComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
