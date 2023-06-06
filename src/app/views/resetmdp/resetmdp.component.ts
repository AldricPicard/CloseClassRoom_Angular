import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-resetmdp',
  templateUrl: './resetmdp.component.html',
  styleUrls: ['./resetmdp.component.scss']
})
export class ResetmdpComponent {

  constructor(private http: HttpClient) {

  }
  resetmdp(formulaireResetmdp: any) {
    const email = formulaireResetmdp.value.email;

    // Envoi de l'email de reset
    // TODO: Demander au back de faire la gestion du renvoie du mail.
    this.http.post('http://localhost:3000/api/auth/resetmdp',
      {email}).subscribe((res: any) => {
        console.log('La demande de réinitialisation du mot de passe a été envoyée.');
}, (error) => {
        console.log('Erreur lors de la demande de réinitialisation du mot de passe.');
    }
    );
  }
}
