import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './views/inscription/inscription.component';
import { AccueilComponent } from './views/accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatLegacyButtonModule} from "@angular/material/legacy-button";
import {SharedModule} from "./shared/modules/shared.module";
import { ConnexionComponent } from './views/connexion/connexion.component';
import { HeroSectionComponent } from './views/accueil/hero-section/hero-section.component';
import { DescriptionComponent } from './views/accueil/description/description.component';
import { MentorComponent } from './views/accueil/mentor/mentor.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    AccueilComponent,
    ConnexionComponent,
    HeroSectionComponent,
    DescriptionComponent,
    MentorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatLegacyButtonModule,
    SharedModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
