"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var TemplatesService = (function () {
    function TemplatesService(_http) {
        this._http = _http;
        this._productUrl = 'api/templates/partyinformation.json';
    }
    TemplatesService.prototype.getPartyInformationTemplate = function () {
        return this._http.get(this._productUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All:' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    TemplatesService.prototype.getSubsections = function () {
        return this.getPartyInformationTemplate()
            .map(function (response) { return response.subsections; });
    };
    TemplatesService.prototype.getSubestion = function (subsectionId) {
        return this.getSubsections()
            .map(function (subsections) { return subsections.find(function (s) { return s.id === subsectionId; }); });
    };
    TemplatesService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    TemplatesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TemplatesService);
    return TemplatesService;
}());
exports.TemplatesService = TemplatesService;
//# sourceMappingURL=templates.service.js.map