import './style.css'
import './css_reset.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Canvas
const canvas = document.querySelector('canvas.webgl') as HTMLCanvasElement;
const canvas_height = canvas?.clientHeight;
const canvas_width = canvas?.clientWidth;

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
if (canvas_height && canvas_width) {
  const camera = new THREE.PerspectiveCamera(60, canvas_width / canvas_height, 0.1, 100);
  camera.position.z = 2;
  scene.add(camera)

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas
  })

  renderer.setSize(canvas_width, canvas_height);
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
}
