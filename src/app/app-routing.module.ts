import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { EmployesComponent } from './employes/employes.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  {
    path: 'home',
    component: CarouselComponent,
  },
  {
    path: 'employes',
    component: EmployesComponent,
  },
  {
    path: 'groups',
    component: GroupsComponent,
  },
  {
    path: '',
    component: CarouselComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
