import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RenderComponent } from './render/render.component';
import { TemplatesService } from './shared/templates.service';
import 'rxjs/Rx';   // Load all features

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
            <render-component></render-component>`,  
  directives: [RenderComponent],
  providers: [TemplatesService,
              HTTP_PROVIDERS] 
})
export class AppComponent { }