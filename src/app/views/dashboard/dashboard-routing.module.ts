
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/auth.guard';
import { BucketsComponent } from '../buckets/buckets.component';

const routes: Routes = [
    { path: 'dashboard', canActivate: [AuthGuard], component: BucketsComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
