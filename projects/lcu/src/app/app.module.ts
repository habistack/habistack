import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { FathymSharedModule } from '@lcu-ide/common';
import { BrowserModule } from '@angular/platform-browser';
import {
  HabistackModule,
  HabistackConfigManagerElementComponent,
  SELECTOR_HABISTACK_CONFIG_MANAGER_ELEMENT
} from '@habistack/habistack-common';

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule, FathymSharedModule, HabistackModule],
  exports: [HabistackModule]
})
export class AppModule implements DoBootstrap {
  //  Constructors
  constructor(protected injector: Injector) {}

  //  Life Cycle
  public ngDoBootstrap() {
    const hsCfgMgr = createCustomElement(HabistackConfigManagerElementComponent, { injector: this.injector });

    customElements.define(SELECTOR_HABISTACK_CONFIG_MANAGER_ELEMENT, hsCfgMgr);
  }
}
