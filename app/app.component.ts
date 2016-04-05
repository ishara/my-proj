import {Component} from 'angular2/core';
import {MyComponent} from "./MyComponent";
import {BasicDemo} from "./basic-demo";

@Component({
    selector: 'my-app',
    template: `
<h1>My First Angular 2 App</h1>

<my-component></my-component>
<basic-demo></basic-demo>

`,
    directives:[MyComponent,BasicDemo]
})
export class AppComponent { }
