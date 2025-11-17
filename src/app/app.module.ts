import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LancamentoComponent } from './lancamento/lancamento.component';


@NgModule({
  declarations: [ AppComponent,
    LancamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,   // Necessário para *ngIf e *ngFor
    FormsModule     // Necessário para ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
