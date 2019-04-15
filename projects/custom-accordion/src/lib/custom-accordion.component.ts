import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { AccSectionComponent } from './acc-section/acc-section.component';

@Component({
  selector: 'lib-custom-accordion',
  template: `<ng-content></ng-content>`,
  styles: []
})
export class CustomAccordionComponent implements AfterContentInit {

  constructor() { }

  @ContentChildren(AccSectionComponent)
  accSection: QueryList<AccSectionComponent>;

  ngAfterContentInit() {
    this.accSection.forEach(content =>
      content.onClose.subscribe(() => {
        this.accSection.forEach(elem => elem.show = false);
        content.show = true;
      })
    );
  }

}
