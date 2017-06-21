var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 900/700, 0.1, 1000 );

console.log("11:56");

var renderer = new THREE.WebGLRenderer();
renderer.setSize( 900, 700 );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var render = function () {
  
    requestAnimationFrame( render );

    renderer.render(scene, camera);
  
};

requestAnimationFrame(render);
