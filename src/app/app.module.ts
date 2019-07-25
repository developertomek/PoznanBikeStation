import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationListComponent } from './station-list/station-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StationComponent } from './station/station.component';

@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    StationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
