/**
 * Created by ishara on 05/04/2016.
 */

import {Component} from "angular2/core";
@Component({
    selector: 'my-component',
    template: '<div>Hello my name is {{name}}. <button (click)="sayMyName()">Say my name</button></div>'
})

export class MyComponent {
    private name:string;
    constructor() {
        this.name = 'Max'
    }
    sayMyName() {
        console.log('My name is', this.name)
    }
}
