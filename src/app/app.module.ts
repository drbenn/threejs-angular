import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StartComponent } from './start/start.component';
import { BasicSceneComponent } from './basic-scene/basic-scene.component';
import { BasicSceneResizeComponent } from './basic-scene-resize/basic-scene-resize.component';
import { DrawLinesComponent } from './draw-lines/draw-lines.component';
import { LoadModelComponent } from './load-model/load-model.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StartComponent,
    BasicSceneComponent,
    BasicSceneResizeComponent,
    DrawLinesComponent,
    LoadModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
