import { Routes } from '@angular/router';
import { ClientDataComponent } from './pages/client-data/client-data.component';
import { ProfilingComponent } from './pages/profiling/profiling.component';
import { PlansComponent } from './pages/plans/plans.component';
import { FolioComponent } from './pages/folio/folio.component';

export const routes: Routes = [
    { path: 'client-data', component: ClientDataComponent },
    { path: 'profiling', component: ProfilingComponent },
    { path: 'plans', component: PlansComponent },
    { path: 'folio', component: FolioComponent },
];
