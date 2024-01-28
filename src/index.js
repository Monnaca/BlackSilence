import { BoxGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, Scene, WebGLRenderer, Color } from "three";
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderEngine = new WebGLRenderer();
renderEngine.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderEngine.domElement);
const boxGeometry = new BoxGeometry(5, 10, 3);
const boxMaterial = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(boxGeometry, boxMaterial);
scene.background = new Color(0xffffff);
scene.add(cube);
camera.position.z = 20;
const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;
    renderEngine.render(scene, camera);
};
animate();
