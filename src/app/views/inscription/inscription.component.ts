import {Component, Inject} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../shared/models/user";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  public user$!: Observable<User[]>

  constructor( // Injection des dépendances
               @Inject(HttpClient) private http: HttpClient,
               ) {
    this.user$ = this.http.get<User[]>('https://127.0.0.1:8000/api/users.json')
    }

    // Méthode pour ajouter un utilisateur.
    ajouterUtilisateur(value: any) {
      this.http.post('https://127.0.0.1:8000/api/users',
        {
          // Renvoie les sexe de l'utilisateur en fonction de la valeur du bouton radio
          sexe: value.sexe,
          firstName: value.firstName,
          lastName: value.lastName,
          date_birth: value.date_birth,
          email: value.email,
          phone: value.phone,
          password: value.password,
          address: value.address,
          city: value.city,
          department: value.department,
          postal_code: value.postal_code,
        }
      ).subscribe(
        () => {
          console.log('Utilisateur ajouté');
        }
      )
    }
}
