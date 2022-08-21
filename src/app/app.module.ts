import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { PipeOperatorsComponent } from './components/pipe-operators/pipe-operators.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { AlunoEditComponent } from './components/aluno-edit/aluno-edit.component';

@NgModule({
  declarations: [AppComponent, PrimeiroComponenteComponent, ComponenteFilhoComponent, DiretivasComponent, EventosComponent, EmitterComponent, ChangeNumberComponent, PipeOperatorsComponent,
   TwoWayDataBindingComponent, AlunoEditComponent, AlunoEditComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
