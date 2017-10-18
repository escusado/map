import React from 'react';
import config from '../../../config.json';

// import * as THREE from 'three/build/three.js';
import ThreeEngine from '../lib/ThreeEngine';
import ThreeOrbitControls from 'three-orbit-controls';
import Box from './Box.jsx';

const THREE = require('three/build/three.min');
const OrbitControls = ThreeOrbitControls(THREE);

export default class ThreeMapComponent extends React.Component {

  constructor () {
    super();
    console.log('App init');

    this.renderEngine = new ThreeEngine({
      debugAxis : true
    });

  }

  componentDidMount () {
    console.log('App setup');
    this.renderEngine.setup();

    this.container.appendChild(this.renderEngine.element);
    this.cameraControls = new OrbitControls(this.renderEngine.camera);

    this._letThereBeLight();

    this._createElements();

    window.addEventListener('resize', this._resize.bind(this));

    //kickstart
    this.renderEngine.update();
  }

  _createElements () {
    // this.ground = new Plane();
    // this.ground.mesh.position.y = -10;
    // this.renderEngine.scene.add(this.ground.mesh);
    //
    this.box = new Box();
    this.box.mesh.position.y = 20;
    this.renderEngine.scene.add(this.box.mesh);
  }

  _resize () {
    var newSize = {
      w: window.innerWidth,
      h: window.innerHeight
    };

    this.renderEngine.resize(newSize);
    this.size = newSize;
  }

  _letThereBeLight () {
	  const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9)
 	  const shadowLight = new THREE.DirectionalLight(0xffffff, .9);

    shadowLight.position.set(150, 350, 350);
 	  shadowLight.castShadow = true;

  	shadowLight.shadow.camera.left = -400;
  	shadowLight.shadow.camera.right = 400;
  	shadowLight.shadow.camera.top = 400;
  	shadowLight.shadow.camera.bottom = -400;
  	shadowLight.shadow.camera.near = 1;
  	shadowLight.shadow.camera.far = 1000;

  	shadowLight.shadow.mapSize.width = 2048;
  	shadowLight.shadow.mapSize.height = 2048;

  	this.renderEngine.scene.add(hemisphereLight);
  	this.renderEngine.scene.add(shadowLight);

    this.renderEngine.renderer.shadowMap.enabled = true;

		this.renderEngine.renderer.gammaInput = true;
		this.renderEngine.renderer.gammaOutput = true;
  }

  render() {
    return (
      <div style={{width:"inherit", height:"inherit"}}
        ref={thisNode => this.container=thisNode}
      >
      </div>

    );
  }

}
