var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 700/650, 0.1, 1000 );
var canvas = document.getElementById("input");
var ctx = canvas.getContext('2d');

console.log("3:55");

var renderer = new THREE.WebGLRenderer();
renderer.setSize( 700, 650 );
renderer.shadowMapType = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

var geometry1 = new THREE.BoxGeometry( 40, 1, 1 );
var geometry2 = new THREE.BoxGeometry( 1, 40, 1);
var material = new THREE.MeshLambertMaterial( { color: 0xffff00 } );
var cube1 = new THREE.Mesh( geometry1, material );
cube1.castShadow = true;
var cube2 = new THREE.Mesh( geometry2, material );
cube2.castShadow = true;
var cube3 = new THREE.Mesh( geometry1, material );
cube3.castShadow = true;
var cube4 = new THREE.Mesh( geometry2, material );
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

camera.position.z = 29;
camera.position.x = 20;
camera.position.y = 20;

var pointLight = new THREE.PointLight(0xffffff, 1, 140);
pointLight.position.set(20, 20, 30);
var ambientLight = new THREE.AmbientLight(0x888888);
scene.add( pointLight, ambientLight );

ctx.fillStyle = "red";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var render = function () {
  
    requestAnimationFrame( render );

    renderer.render(scene, camera);
  
};

requestAnimationFrame(render);
