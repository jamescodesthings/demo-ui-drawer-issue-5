import { Component, OnInit } from "@angular/core";
import { install } from '@nativescript-community/ui-drawer';

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('Attempt install in ngOnInit of app.component, simplified.');
        install();
    }
}
