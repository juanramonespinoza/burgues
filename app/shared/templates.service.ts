import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ITemplate, ISubsection  } from '../shared/template.model'

@Injectable() 
export class TemplatesService {
    private _productUrl = 'api/templates/partyinformation.json';
    constructor(private _http: Http) { }

    getPartyInformationTemplate() : Observable<ITemplate> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <ITemplate> response.json())
            .do(data => console.log('All:' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getSubsections() : Observable<ISubsection[]> {       
        return this.getPartyInformationTemplate()
                .map((response: ITemplate) => <ISubsection[]> response.subsections);
    }

    getSubestion(subsectionId: string) : Observable<ISubsection> {
        return this.getSubsections()
                .map((subsections: ISubsection[]) => subsections.find(s => s.id ===  subsectionId));     
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
} 