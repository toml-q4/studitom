import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  imports:
    [
      MenuModule,
      ButtonModule,
      DropdownModule,
      CheckboxModule,
      OverlayPanelModule
    ],
  exports:
    [
      MenuModule,
      ButtonModule,
      DropdownModule,
      CheckboxModule,
      OverlayPanelModule
    ]
})
export class PrimeUiModule { }
