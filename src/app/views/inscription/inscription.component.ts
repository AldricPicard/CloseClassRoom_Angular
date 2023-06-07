import {Component, Inject} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../shared/models/user";
import {HttpClient} from "@angular/common/http";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  public user$!: Observable<User[]>

  constructor( // Injection des dépendances
               @Inject(HttpClient) private http: HttpClient,
               private datePipe: DatePipe
               ) {
    this.user$ = this.http.get<User[]>('https://127.0.0.1:8000/api/users.json')
    }

    // Méthode pour ajouter un utilisateur.
    ajouterUtilisateur(value: any) {
      const now = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
      this.http.post('https://127.0.0.1:8000/api/users',
        {
          // Renvoie les sexe de l'utilisateur en fonction de la valeur du bouton radio
          sexe: value.sexe,
          firstname: value.firstname,
          lastname: value.lastname,
          birth: value.birth,
          email: value.email,
          phone: value.phone,
          password: value.password,
          address: value.address,
          city: value.city,
          department: value.department,
          postalCode: value.postalCode,
          createAt : now
        }
      ).subscribe(
        () => {
          console.log('Utilisateur ajouté');
        }
      )
    }
}
