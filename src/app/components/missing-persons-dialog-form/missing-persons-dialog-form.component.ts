import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Person } from '../../models/missing-person-model';

@Injectable()
@Component({
    selector: 'app-missing-persons-dialog-form',
    templateUrl: './missing-persons-dialog-form.component.html',
    styleUrls: [ './missing-persons-dialog-form.component.scss' ]
})
export class MissingPersonsDialogFormComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<MissingPersonsDialogFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Person
    ) {}

    ngOnInit() {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
