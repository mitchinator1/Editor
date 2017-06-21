var canvas = document.getElementById("map");
var ctx = canvas.getContext("2d");
var scene = new THREE.scene(), renderer = new THREE.WebGLRenderer();

renderer.setSize(900, 700);
document.body.appendChild(renderer.domElement); 

var geo = new THREE.BoxGeometry(3, 3, 3);
var mat = new THREE.MeshLambertMaterial({ color: 0x444444 });

var mesh = new THREE.Mesh(geo, mat);

var camera = new THREE.PerspectiveCamera(45, 900 / 700, 1, 1000);

scene.add(mesh, camera);
