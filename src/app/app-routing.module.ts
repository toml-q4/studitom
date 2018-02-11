import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: false })
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
