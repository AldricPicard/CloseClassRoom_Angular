export interface Locale {
  copyright: string;
  legalNotice: string;
  privacyPolicy: string;

  alternation: string;
  financing: string;
  companies: string;
  createAccount: string;
  connexion: string;

}

export interface Global {

formation: string;
logo: string;

}

export interface Resource {
  [key: string]: any;
  global: Global;
  FR: Locale;
  EN: Locale;
}
