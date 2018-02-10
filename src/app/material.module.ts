import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule
} from '@angular/material';


@NgModule({
    imports:
        [
            MatButtonModule,
            MatIconModule,
            MatCheckboxModule,
            MatMenuModule,
            MatToolbarModule
        ],
    exports:
        [
            MatButtonModule,
            MatIconModule,
            MatCheckboxModule,
            MatMenuModule,
            MatToolbarModule
        ]
})
export class MaterialModule { }
