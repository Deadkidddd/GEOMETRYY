


const scene = new THREE.Scene();
scene.background = new THREE.Color(0xc8fffc);
const camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( window.innerWidth, window.innerHeight );

// Append the renderer to the container
const container = document.getElementById('threejs-container');
container.appendChild(renderer.domElement);

//const controls = new OrbitControls( camera, renderer.domElement)

let mesh = new THREE.MeshStandardMaterial({ color: 0x000000});
function changeColor(mesh) {
    setTimeout(function() {
        mesh.material.color.set(0xE29CD2);
    }, 1000);

    setTimeout(function() {
        mesh.material.color.set(0xE6E6FA);
    }, 2000);

    setTimeout(function() {
        mesh.material.color.set(0x9D00FF);
    }, 4000);
}

//definitions & coorelations
let change = 4.5;
let sphereRadius = 1;
const trunc1bRad =  ((change * sphereRadius) /(2 * 3.14 * sphereRadius));
const trunc1sRad = trunc1bRad / 1.75;
const trunc1h = trunc1sRad / trunc1bRad;
const trunc2bRad =  ((1/2 * change * sphereRadius) /(2 * 3.14 * sphereRadius));
const trunc2sRad = trunc2bRad / 1.75;
const trunc2h = .5 * (trunc2sRad / trunc2bRad);
console.log(trunc1bRad, trunc1sRad, trunc1h, trunc2bRad, trunc2sRad, trunc2h);

//Volumes
const sphereVol = (4/3) * 3.14 * Math.pow(sphereRadius, 3);
const trunc1Vol = (1/3 * (trunc1h * 3.14 * (Math.pow(trunc1bRad, 2) + trunc1bRad * trunc1sRad + Math.pow(trunc1sRad, 2))));
const trunc2Vol = (1/3 * (trunc2h * 3.14 * (Math.pow(trunc2bRad, 2) + trunc2bRad * trunc2sRad + Math.pow(trunc2sRad, 2))));
const totalVol = sphereVol + trunc1Vol + trunc2Vol;
console.log(sphereVol, trunc1Vol, trunc2Vol, "total Volume:", totalVol);

//Surface Areas
const sphereArea = (4 * 3.14 * Math.pow(sphereRadius, 2));
const trunc1Area = ( 3.14 * (trunc1bRad + trunc1sRad) * trunc1h + 3.14 * (Math.pow(trunc1bRad, 2) + Math.pow(trunc1sRad, 2)));
const trunc2Area = ( 3.14 * (trunc2bRad + trunc2sRad) * trunc2h + 3.14 * (Math.pow(trunc2bRad, 2) + Math.pow(trunc2sRad, 2)));
const totalArea = sphereArea + trunc1Area + trunc2Area;
console.log(sphereArea, trunc1Area, trunc2Area, "total Area:", totalArea);

//Sphere
const geoSphere = new THREE.SphereGeometry(sphereRadius);
const sphere = new THREE.Mesh( geoSphere, mesh );


//Truncated Cone
const geoTruncatedConeb = new THREE.CylinderGeometry( trunc1sRad, trunc1bRad, trunc1h, 32 );
const truncatedConeb = new THREE.Mesh( geoTruncatedConeb, mesh );
truncatedConeb.scale.y = -sphereRadius;
truncatedConeb.position.y = -0.85;

//Truncated Cone smaller
const geoTruncatedCones = new THREE.CylinderGeometry( trunc2sRad, trunc2bRad, trunc2h, 32 );
const truncatedCones = new THREE.Mesh( geoTruncatedCones, mesh );
truncatedCones.position.y = .95;

//scene add objects;
scene.add( truncatedConeb );
scene.add( sphere );
scene.add( truncatedCones );

camera.position.z = 5;
const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x888888, 5 );
scene.add( hemiLight);

function animate() {
    renderer.render( scene, camera );

    sphere.rotation.y += 0.01;
    truncatedConeb.rotation.y += 0.01;
    truncatedCones.rotation.y += 0.01;
    changeColor(Mesh);
    
  }
  renderer.setAnimationLoop( animate );
