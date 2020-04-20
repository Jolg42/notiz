import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { IonicModule } from '@ionic/angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MarkdownModule } from 'ngx-markdown';
import {
  NizTabsModule, NizFooterModule
} from '@notiz/ngx-design';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScullyLibModule.forRoot({ useTranferState: true }),
    IonicModule.forRoot({ mode: 'md' }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    MarkdownModule.forRoot({ loader: HttpClient }),
    NizTabsModule,
    NizFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
