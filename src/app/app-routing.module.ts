import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { CenterDetailComponent } from './center-detail/center-detail.component';
import { ErrorInfosComponent } from './error-infos/error-infos.component';
import { LoginComponent } from './login/login.component';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';

const routes: Routes = [
  { path: "centers", component: VaccinationCenterListComponent},
  { path: "centers/detail/:id", component: CenterDetailComponent},
  { path: "infos/429", component: ErrorInfosComponent},
  { path: "login", component: LoginComponent},
  { path: "appointment/:id", component: AppointmentComponent},
  { path: '', redirectTo: '/centers', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
