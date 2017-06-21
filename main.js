var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 900/700, 0.1, 1000 );

console.log("12:06");

var renderer = new THREE.WebGLRenderer();
renderer.setSize( 900, 700 );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var cube1 = new THREE.Mesh( geometry, material );
var cube2 = new THREE.Mesh( geometry, material );
var cube3 = new THREE.Mesh( geometry, material );
var cube4 = new THREE.Mesh( geometry, material );
scene.add( cube1, cube2, cube3, cube4 );

cube2.position.x = 40;
cube3.position.y = 40;
cube4.position.x = 40;
cube4.position.y = 40;

camera.position.z = 40;
camera.position.x = 20;
camera.position.y = 20;

var render = function () {
  
    requestAnimationFrame( render );

    renderer.render(scene, camera);
  
};

requestAnimationFrame(render);
