import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/app';
import { MissingPeopleService } from '../../services/missing-people.service';
import {} from '../../models/missing-person';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
    persons: Persons[];
    constructor(private missingPeopleService: MissingPeopleService) {}

    ngOnInit() {}

    getPerson() {
        this.missingPeopleService.getMissingPersons().snapshotChanges().forEach(personsSnapshot => {
            this.persons = [];
            personsSnapshot.forEach(personSnapshot) => {
                let person = personSnapshot.payload.toJSON();
                person.[$key] = personSnapshot.key;
                this.persons.push(person as );
            }
        });
    }
}
