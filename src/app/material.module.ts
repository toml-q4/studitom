import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports:
        [
            MatButtonModule,
            MatIconModule,
            MatCheckboxModule,
            MatMenuModule,
            MatToolbarModule,
            MatExpansionModule,
            MatListModule,
            MatCardModule
        ],
    exports:
        [
            MatButtonModule,
            MatIconModule,
            MatCheckboxModule,
            MatMenuModule,
            MatToolbarModule,
            MatExpansionModule,
            MatListModule,
            MatCardModule
        ]
})
export class MaterialModule { }
