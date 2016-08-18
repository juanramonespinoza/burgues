import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { TemplatesService } from './shared/templates.service';

import { HTTP_PROVIDERS } from '@angular/http';
import { RenderComponent } from './render/render.component';
import { TextControlComponent } from './render/components/text.component';
import { TitleControlComponent } from './render/components/title.component';

import 'rxjs/Rx';   // Load all features

@NgModule({
  imports:      [     
                  BrowserModule, 
                  FormsModule 
                ],
  declarations: [ 
                  AppComponent,
                  RenderComponent,
                  TextControlComponent,
                  TitleControlComponent
                ],      
  providers:    [
                  TemplatesService,
                  HTTP_PROVIDERS
                ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }