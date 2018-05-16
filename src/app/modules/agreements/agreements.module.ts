import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementsComponent } from './agreements/agreements.component';
import { SearchCriteriaAgreementsComponent } from './agreements/search-criteria-agreements/search-criteria-agreements.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../../../assets/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AgreementsComponent,
    SearchCriteriaAgreementsComponent
  ],
  exports: [
    AgreementsComponent
  ]
})
export class AgreementsModule { }
