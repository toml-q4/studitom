import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatExpansionModule
} from '@angular/material';


@NgModule({
    imports:
        [
            MatButtonModule,
            MatIconModule,
            MatCheckboxModule,
            MatMenuModule,
            MatToolbarModule,
            MatExpansionModule
        ],
    exports:
        [
            MatButtonModule,
            MatIconModule,
            MatCheckboxModule,
            MatMenuModule,
            MatToolbarModule,
            MatExpansionModule
        ]
})
export class MaterialModule { }
