import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { AppDrawerComponent } from '~/app/app-shell/app-drawer.component';

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "app", pathMatch: "full" },
    { path: "app", component: AppDrawerComponent, children: [
        { path: "", redirectTo: "items", pathMatch: "full" },
        { path: "items", component: ItemsComponent },
        { path: "item/:id", component: ItemDetailComponent }
    ]}

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
