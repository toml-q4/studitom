import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports:
    [
      MenuModule,
      ButtonModule,
      DropdownModule,
      CheckboxModule,
      OverlayPanelModule,
      ProgressSpinnerModule,
      DialogModule
    ],
  exports:
    [
      MenuModule,
      ButtonModule,
      DropdownModule,
      CheckboxModule,
      OverlayPanelModule,
      ProgressSpinnerModule,
      DialogModule
    ]
})
export class PrimeUiModule { }
