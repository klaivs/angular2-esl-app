import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyVacationsComponent } from './my-vacations/my-vacations.component';
import { RequestNewComponent } from './request-new/request-new.component';

const routes: Routes = [
    { path: '', redirectTo: '/my', pathMatch: 'full' },
    { path: 'my', component: MyVacationsComponent },
    { path: 'new', component: RequestNewComponent }
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
