import './style.css'
import './css_reset.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl') as HTMLCanvasElement;
const sizes = {
  width: canvas?.clientWidth,
  height: canvas?.clientHeight
}

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const geometry = new THREE.OctahedronGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
material.wireframe = true;
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 2;
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const clock = new THREE.Clock()
const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  mesh.position.z = Math.sin(elapsedTime);
  mesh.rotation.y = elapsedTime * Math.PI;

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}
tick()

function rngLetters() {
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+[],./';
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return result;
}
setInterval(() => {
  document.title = rngLetters();
}, 100);
