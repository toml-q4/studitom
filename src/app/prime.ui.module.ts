import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports:
        [
          TableModule,
          MenuModule,
          ButtonModule
        ],
    exports:
        [
          TableModule,
          MenuModule,
          ButtonModule
        ]
})
export class PrimeUiModule { }
