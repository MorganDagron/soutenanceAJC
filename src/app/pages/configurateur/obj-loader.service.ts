import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

@Injectable({
  providedIn: 'root',
})
export class ObjLoaderService {
  constructor() {}

  loadObj(filepath: string): Promise<THREE.Group> {
    return new Promise((resolve, reject) => {
      const loader = new OBJLoader();
      loader.load(
        filepath,
        (object) => {
          resolve(object);
        },
        undefined,
        (error: any) => {
          reject(error);
        }
      );
    });
  }
}
