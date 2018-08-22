import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
// import { Observable } from 'rxjs';

import { Person } from '../models/missing-person-model';
import { config } from '../app.config';

@Injectable({
    providedIn: 'root'
})
export class MissingPeopleService {
    person: AngularFirestoreCollection<Person>;
    private personDoc: AngularFirestoreDocument<Person>;

    constructor(private db: AngularFirestore) {
        // Get the tasks collection
        this.person = db.collection<Person>(config.collection_endpoint);
    }

    // getMissingPersons() {}

    addMissingPersonRecord(missing_person) {
        // Add the new task to the collection

        this.person.add(missing_person);
    }

    updateMissingPersonRecord(id, update) {
        // get the person id
        this.personDoc = this.db.doc<Person>(`${config.collection_endpoint}/${id}`);
        this.personDoc.update(update);
    }

    deleteMisingPersonRecord(id) {
        // Get the task document
        this.personDoc = this.db.doc<Person>(`${config.collection_endpoint}/${id}`);

        // Delete the document
        this.personDoc.delete();
    }
}
