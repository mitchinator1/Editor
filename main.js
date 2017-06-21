var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 700/650, 0.1, 1000 );

console.log("1:08");

var renderer = new THREE.WebGLRenderer();
renderer.setSize( 700, 650 );
renderer.shadowMapType = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0xffff00 } );
var cube1 = new THREE.Mesh( geometry, material );
cube1.castShadow = true;
var cube2 = new THREE.Mesh( geometry, material );
cube2.castShadow = true;
var cube3 = new THREE.Mesh( geometry, material );
cube3.castShadow = true;
var cube4 = new THREE.Mesh( geometry, material );
cube4.castShadow = true;
scene.add( cube1, cube2, cube3, cube4 );

var planeGeo = new THREE.PlaneGeometry(50, 50, 1);
var planeMat = new THREE.MeshLambertMaterial({ color: 0xdddddd });
var plane = new THREE.Mesh(planeGeo, planeMat);
plane.receiveShadow = true;
scene.add( plane );

plane.position.x = 20;
plane.position.y = 20;
plane.position.z = -1;

cube2.position.x = 40;
cube3.position.y = 40;
cube4.position.x = 40;
cube4.position.y = 40;

camera.position.z = 30;
camera.position.x = 20;
camera.position.y = 20;

var pointLight = new THREE.PointLight(0xffffff, 1, 60);
pointLight.position.set(20, 20, 30);
scene.add( pointLight );

var render = function () {
  
    requestAnimationFrame( render );

    renderer.render(scene, camera);
  
};

requestAnimationFrame(render);
