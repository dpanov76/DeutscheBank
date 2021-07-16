import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { StoreModule } from '@ngrx/store';
import { countryReducers } from "./store/reducers/country.reducers";
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    StoreModule.forRoot({ countries:countryReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
