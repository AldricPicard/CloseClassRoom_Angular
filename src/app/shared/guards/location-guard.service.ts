import { Injectable } from '@angular/core';
import {ActivatedRoute, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LocationGuardService implements CanActivate {
  constructor(private router: Router) {}

  // Location de base FR car quand on arrive sur AccueilComponent, on est redirigé vers /FR/accueil
  canActivate(): boolean | UrlTree {
    // Récupération de la langue du navigateur
    let location = navigator.language.split('-')[0].toLocaleUpperCase();
    if (!location) {
    this.router.navigate([location, 'accueil'])
    }
      else {
        location = 'FR';
        this.router.navigate([location, 'accueil'])
      }
      localStorage.setItem('location', location);
    return false;
  }

}
