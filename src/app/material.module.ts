import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule
} from '@angular/material';


@NgModule({
    imports:
        [
            MatButtonModule,
            MatIconModule,
            MatCheckboxModule,
            MatMenuModule,
            MatToolbarModule,
            MatExpansionModule,
            MatListModule
        ],
    exports:
        [
            MatButtonModule,
            MatIconModule,
            MatCheckboxModule,
            MatMenuModule,
            MatToolbarModule,
            MatExpansionModule,
            MatListModule
        ]
})
export class MaterialModule { }
