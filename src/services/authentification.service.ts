import {EventEmitter, Injectable, Output} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import jwtDecode from "jwt-decode";
import {Login} from "../app/shared/models/user";
@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {
  // Outpout = évènement qui va être émis (sortir du composant)
  @Output() public eventConnexion: EventEmitter<any> = new EventEmitter<any>()
  endpoint: string = 'https://127.0.0.1:8000/auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}
  // Sign-up (Inscription)
  signUp(user: Login): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user);
  }
  // Sign-in (Connexion)
  signIn(user: any) {
    return this.http
      .post<any>(`${this.endpoint}`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        // On emet la connexionavant de rediriger vers la page d'accueil
        this.emetEventConnexion();
        this.router.navigate(['']);
      });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
      this.router.navigate(['']);
  }

  // Methode qui emet pour le composant barre-de-navigation
  emetEventConnexion() {
    this.eventConnexion.emit(
      this.isLoggedIn()
    );
  }

  // Création d'une méthode qui permet de stocker l'id qui se trouve dans le token
  getUserIdFromToken(): string | null {
    const token = this.getToken();
    console.log(token)
    if (!token) {
      return null;
    }
    const decodedToken : any = jwtDecode(token);
    // Retourne le username de l'utilisateur connecté
    console.log(decodedToken.username)
    // Retourne l'id de l'utilisateur connecté
    console.log(decodedToken.id)
    return decodedToken.id;
  }


}
