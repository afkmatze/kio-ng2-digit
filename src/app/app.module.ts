import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { KioBackendService } from './api/services/backend.service'
import { LocaleService } from './i18n/locale.service'
import { ContentMockingService } from 'kio-ng2-component-routing'
import { KioNg2StructureModule } from 'kio-ng2-structure'
import { MarkdownModule } from 'angular2-markdown';

declare const require:any
const ModuleOptions = require('./bunte-goetter.components.json')

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    KioNg2StructureModule.forRoot(ModuleOptions),
    MarkdownModule.forRoot()
  ],
  providers: [ContentMockingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
