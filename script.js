// =====================
// THREE JS BACKGROUND
// =====================

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
canvas:document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

camera.position.setZ(30);

renderer.render(scene,camera);

// particles

const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 2000;

const posArray = new Float32Array(particlesCount * 3);

for(let i=0;i<particlesCount*3;i++){
posArray[i]=(Math.random()-0.5)*100;
}

particlesGeometry.setAttribute(
'position',
new THREE.BufferAttribute(posArray,3)
);

const particlesMaterial = new THREE.PointsMaterial({
size:0.1
});

const particlesMesh = new THREE.Points(
particlesGeometry,
particlesMaterial
);

scene.add(particlesMesh);

function animate(){
requestAnimationFrame(animate);

particlesMesh.rotation.y +=0.0005;

renderer.render(scene,camera);
}

animate();


// =====================
// PHOTO GENERATOR
// =====================

function createPhotos(section){

for(let i=1;i<=20;i++){

let div=document.createElement("div");
div.className="photo";

let img=document.createElement("img");

img.src="https://picsum.photos/400?random="+Math.random();

div.appendChild(img);

section.appendChild(div);

}

}

createPhotos(document.getElementById("album"));
createPhotos(document.getElementById("all"));
createPhotos(document.getElementById("kenangan"));
createPhotos(document.getElementById("khusus"));
createPhotos(document.getElementById("story"));


// =====================
// PAGE SWITCH
// =====================

function showPage(page){

let sections=document.querySelectorAll("section");

sections.forEach(s=>s.classList.add("hidden"));

document.getElementById(page).classList.remove("hidden");

  }
