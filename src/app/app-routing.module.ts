import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // this route is needed for POST authentication from a structural
  { path: 'entry', redirectTo: '/', pathMatch: 'full' }
];

/**
 * AppRoutingModule
 * Designed to be the root routing module.
 *
 * imports:
 *  - RouterModule. Adds router directives and providers.
 *
 * exports:
 *  - RouterModule. The module with the configured routes.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
