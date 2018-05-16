import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementsComponent } from './agreements/agreements.component';
import { SearchCriteriaAgreementsComponent } from './agreements/search-criteria-agreements/search-criteria-agreements.component';
import {ListAgreementsComponent } from './agreements/list-agreements/list-agreements.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { DetailAgreementComponent } from './agreements/detail-agreement/detail-agreement.component';
import { ShowDetailComponent } from './agreements/detail-agreement/show-detail/show-detail.component';
import { CommonsModule } from './../../commons/commons.module';
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
    ReactiveFormsModule,
    NgxPaginationModule,
    CommonsModule
  ],
  declarations: [
    AgreementsComponent,
    SearchCriteriaAgreementsComponent,
    ListAgreementsComponent,
    DetailAgreementComponent,
    ShowDetailComponent
  ],
  exports: [
    AgreementsComponent,
    SearchCriteriaAgreementsComponent,
    ListAgreementsComponent,
    DetailAgreementComponent
  ]
})
export class AgreementsModule { }
