import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { KioBackendService } from './api/services/backend.service'
import { LocaleService } from './i18n/locale.service'
import { ContentMockingService } from 'kio-ng2-component-routing'
import { KioNg2StructureModule } from 'kio-ng2-structure'
import { MarkdownModule } from 'angular2-markdown';
import envStore from 'kio-ng2-env/browser'

console.log('envStore',envStore)

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    KioNg2StructureModule,
    MarkdownModule.forRoot()
  ],
  providers: [ContentMockingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
