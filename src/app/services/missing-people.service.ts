import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
    providedIn: 'root'
})
export class MissingPeopleService {
    private missing_people: AngularFireList<any>;

    constructor(private firebase: AngularFireDatabase) {
        this.missing_people = this.firebase.list('missing_persons');
    }

    getMissingPersons() {
        // console.log(this.missing_people);
        return this.missing_people;
    }

    // addMissingPerson(person: Missing_Person) {
    //     this.missing_people.push(person);
    // }

    // updateMissingPerson(person: Missing_Person) {
    //   let $key = person.$key;
    //   this.missing_people.update($key, person);
    // }
}
