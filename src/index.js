import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from "three";
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderEngine = new WebGLRenderer();
renderEngine.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderEngine.domElement);
const geometry = new BoxGeometry(1, 1, 1);
const texture = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, texture);
scene.add(cube);
camera.position.z = 5;
const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderEngine.render(scene, camera);
};
animate();
