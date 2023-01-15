import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ErrorInfosComponent } from './error-infos/error-infos.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';

const routes: Routes = [
  { path: "centers/city", component: VaccinationCenterListComponent},
  { path: "centers/detail/:id", component: VaccinationCenterComponent},
  { path: "search", component: SearchComponent},
  { path: "infos/429", component: ErrorInfosComponent},
  { path: "login", component: LoginComponent},
  { path: '', redirectTo: '/centers/city', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
