import {Component, Inject, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AuthentificationService} from "../../../../services/authentification.service";
import {Resource} from "../../../ressources/ressource";
import {Header} from "../../models/header";
import {AppResource} from "../../../app.resource";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  resource!: Resource;
  header!: Header;
  loc!: string;

  public estConnecte: boolean = false;
  public observableEventConnexion$ : Observable<any>;

  constructor(
    // Injection de dépendances :
    @Inject(AuthentificationService) private authentificationService:AuthentificationService,
    protected resources: AppResource, private router: Router, private route: ActivatedRoute) {

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
    // Récupération du loc
    this.resource = resources['resource'];
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
      let x = localStorage.getItem('location')
    if(x)
      this.loc = x;
  }


  goTo(url: string){
    this.router.navigate([this.loc, url])
  }

  // Méthode qui permet de se déconnecter qui appel la methode doLogout du service d'authentification et qui vérifie si l'utilisateur est connecté ou non.
  logout() {
    this.authentificationService.doLogout();
    this.estConnecte = this.authentificationService.isLoggedIn();
  }

  ngOnInit() {
    console.log(this.route.url);
    this.header = {
      alternation: this.resource[this.loc].alternation,
      financing: this.resource[this.loc].financing,
      companies: this.resource[this.loc].companies,
      createAccount: this.resource[this.loc].createAccount,
      connexion: this.resource[this.loc].connexion,
    }
  }
}
