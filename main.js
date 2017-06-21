var THREE;
var canvas = document.getElementById("input");
var ctx = canvas.getContext("2d");
var scene = new THREE.Scene(), renderer = new THREE.WebGLRenderer();

console.log("11:51");

renderer.setSize(900, 700);
document.body.appendChild(renderer.domElement); 

var geo = new THREE.BoxGeometry(3, 3, 3);
var mat = new THREE.MeshLambertMaterial({ color: 0x444444 });

var mesh = new THREE.Mesh(geo, mat);
mesh.position.y = 3;
mesh.position.z = 1;

var camera = new THREE.PerspectiveCamera(45, 900 / 700, 1, 1000);
camera.position.y = -20;

var geometry = new THREE.PlaneGeometry( 5, 20, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );

var light = new THREE.AmbientLight(0x404040, 100); 

scene.add(mesh, light, plane);

var render = function () {
  'use strict';
  
  renderer.render(scene, camera);
  
  requestAnimationFrame(render);

};

render();
