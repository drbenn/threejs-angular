import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

import * as THREE from 'three';

// https://stackoverflow.com/questions/29884485/threejs-canvas-size-based-on-container
@Component({
  selector: 'app-basic-scene-resize',
  templateUrl: './basic-scene-resize.component.html',
  styleUrls: ['./basic-scene-resize.component.scss']
})
export class BasicSceneResizeComponent implements OnInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;
  @HostListener('window:resize', ['$event'])
	onResize(event) {
		console.log(event);
    const divWidth: number = this.rendererContainer.nativeElement.clientWidth;
    const aspectRatio: number = 4/3;
this.renderer.setSize(divWidth, divWidth / aspectRatio);
// this.renderer.setSize(this.rendererContainer.nativeElement.clientWidth, this.rendererContainer.nativeElement.clientHeight);
this.camera.position.z = 1000;
	}

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  cube = null;

  constructor() {}

  ngOnInit(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000); // Field of View(deg)/ Aspect Ratio/ near clipping pane / far clipping pane
    this.camera.position.z = 1000;

    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshBasicMaterial({color: 0x0000FF, wireframe: true});
    this.cube = new THREE.Mesh(geometry, material);

    this.scene.add(this.cube);
  }


ngAfterViewInit() {
    // this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setSize(this.rendererContainer.nativeElement.clientWidth, this.rendererContainer.nativeElement.clientHeight);
    console.log(this.rendererContainer.nativeElement.clientHeight);
    console.log(this.rendererContainer.nativeElement.clientWidth);

    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animateCube();
}

animateCube() {
    window.requestAnimationFrame(() => this.animateCube());
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
}

}
