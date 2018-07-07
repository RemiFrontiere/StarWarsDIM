import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SpaceshipsComponent } from './components/spaceships/spaceships.component';

const routes: Routes = [
  {
    path: 'peoples',
    component: PeoplesComponent,
    data: { title: 'Peoples' }
  },
  {
    path: 'planets',
    component: PlanetsComponent,
    data: { title: 'Planets' }
  },
  {
    path: 'vehicles',
    component: VehiclesComponent,
    data: { title: 'Vehicles' }
  },
  {
    path: 'spaceships',
    component: SpaceshipsComponent,
    data: { title: 'Spaceships' }
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings'
    }
  },
  {
    path: 'examples',
    loadChildren: 'app/examples/examples.module#ExamplesModule'
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
