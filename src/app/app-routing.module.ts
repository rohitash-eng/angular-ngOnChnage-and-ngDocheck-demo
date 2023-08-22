import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'home', component: AppComponent, children: [
    { path: '', redirectTo: 'parent', pathMatch: 'full' },
    { path: 'parent', component: ParentComponent },
    { path: 'child', component: ChildComponent }
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
