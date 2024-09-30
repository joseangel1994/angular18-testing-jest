import { Routes } from '@angular/router';
import {CounterComponent} from "./counter/counter.component";
import {CharizardComponent} from "./charizard/charizard.component";
import {FatherComponent} from "./father/father.component";
import {CounterRouteComponent} from "./counter-route/counter-route.component";

export const routes: Routes = [
  {path: 'counter', component: CounterComponent},
  {path: 'counter/:initial', component: CounterRouteComponent},
  {path: 'charizard', component: CharizardComponent},
  {path: 'father', component: FatherComponent},
];
