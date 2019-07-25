import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationListComponent } from './station-list/station-list.component';
import { StationComponent } from './station/station.component';

const routes: Routes = [
  { path: '', component: StationListComponent },
  { path: 'station/:id', component: StationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
