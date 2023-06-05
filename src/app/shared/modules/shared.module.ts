import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { AppRoutingModule } from './app.routing.modules';

const AngularModules = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  AppRoutingModule
];

@NgModule({
  declarations: [
    // Déclarations des modules commun à tous les modules
    HeaderComponent,
    FooterComponent
  ],
  imports: [AngularModules,
  ],
  exports: [
    // Exportation des modules pour les rendre accessibles aux autres modules
    HeaderComponent,
    FooterComponent,
    AngularModules
  ],
  providers: [],
})

export class SharedModule {}
