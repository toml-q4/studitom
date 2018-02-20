import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    imports:
        [
          TableModule,
          MenuModule,
          ButtonModule,
          DropdownModule,
          CheckboxModule
        ],
    exports:
        [
          TableModule,
          MenuModule,
          ButtonModule,
          DropdownModule,
          CheckboxModule
        ]
})
export class PrimeUiModule { }
