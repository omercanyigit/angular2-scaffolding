
import {Component, OnInit} from "@angular/core";
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

@Component({
    selector: "app",
    template: "<h1>Angular 2 app</h1>"
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}