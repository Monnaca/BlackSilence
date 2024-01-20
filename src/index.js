import { /*Scene, PerspectiveCamera,*/ WebGLRenderer } from "three";
//const scene: Scene = new Scene()
/* const camera: PerspectiveCamera = new PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000
) */
const renderEngine = new WebGLRenderer();
renderEngine.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderEngine.domElement);
