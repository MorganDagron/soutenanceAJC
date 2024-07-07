import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as THREE from 'three';
import { ObjLoaderService } from './obj-loader.service';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-configurateur',
  templateUrl: './configurateur.component.html',
  styleUrls: ['./configurateur.component.css'],
})
export class ConfigurateurComponent implements OnInit {
  type: string = 'ring';
  shape: string = 'simple-ring';
  decoration: string = 'wave';
  width: string = '5';
  diameter: string = '17-06';
  material: string = 'gold'; // Option de matériau par défaut
  scene!: THREE.Scene;
  renderer!: THREE.WebGLRenderer;
  camera!: THREE.PerspectiveCamera;
  modelGroup!: THREE.Group;
  clock: THREE.Clock;
  orbitControls!: OrbitControls;

  constructor(private objLoaderService: ObjLoaderService) {
    this.clock = new THREE.Clock();
  }

  ngOnInit(): void {
    this.initThreeJS();
    this.loadModel();
  }

  initThreeJS(): void {
    this.scene = new THREE.Scene();

    // Ajouter des lumières à la scène
    const ambientLight = new THREE.AmbientLight(0x404040, 6); // lumière douce
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 6.5); // lumière directionnelle
    directionalLight.position.set(2, 4, 0).normalize();
    this.scene.add(directionalLight);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 4;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById('three-container')
      ?.appendChild(this.renderer.domElement);
    this.orbitControls = new OrbitControls(
      this.camera,
      this.renderer.domElement
    );
    this.orbitControls.enableDamping = true;
    this.orbitControls.dampingFactor = 0.05;
    this.orbitControls.screenSpacePanning = false;
    this.animate();
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    if (this.modelGroup) {
      const delta = this.clock.getDelta();
      this.modelGroup.rotation.y += delta * 0.3; // Rotation lente
      this.modelGroup.rotation.x += delta * 0.3; // Rotation lente
    }
    this.orbitControls.update();
    this.renderer.render(this.scene, this.camera);
  };

  generateFilename(): string {
    return `${this.type}_${this.shape}_${this.decoration}_${this.width}_${this.diameter}.obj`;
  }

  loadModel(): void {
    const filepath = `/models3d/${this.generateFilename()}`;
    console.log('Attempting to load model from:', filepath); // Journal de débogage
    this.objLoaderService
      .loadObj(filepath)
      .then((object) => {
        // Appliquer le matériau
        const material = this.getMaterial();
        object.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).material = material;
          }
        });

        // Assurez-vous que l'objet est visible
        object.position.set(0, 0, 0);
        object.scale.set(0.1, 0.1, 0.1);

        // Supprimer le modèle précédent s'il existe
        if (this.modelGroup) {
          this.scene.remove(this.modelGroup);
        }

        // Ajouter le nouveau modèle à la scène
        this.modelGroup = object;
        this.scene.add(this.modelGroup);
      })
      .catch((error) => {
        console.error('Error loading model:', error);
      });
  }

  getMaterial(): THREE.Material {
    switch (this.material) {
      case 'gold':
        return new THREE.MeshStandardMaterial({
          color: 0xffd700,
          roughness: 0.1,
          metalness: 0.9,
        });
      case 'steel':
        return new THREE.MeshStandardMaterial({
          color: 0xdee0eb,
          roughness: 0.1,
          metalness: 0.9,
        });
      case 'silver':
        return new THREE.MeshStandardMaterial({
          color: 0xf7f7f8,
          roughness: 0.1,
          metalness: 0.9,
        });
      default:
        return new THREE.MeshStandardMaterial({
          color: 0xffd700,
          roughness: 0.1,
          metalness: 0.9,
        });
    }
  }

  updateModel(): void {
    this.loadModel();
  }

  updateMaterial(): void {
    if (this.modelGroup) {
      const material = this.getMaterial();
      this.modelGroup.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).material = material;
        }
      });
    }
  }
}
