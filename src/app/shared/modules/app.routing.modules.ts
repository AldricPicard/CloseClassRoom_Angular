import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import {LocationGuardService} from "../guards/location-guard.service";
import {AccueilComponent} from "../../views/accueil/accueil.component";
import {InscriptionComponent} from "../../views/inscription/inscription.component";
import { ConnexionComponent } from "src/app/views/connexion/connexion.component";


const routes: Routes = [
  { path: '', component: AccueilComponent, canActivate: [LocationGuardService] },
  { path: 'accueil', component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent},
  { path: 'connexion', component: ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
