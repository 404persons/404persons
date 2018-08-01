import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './NgModule';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, MyOwnCustomMaterialModule ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
