import {APP_INITIALIZER, NgModule} from '@angular/core';
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
import { MentionsComponent } from './shared/components/mention/mentions.component';
import { PolitiqueComponent } from './shared/components/politique/politique.component';
import { FormationComponent } from './views/formation/formation.component';
import { AlternanceComponent } from './views/alternance/alternance.component';
import { FinancementComponent } from './views/financement/financement.component';
import { EntrepriseComponent } from './views/entreprise/entreprise.component';
import { PartenaireComponent } from './views/accueil/partenaire/partenaire.component';
import { CommentaireComponent } from './views/accueil/commentaire/commentaire.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ResetmdpComponent } from './views/resetmdp/resetmdp.component';
import { DatePipe } from '@angular/common';
import {AppResource} from "./app.resource";

export function initResources(resource: AppResource) {
  return () => resource.load();
}
@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    AccueilComponent,
    ConnexionComponent,
    HeroSectionComponent,
    DescriptionComponent,
    MentorComponent,
    MentionsComponent,
    PolitiqueComponent,
    FormationComponent,
    AlternanceComponent,
    FinancementComponent,
    EntrepriseComponent,

    PartenaireComponent,
    CommentaireComponent,

    ResetmdpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatLegacyButtonModule,
    SharedModule
  ],
  providers: [
    DatePipe,
    // Ajout de app ressource
    AppResource,
    // Au démérage de l'application tu vas charger le fichier JSON dans l'application.
    // APP_INITIALIZER est un token qui permet de définir une fonction qui sera exécutée au démarrage de l'application.
    // useFactory : initResources : c'est la fonction qui sera exécutée au démarrage de l'application.
    // deps : [AppResource] : c'est la dépendance de la fonction initResources.
    // multi : true : permet de dire que l'on peut avoir plusieurs fonctions qui seront exécutées au démarrage de l'application.
    { provide: APP_INITIALIZER, useFactory : initResources, deps : [AppResource], multi : true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
