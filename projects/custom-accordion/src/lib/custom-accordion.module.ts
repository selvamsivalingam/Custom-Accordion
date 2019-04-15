import { NgModule } from '@angular/core';
import { CustomAccordionComponent } from './custom-accordion.component';
import { AccSectionComponent } from './acc-section/acc-section.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomAccordionComponent, AccSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomAccordionComponent, AccSectionComponent]
})
export class CustomAccordionModule { }
