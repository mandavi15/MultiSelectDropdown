import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { MultiSelectService } from './multi-select.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, MultiSelectComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MultiSelectService]
})
export class AppModule { }
