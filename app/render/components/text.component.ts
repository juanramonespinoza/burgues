import { Component, Input, OnInit } from '@angular/core';
import { IField } from '../../shared/template.model';

@Component({
    moduleId: module.id,
    selector: 'text-control',
    templateUrl: 'text.component.html'
})

export class TextControlComponent implements OnInit {
    @Input() field: IField;
    @Input() model: any;     
    constructor() { }

    ngOnInit() {
        
     }
}