import {Component, Inject} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../shared/models/user";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  public appelAPI$: Observable<User>

  constructor(
    @Inject(HttpClient) private http:HttpClient
  ) {
    this.appelAPI$ = this.http.get<User>('https://127.0.0.1:8000/api/users.json')
  }

  connexion(value: any) {
   // this.authentificationService.signIn({email: value.email, password: value.password});
  }
}
