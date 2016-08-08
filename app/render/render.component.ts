
import { Component, Input, OnInit } from '@angular/core';
import { TemplatesService } from '../shared/templates.service';
import { ISubsection, IField } from '../shared/template.model';
import { TextControlComponent } from './components/text.component';
import { TitleControlComponent } from './components/title.component';

@Component({
    moduleId: module.id,
    selector: 'render-component',    
    templateUrl : 'render.component.html',
    directives: [TextControlComponent, TitleControlComponent] 
})

export class RenderComponent implements OnInit {
    response: any;
    subsections: ISubsection[];
    fields: IField[];
    errorMessage: string;
    model: any;
    constructor(private _templatesService: TemplatesService) {

    }

    ngOnInit(): void {
        this.model = {};
       
        this._templatesService.getSubestion('personal_information').subscribe(
                                    subsection => this.fields = subsection.fields,
                                    error => this.errorMessage = <any>error);                                            
    }


}