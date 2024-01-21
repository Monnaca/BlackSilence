import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from "three"

const scene: Scene = new Scene()
const camera: PerspectiveCamera = new PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000
) 

const renderEngine: WebGLRenderer = new WebGLRenderer()
renderEngine.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderEngine.domElement)

const geometry: BoxGeometry = new BoxGeometry(1,1,1)
const texture: MeshBasicMaterial = new MeshBasicMaterial({color: 0x00ff00})
const cube: Mesh = new Mesh(geometry, texture)
scene.add(cube)

camera.position.z = 5

const animate = () => {
    requestAnimationFrame( animate )

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderEngine.render(scene, camera)
}

