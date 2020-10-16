import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ActivitiesComponent } from "./activies/activities.component"
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/activities", pathMatch: "full" },
    { path: "activities", component: ActivitiesComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
