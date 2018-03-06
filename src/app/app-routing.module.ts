import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SsoComponent } from './core/sso/sso.component';

const appRoutes: Routes = [
    { path: 'auth/web', component: SsoComponent },
    { path: '', pathMatch: 'full', redirectTo: '/buckets' },
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
