const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
canvas:document.querySelector("#bg")
});

renderer.setSize(window.innerWidth,window.innerHeight);

camera.position.z=5;


// TEXTURE BACKGROUND (HUTAN / KOTA)

const textureLoader = new THREE.TextureLoader();

const bgTexture = textureLoader.load(
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
);

scene.background = bgTexture;


// LIGHT

const light = new THREE.AmbientLight(0xffffff,1);

scene.add(light);


// ANIMATE

function animate(){

requestAnimationFrame(animate);

renderer.render(scene,camera);

}

animate();


// CREATE PHOTOS

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


// MENU SWITCH

function showPage(page){

let sections=document.querySelectorAll("section");

sections.forEach(s=>s.classList.add("hidden"));

document.getElementById(page).classList.remove("hidden");

}
