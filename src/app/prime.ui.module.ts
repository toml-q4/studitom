import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    imports:
        [
          TableModule,
          MenuModule,
          ButtonModule,
          DropdownModule
        ],
    exports:
        [
          TableModule,
          MenuModule,
          ButtonModule,
          DropdownModule
        ]
})
export class PrimeUiModule { }
