import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Child1Component } from "./component/child1/child1.component";
import { Child2Component } from "./component/child2/child2.component";

const routes: Routes = [
  { path: "a", component: Child1Component },
  { path: "a/b", component: Child2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
