import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import * as THREE from 'three';


@Component({
  selector: 'app-basic-scene',
  templateUrl: './basic-scene.component.html',
  styleUrls: ['./basic-scene.component.scss']
})
export class BasicSceneComponent implements OnInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;
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
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    console.log(this.rendererContainer.nativeElement);

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
