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


const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'mentions' , component: MentionsComponent},
  { path: 'politique' , component: PolitiqueComponent},
  { path: 'formation', component: FormationComponent},
  { path: 'alternance', component: AlternanceComponent},
  { path: 'financement', component: FinancementComponent},
  { path: 'entreprise', component: EntrepriseComponent},
  { path: 'resetmdp', component: ResetmdpComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModules {

}
