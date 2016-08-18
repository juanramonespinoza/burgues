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
var templates_service_1 = require('../shared/templates.service');
var RenderComponent = (function () {
    function RenderComponent(_templatesService) {
        this._templatesService = _templatesService;
    }
    RenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = {};
        this._templatesService.getSubestion('personal_information').subscribe(function (subsection) { return _this.fields = subsection.fields; }, function (error) { return _this.errorMessage = error; });
    };
    RenderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'render-component',
            templateUrl: 'render.component.html'
        }), 
        __metadata('design:paramtypes', [templates_service_1.TemplatesService])
    ], RenderComponent);
    return RenderComponent;
}());
exports.RenderComponent = RenderComponent;
//# sourceMappingURL=render.component.js.map