import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: false })
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
