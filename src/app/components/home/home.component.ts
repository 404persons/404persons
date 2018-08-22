import { Component, OnInit, Inject } from '@angular/core';
import { MissingPeopleService } from '../../services/missing-persons.service';
import { config } from '../../app.config';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from '../../models/missing-person-model';
import { AngularFirestore } from 'angularfire2/firestore';
import { MissingPersonsDialogFormComponent } from '../missing-persons-dialog-form/missing-persons-dialog-form.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
    person: Person;
    missing_persons: Observable<any[]>;
    editMode = false;
    personRecordToEdit: any = {};

    constructor(
        private db: AngularFirestore,
        private missingPeopleService: MissingPeopleService,
        public dialog: MatDialog
    ) {}

    ngOnInit() {
        // this.missing_persons = this.db.collection(config.collection_endpoint).valueChanges();

        // Detect collection changes and add the 'id' metadata for document manipulation
        this.missing_persons = this.db.collection(config.collection_endpoint).snapshotChanges().pipe(
            map((actions) => {
                return actions.map((a) => {
                    // Get document data
                    const data = a.payload.doc.data() as Person;

                    // Get document id
                    const id = a.payload.doc.id;

                    // Use spread operator to add the id to the document data
                    return { id, ...data };
                });
            })
        );

        console.log(this.missing_persons);
    }
    edit(person) {
        console.log(person);

        // Set personRecordToEdit and editMode
        this.personRecordToEdit = person;
        this.editMode = true;

        // Set form value
        this.person = {
            name: this.person.name,
            age: this.person.age,
            gender: this.person.gender,
            image: this.person.image,
            last_loc: this.person.last_loc,
            last_seen: this.person.last_seen,
            nationality: this.person.nationality,
            reported_by: this.person.reported_by,
            status: this.person.status
        };
    } // edit

    savePersonRecord() {
        if (this.person !== null) {
            // Get the input value
            let person = {
                name: this.person.name,
                age: this.person.age,
                gender: this.person.gender,
                image: this.person.image,
                last_loc: this.person.last_loc,
                last_seen: this.person.last_seen,
                nationality: this.person.nationality,
                reported_by: this.person.reported_by,
                status: this.person.status
            };

            if (!this.editMode) {
                console.log(person);
                this.missingPeopleService.addMissingPersonRecord(person);
            } else {
                // Get the task id
                let personID = this.personRecordToEdit.id;

                // update the task
                this.missingPeopleService.updateMissingPersonRecord(personID, person);
            }

            // set edit mode to false and clear form
            this.editMode = false;
            this.person = {
                name: '',
                age: null,
                gender: '',
                image: '',
                last_loc: '',
                last_seen: '',
                nationality: '',
                reported_by: '',
                status: null
            };
        }
    } // saveTask

    deleteTask(person) {
        // Get the task id
        const personID = person.id;

        // delete the task
        this.missingPeopleService.deleteMisingPersonRecord(personID);
    } // deleteTask

    openDialog(): void {
        const dialogRef = this.dialog.open(MissingPersonsDialogFormComponent, {
            width: '600px'
            // data: {
            //     name: this.person.name,
            //     age: this.person.age,
            //     gender: this.person.gender,
            //     image: this.person.image,
            //     last_loc: this.person.last_loc,
            //     last_seen: this.person.last_seen,
            //     nationality: this.person.nationality,
            //     reported_by: this.person.reported_by,
            //     status: this.person.status
            // }
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`The dialog was closed`);
            this.person = result;
        });
    }
}
