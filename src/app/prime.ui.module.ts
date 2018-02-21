import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  imports:
    [
      TableModule,
      MenuModule,
      ButtonModule,
      DropdownModule,
      CheckboxModule,
      OverlayPanelModule
    ],
  exports:
    [
      TableModule,
      MenuModule,
      ButtonModule,
      DropdownModule,
      CheckboxModule,
      OverlayPanelModule
    ]
})
export class PrimeUiModule { }
