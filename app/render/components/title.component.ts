import { Component, Input, OnInit } from '@angular/core';
import { IField } from '../../shared/template.model';

@Component({
    moduleId: module.id,
    selector: 'title-control',
    templateUrl: 'title.component.html'
})
export class TitleControlComponent implements OnInit {
    @Input() field: IField;
    @Input() model: any;

    constructor() { }

    ngOnInit() { }

}