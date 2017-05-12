import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { KioBackendService } from './api/services/backend.service'
import { LocaleService } from './i18n/locale.service'
import { ContentMockingService } from 'kio-ng2-component-routing'
import { KioNg2StructureModule, KioBackendService } from 'kio-ng2-structure'
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { KioNodeComponent } from './components/kio-node/kio-node.component';
import { KioFragmentComponent } from './components/kio-fragment/kio-fragment.component';
import { NodeInfoComponent } from './components/node-info/node-info.component';

@NgModule({
  declarations: [
    AppComponent,
    KioNodeComponent,
    KioFragmentComponent,
    NodeInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    KioNg2StructureModule,
    MarkdownModule.forRoot()
  ],
  providers: [ContentMockingService, KioBackendService, LocaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
