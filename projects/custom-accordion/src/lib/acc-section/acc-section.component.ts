import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'lib-acc-section',
    template: `
        <div (click)='onHeaderClick()' class='div-header'>
            <h2>{{header}}</h2>
        </div>
        <div *ngIf='show' class='div-content'>
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./acc-section.component.css']

})
export class AccSectionComponent {
    @Input() header: string;
    @Output() onClose = new EventEmitter();
    @Input() show = false;

    constructor() { }

    onHeaderClick() {
        this.onClose.emit();
    }

}
