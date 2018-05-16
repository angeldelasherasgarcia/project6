import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './../app/layouts/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { app_routing } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//Services to use in this projects
import { GlobalVariableService } from '../app/services/global-variable.service';
import { ConveniosService } from '../app/services/convenios.service';
import { ListaRegistroConveniosService } from '../app/services/lista-registro-convenios.service';
//Modulos de la aplicacion
import {AgreementsModule}from './modules/agreements/agreements.module';
import {CommonsModule} from './commons/commons.module'
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    AgreementsModule,
    CommonsModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    app_routing,
    HttpClientModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    GlobalVariableService,
    ConveniosService,
    ListaRegistroConveniosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
