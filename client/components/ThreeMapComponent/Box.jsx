'use strict';

import React from 'react';
import config from '../../../config.json';
import * as THREE from 'three/build/three.js';

export default class Box extends React.Component {
  constructor () {
    super();
    this.mesh = new THREE.Object3D();

    const box = new THREE.Mesh( new THREE.BoxGeometry( 3, 3, 3 ),
      new THREE.MeshPhongMaterial({
        color: 0x4080ff
      })
    );

    box.castShadow = true;
    box.receiveShadow = true

    this.mesh.add(box);
  }
};
