import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PrimeiroComponenteComponent } from "./components/primeiro-componente/primeiro-componente.component";
import { DiretivasComponent } from "./components/diretivas/diretivas.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { PipeOperatorsComponent } from "./components/pipe-operators/pipe-operators.component";
import { TwoWayDataBindingComponent } from "./components/two-way-data-binding/two-way-data-binding.component";
import { AlunoEditComponent } from "./components/aluno-edit/aluno-edit.component";

const routes: Routes = [
    {path: '', component: PrimeiroComponenteComponent},
    {path: 'diretivas', component: DiretivasComponent},
    {path: 'emitter', component: EmitterComponent},
    {path: 'eventos', component: EventosComponent},
    {path: 'operatos', component: PipeOperatorsComponent},
    {path: 'data-binding', component: TwoWayDataBindingComponent},
    {path: 'aluno/:id', component: AlunoEditComponent}
];

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
