import { Injectable } from '@angular/core';
import {ActivatedRoute, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LocationGuardService implements CanActivate {
  constructor(private router: Router) {}

  // Location de base FR car quand on arrive sur PortfolioComponent, on est redirigé vers /FR/portfolio
  canActivate(): boolean | UrlTree {
    // Récupération de la langue du navigateur
    let location = navigator.language.split('-')[0].toLocaleUpperCase();
    this.router.navigate([location, 'portfolio'])
    return false;
  }



}
