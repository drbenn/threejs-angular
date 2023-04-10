import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { BasicSceneComponent } from './basic-scene/basic-scene.component';
import { BasicSceneResizeComponent } from './basic-scene-resize/basic-scene-resize.component';
import { DrawLinesComponent } from './draw-lines/draw-lines.component';
import { LoadModelComponent } from './load-model/load-model.component';

const routes: Routes = [
  {path:'start', component: StartComponent},
  {path:'basic-scene', component: BasicSceneComponent},
  {path:'basic-scene-resize', component: BasicSceneResizeComponent},
  {path:'draw-line', component: DrawLinesComponent},
  {path:'load-model', component: LoadModelComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
