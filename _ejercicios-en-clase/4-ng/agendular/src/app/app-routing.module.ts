import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailiesComponent } from './pages/dailies/dailies.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  {
    path:'', //Ruta inicial raiz
    redirectTo: '/dailies',
    pathMatch: 'full'
  },
  {
    path:'dailies', //Ruta inicial raiz
    component: DailiesComponent
  },
  {
    path:'tasks', //Ruta inicial raiz
    component: TasksComponent
  },
  {
    path:'**', //Para cuando escriban cualquier ruta inexistente
    redirectTo: '/', //Redirigir a raiz
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
