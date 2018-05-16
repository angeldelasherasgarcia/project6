import { RouterModule, Routes } from '@angular/router';
import { AgreementsComponent }
from './project.pages';
const routes: Routes = [
  { path: '', component: AgreementsComponent }
];
export const app_routing = RouterModule.forRoot(routes, {useHash:true})
