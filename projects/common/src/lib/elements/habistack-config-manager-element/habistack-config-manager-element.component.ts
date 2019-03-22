import { Component, OnInit, Injector } from '@angular/core';
import { LcuElementComponent, LCUElementContext } from '@lcu-ide/common';

export class HabistackConfigManagerElementState {
  public Test: string;
}

export class HabistackConfigManagerContext extends LCUElementContext<HabistackConfigManagerElementState> {}

export const SELECTOR_HABISTACK_CONFIG_MANAGER_ELEMENT = 'lcu-habistack-config-manager-element';

@Component({
  selector: SELECTOR_HABISTACK_CONFIG_MANAGER_ELEMENT,
  templateUrl: './habistack-config-manager-element.component.html',
  styleUrls: ['./habistack-config-manager-element.component.scss']
})
export class HabistackConfigManagerElementComponent extends LcuElementComponent<HabistackConfigManagerContext> implements OnInit {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods
}
