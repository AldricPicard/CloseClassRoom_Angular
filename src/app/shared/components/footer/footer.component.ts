import {Component, OnInit} from '@angular/core';
import {Footer} from "../../models/footer";
import {Locale, Resource} from "../../../ressources/ressource";
import {ActivatedRoute, Router} from "@angular/router";
import {AppResource} from "../../../app.resource";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  resource!: Resource;
  loc!: string;
  footer!: Footer;

  constructor(protected resources: AppResource, private route: ActivatedRoute) {
    this.resource = resources['resource'];
    console.log(this.resource);
    // Récupération de la langue du navigateur pour afficher les bonnes ressources dans le fichier json
    console.log('localisation', this.route.snapshot)
    let x = localStorage.getItem('location')
    if(x)
      this.loc = x;
  }

  ngOnInit()
  {
    this.footer = {
      legalNotice: this.resource[this.loc].legalNotice,
      privacyPolicy: this.resource[this.loc].privacyPolicy,
      copyright: this.resource[this.loc].copyright,
    }
  }

}
