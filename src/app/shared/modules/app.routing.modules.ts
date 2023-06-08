import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "../../views/accueil/accueil.component";
import {InscriptionComponent} from "../../views/inscription/inscription.component";
import { ConnexionComponent } from "src/app/views/connexion/connexion.component";
import {MentionsComponent} from "../components/mention/mentions.component";
import {PolitiqueComponent} from "../components/politique/politique.component";
import {FormationComponent} from "../../views/formation/formation.component";
import {AlternanceComponent} from "../../views/alternance/alternance.component";
import {FinancementComponent} from "../../views/financement/financement.component";
import {EntrepriseComponent} from "../../views/entreprise/entreprise.component";
import {ResetmdpComponent} from "../../views/resetmdp/resetmdp.component";
import {LocationGuardService} from "../guards/location-guard.service";


const routes: Routes = [
  { path: '', component: AccueilComponent, canActivate: [LocationGuardService] },
  { path: ':loc/accueil', component: AccueilComponent },
  { path: ':loc/inscription', component: InscriptionComponent},
  { path: ':loc/connexion', component: ConnexionComponent},
  { path: ':loc/mentions' , component: MentionsComponent},
  { path: ':loc/politique' , component: PolitiqueComponent},
  { path: ':loc/formation', component: FormationComponent},
  { path: ':loc/alternance', component: AlternanceComponent},
  { path: ':loc/financement', component: FinancementComponent},
  { path: ':loc/entreprise', component: EntrepriseComponent},
  { path: ':loc/resetmdp', component: ResetmdpComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModules {

}
