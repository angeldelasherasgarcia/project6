import { RouterModule, Routes } from '@angular/router';
import {
    AgreementsComponent,
    ListAgreementsComponent,
    DetailAgreementComponent}
from './project.pages';
const routes: Routes = [
  { path: '', component: AgreementsComponent },
  { path: 'list_agreements', component: ListAgreementsComponent},
  { path :'detail-agreement',component: DetailAgreementComponent}
];
export const app_routing = RouterModule.forRoot(routes, {useHash:true})
