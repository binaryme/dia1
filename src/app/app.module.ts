import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FechaactualComponent } from './components/fechaactual/fechaactual.component';
import { ViewmodeloComponent } from './components/viewmodelo/viewmodelo.component';
import { EjmetodoComponent } from './components/ejmetodo/ejmetodo.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EjpropertybindingComponent } from './components/ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './components/ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './components/ej2waybinding/ej2waybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent,
    ViewmodeloComponent,
    EjmetodoComponent,
    ModalComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,
    Ej2waybindingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule.forRoot(), FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
