import {Component, Inject} from '@angular/core';
import {Observable} from "rxjs";
import {AuthentificationService} from "../../../../services/authentification.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public estConnecte: boolean = false;
  public observableEventConnexion$ : Observable<any>;

  constructor(
    // Injection de dépendances :
    @Inject(AuthentificationService) private authentificationService:AuthentificationService,
  ) {
    // On vérifie si l'utilisateur est connecté :
    this.estConnecte = this.authentificationService.isLoggedIn();
    // L'observable écoute le service d'authentification. (la variable eventConnexion)
    this.observableEventConnexion$ = this.authentificationService.eventConnexion;
    // (Ecoute) On souscrit à l'observable pour mettre à jour la variable estConnecte à chaque fois qu'il emet.
    this.authentificationService.eventConnexion.subscribe(
      (signal: boolean) => {
        this.estConnecte = signal;
        // Le signal est connecté.
      }
    )
  }

  // Méthode qui permet de se déconnecter qui appel la methode doLogout du service d'authentification et qui vérifie si l'utilisateur est connecté ou non.
  logout() {
    this.authentificationService.doLogout();
    this.estConnecte = this.authentificationService.isLoggedIn();
  }

}
