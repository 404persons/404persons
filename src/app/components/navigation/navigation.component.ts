import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: [ './navigation.component.scss' ]
})
export class NavigationComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
    private function() {
        $('');
        jQuery('.button').alert('Hi');
    }
}
