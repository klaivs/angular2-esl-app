import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { VacationsComponent } from './vacations/vacations.component';
import { VacationsAddComponent } from './vacations-add/vacations-add.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'vacations', component: VacationsComponent },
    { path: 'vacations/add', component: VacationsAddComponent },
    { path: 'user-settings', component: UserSettingsComponent }
    /*
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent }
    */
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
