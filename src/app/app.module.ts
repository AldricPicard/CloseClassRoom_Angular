import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunComponent } from './shared/commun/commun.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BarreDeNavigationComponent } from './shared/components/barre-de-navigation/barre-de-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunComponent,
    HeaderComponent,
    FooterComponent,
    BarreDeNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
