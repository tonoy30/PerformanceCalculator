import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './modules/core/core.module';
import { MaterialModule } from './material.module';
import { FeaturesModule } from './modules/features/features.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule,
    FeaturesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
