import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import {LocationGuardService} from "../guards/location-guard.service";
import {AccueilComponent} from "../../views/accueil/accueil.component";
import {InscriptionComponent} from "../../views/inscription/inscription.component";


const routes: Routes = [
  { path: '', component: AccueilComponent, canActivate: [LocationGuardService] },
  { path: 'inscription', component: InscriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
