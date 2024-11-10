import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaComponent } from './components/media/media.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { CadClienteComponent } from './components/cad-cliente/cad-cliente.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    CalculadoraComponent,
    CadClienteComponent,
    DiretivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
