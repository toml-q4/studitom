import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule
} from '@angular/material';


@NgModule({
    imports:
        [
            MatButtonModule,
            MatIconModule,
            MatCheckboxModule,
            MatMenuModule
        ],
    exports:
        [
            MatButtonModule,
            MatIconModule,
            MatCheckboxModule,
            MatMenuModule
        ]
})
export class MaterialModule { }