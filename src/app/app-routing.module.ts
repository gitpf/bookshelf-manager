import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/library',
    pathMatch: 'full',
  },
  {
    path: 'library',
    component: LibraryComponent,
  },
  {
    path: '**',
    component: LibraryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
