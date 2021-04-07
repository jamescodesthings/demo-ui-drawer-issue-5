import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from "@angular/core";
import { DrawerModule } from '@nativescript-community/ui-drawer/angular';
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

export function asyncBoot(): Function {
    return (): Promise<any> => new Promise(resolve => {
        console.log('loading');
        setTimeout(() => {
            console.log('loaded');
            resolve();
        }, 5000);
    })
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        DrawerModule,
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent
    ],
    providers: [{
        provide: APP_INITIALIZER,
        useFactory: asyncBoot,
        multi: true
    }],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
