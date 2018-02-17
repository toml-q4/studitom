
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/auth.guard';
import { BucketsComponent } from './buckets.component';

const routes: Routes = [
    { path: 'buckets', canActivate: [AuthGuard], component: BucketsComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class BucketsRoutingModule { }
