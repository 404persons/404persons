import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MaterializeModule } from 'angular2-materialize';

import { MatDialog } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material';
import { MyCustomMaterialModule } from './NgModule';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from '../environments/environment';
import { MissingPeopleService } from './services/missing-persons.service';
import { MissingPersonsDialogFormComponent } from './components/missing-persons-dialog-form/missing-persons-dialog-form.component';

@NgModule({
    declarations: [ AppComponent, NavigationComponent, HomeComponent, MissingPersonsDialogFormComponent ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MyCustomMaterialModule,
        MaterializeModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        OverlayModule,
        MatDialogModule
    ],
    providers: [ MissingPeopleService, MatDialog, OverlayModule ],
    entryComponents: [ MissingPersonsDialogFormComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
