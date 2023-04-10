import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-draw-lines',
  templateUrl: './draw-lines.component.html',
  styleUrls: ['./draw-lines.component.scss']
})
export class DrawLinesComponent implements OnInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;
  @HostListener('window:resize', ['$event'])
	onResize(event) {
		// console.log(event);
    const divWidth: number = this.rendererContainer.nativeElement.clientWidth;
    const aspectRatio: number = 4/3;
    this.renderer.setSize(divWidth, divWidth / aspectRatio);
// this.renderer.setSize(this.rendererContainer.nativeElement.clientWidth, this.rendererContainer.nativeElement.clientHeight);
// this.camera.position.z = 1000;
	}

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  cube = null;
  line = null;

  constructor() {}

  ngOnInit(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500); // Field of View(deg)/ Aspect Ratio/ near clipping pane / far clipping pane
    this.camera.position.set(0,0,100);
    this.camera.lookAt(0,0,0)

    // const geometry = new THREE.BoxGeometry(200, 200, 200);
    // const material = new THREE.MeshBasicMaterial({color: 0x0000FF, wireframe: true});
    // this.cube = new THREE.Mesh(geometry, material);
    const material = new THREE.LineBasicMaterial({color: 0x0000FF});
    const points = [];
    points.push( new THREE.Vector3(-10,0,0 ));
    points.push( new THREE.Vector3( 0,10,0 ));
    points.push( new THREE.Vector3( 10,0,0 ));

    const geometry = new THREE.BufferGeometry().setFromPoints( points );

    this.line = new THREE.Line( geometry, material );

    this.scene.add(this.line);
  }


ngAfterViewInit() {
    // this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setSize(this.rendererContainer.nativeElement.clientWidth, this.rendererContainer.nativeElement.clientHeight);
    console.log(this.rendererContainer.nativeElement.clientHeight);
    console.log(this.rendererContainer.nativeElement.clientWidth);

    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.renderer.render(this.scene, this.camera);
    // this.animateCube();
}

// animateCube() {
//     window.requestAnimationFrame(() => this.animateCube());
//     this.cube.rotation.x += 0.01;
//     this.cube.rotation.y += 0.02;
//     this.renderer.render(this.scene, this.camera);
// }

}
