import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFolderComponent } from './list-folder/list-folder.component';
import { GenericWindowComponent } from './generic-window/generic-window.component';
import { ListRelatedComponent } from './list-related/list-related.component';
import { ModalDownloadFileComponent } from './modal-download-file/modal-download-file.component';
import { ModalOneButtonComponent } from './modal-one-button/modal-one-button.component';
import { ModalTwoButtonComponent } from './modal-two-button/modal-two-button.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPaginationModule} from 'ngx-pagination';
import { SecundaryNavComponent } from './secundary-nav/secundary-nav.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
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
    NgxPaginationModule
  ],
  declarations: [
    ListFolderComponent,
    GenericWindowComponent,
    ListRelatedComponent,
    ModalDownloadFileComponent,
    ModalOneButtonComponent,
    ModalTwoButtonComponent,
    SecundaryNavComponent
  ],
  exports:[
    ModalDownloadFileComponent,
    ListFolderComponent,
    ListRelatedComponent,
    ModalOneButtonComponent,
    ModalTwoButtonComponent
  ],
  entryComponents: [
    ModalDownloadFileComponent,
    ModalOneButtonComponent,
    ModalTwoButtonComponent]
})
export class CommonsModule { }
