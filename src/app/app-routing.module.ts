import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {LubricantsComponent} from "./lubricants/lubricants.component";
import {LubricantDetailsComponent} from "./lubricants/lubricant-details/lubricant-details.component";

const appRoute: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: 'lubricants',
    component: LubricantsComponent,
    children: [
      {
        path: ':id',
        component: LubricantDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
