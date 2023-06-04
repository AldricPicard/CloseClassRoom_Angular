export interface Locale {

}

export interface Global {

}

export interface Resource {
  [key: string]: any;
  global: Global;
  FR: Locale;
  EN: Locale;
}
