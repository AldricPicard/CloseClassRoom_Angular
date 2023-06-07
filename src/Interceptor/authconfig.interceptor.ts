import {Inject, Injectable} from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import {AuthentificationService} from "../services/authentification.service";

@Injectable()
export class AuthconfigInterceptor implements HttpInterceptor {
  constructor(
    @Inject(AuthentificationService) private authentificationService:AuthentificationService,
  ) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authentificationService.getToken();
    // Il prend la requête et il la clone
    if (authToken != null) {
      req = req.clone({
        setHeaders: {
          Authorization: "Bearer " + authToken
        }
      });
    }
      return next.handle(req);
    }
}
