import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './NgModule';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
    declarations: [ AppComponent, NavigationComponent ],
    imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, MyOwnCustomMaterialModule, MaterializeModule ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
