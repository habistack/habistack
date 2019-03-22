import { NgModule } from '@angular/core';
import { FathymSharedModule } from '@lcu-ide/common';
import { HabistackConfigManagerElementComponent } from './elements/habistack-config-manager-element/habistack-config-manager-element.component';

@NgModule({
  declarations: [HabistackConfigManagerElementComponent],
  imports: [FathymSharedModule],
  exports: [HabistackConfigManagerElementComponent],
  entryComponents: [HabistackConfigManagerElementComponent]
})
export class HabistackModule {}
