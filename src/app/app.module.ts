import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VariantBaseComponent } from './variant/variant-base/variant-base.component';
import { VariantOneComponent } from './variant/variant-one/variant-one.component';
import { VariantTwoComponent } from './variant/variant-two/variant-two.component';

@NgModule({
  declarations: [
    AppComponent,
    VariantBaseComponent,
    VariantOneComponent,
    VariantTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
