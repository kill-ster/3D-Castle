import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { DirectionalLight } from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
/**
 * Base
 */
// Debug
// const gui = new dat.GUI()
// gui._closed = true
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()



/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
// Door Texture
const doorColorTexture = textureLoader.load('/textures/door/door2/color.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/door2/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('/textures/door/door2/height.png')
const doorMetallicTexture = textureLoader.load('/textures/door/door2/metallic.jpg')
const doorNormalTexture = textureLoader.load('/textures/door/door2/normal.jpg')
const doorRoughnessTexture = textureLoader.load('/textures/door/door2/roughness.jpg')

// Floor Texture
const floorColorTexture = textureLoader.load('/textures/floor/color.jpg')
const floorAmbientOcclusionTexture = textureLoader.load('/textures/floor/ambientOcclusion.jpg')
const floorNormalTexture = textureLoader.load('/textures/floor/normal.jpg')
const floorRoughnessTexture = textureLoader.load('/textures/floor/roughness.jpg')

// Bricks1 Texture
const bricksColorTexture = textureLoader.load('/textures/bricks/bricks1/color.jpg')
const bricksAmbientOcclusionTexture = textureLoader.load('/textures/bricks/bricks1/ambientOcclusion.jpg')
const bricksNormalTexture = textureLoader.load('/textures/bricks/bricks1/normal.jpg')
const bricksRoughnessTexture = textureLoader.load('/textures/bricks/bricks1/roughness.jpg')

// Bricks2 Texture
const bricks2ColorTexture = textureLoader.load('/textures/bricks/bricks2/color.jpg')
const bricks2AmbientOcclusionTexture = textureLoader.load('/textures/bricks/bricks2/ambientOcclusion.jpg')
const bricks2NormalTexture = textureLoader.load('/textures/bricks/bricks2/normal.jpg')
const bricks2RoughnessTexture = textureLoader.load('/textures/bricks/bricks2/roughness.jpg')
const bricks2HeightTexture = textureLoader.load('/textures/bricks/bricks2/height.png')

// Bricks3 Texture
const bricks3ColorTexture = textureLoader.load('/textures/bricks/bricks3/color.jpg')
const bricks3AmbientOcclusionTexture = textureLoader.load('/textures/bricks/bricks3/ambientOcclusion.jpg')
const bricks3NormalTexture = textureLoader.load('/textures/bricks/bricks3/normal.jpg')
const bricks3RoughnessTexture = textureLoader.load('/textures/bricks/bricks3/roughness.jpg')
const bricks3HeightTexture = textureLoader.load('/textures/bricks/bricks3/height.png')

// Matcaps
const matcap = textureLoader.load('/matcaps/2.png')

// Roof Texture
const RoofColorTexture = textureLoader.load('/textures/roof/color.jpg')
const RoofAmbientOcclusionTexture = textureLoader.load('/textures/roof/ambientOcclusion.jpg')
const RoofNormalTexture = textureLoader.load('/textures/roof/normal.jpg')
const RoofRoughnessTexture = textureLoader.load('/textures/roof/roughness.jpg')
const RoofHeightTexture = textureLoader.load('/textures/roof/height.png')


// Floor Reapeat
floorColorTexture.minFilter = THREE.NearestFilter
floorAmbientOcclusionTexture.minFilter = THREE.NearestFilter
floorNormalTexture.minFilter = THREE.NearestFilter
floorRoughnessTexture.minFilter = THREE.NearestFilter



//  Examination
const gender = confirm("Girls Press 'Ok' !! Boys Press 'cancel'")
const name = prompt('Type Your Name Please !!')
if(gender){
    
/**
 * TextFont Texture
 */
 const fontLoader = new FontLoader()
 fontLoader.load(
     '/fonts/helvetiker_regular.typeface.json',
     (font)=>{
         const geomatry = new TextGeometry(
             "Princess",
             {
                 font: font,
                 size: 1,
                 height: 0.2,
                 curveSegments: 5,
                 bevelEnabled: true,
                 bevelThickness: 0.03,
                 bevelSize: 0.02,
                 bevelOffset: 0,
                 bevelSegments: 5
             }
         )
         geomatry.center()
         const torusGeomatry = new THREE.TorusBufferGeometry(0.3 , 0.2 , 16 , 32)
 
         const material = new THREE.MeshMatcapMaterial({color: 0x00ffff })
         material.wireframe = false
 
         const text = new THREE.Mesh(geomatry , material)
         text.position.y = 3.5
         text.position.z = -2
         text.position.x = 10 - 0.4
         text.rotation.y = Math.PI * -0.5 
         scene.add(text)
     }
 )

 //  Font Text 2
 const fontLoader1 = new FontLoader()
 fontLoader1.load(
     '/fonts/helvetiker_regular.typeface.json',
     (font)=>{
         const geomatry = new TextGeometry(
             `${name}'s Castle`,
             {
                 font: font,
                 size: 1,
                 height: 0.2,
                 curveSegments: 5,
                 bevelEnabled: true,
                 bevelThickness: 0.03,
                 bevelSize: 0.02,
                 bevelOffset: 0,
                 bevelSegments: 5
             }
         )
         geomatry.center()
         const torusGeomatry = new THREE.TorusBufferGeometry(0.3 , 0.2 , 16 , 32)
 
         const material = new THREE.MeshMatcapMaterial({color: 0x00ffff })
         material.wireframe = false
 
         const text = new THREE.Mesh(geomatry , material)
         text.position.y = 2
         text.position.z = -2
         text.position.x = 10 - 0.4
         text.rotation.y = Math.PI * -0.5 
         scene.add(text)
     }
 )

}
else{
    /**
 * TextFont Texture
 */
 const fontLoader = new FontLoader()
 fontLoader.load(
     '/fonts/helvetiker_regular.typeface.json',
     (font)=>{
         const geomatry = new TextGeometry(
             "Prince",
             {
                 font: font,
                 size: 1,
                 height: 0.2,
                 curveSegments: 5,
                 bevelEnabled: true,
                 bevelThickness: 0.03,
                 bevelSize: 0.02,
                 bevelOffset: 0,
                 bevelSegments: 5
             }
         )
         geomatry.center()
         const torusGeomatry = new THREE.TorusBufferGeometry(0.3 , 0.2 , 16 , 32)
 
         const material = new THREE.MeshMatcapMaterial({color: 0x00ffff })
         material.wireframe = false
 
         const text = new THREE.Mesh(geomatry , material)
         text.position.y = 3.5
         text.position.z = -2
         text.position.x = 10 - 0.4
         text.rotation.y = Math.PI * -0.5 
         scene.add(text)
     }
 )

 //  Font Text 2
 const fontLoader1 = new FontLoader()
 fontLoader1.load(
     '/fonts/helvetiker_regular.typeface.json',
     (font)=>{
         const geomatry = new TextGeometry(
            `${name}'s Castle`,
             {
                 font: font,
                 size: 1,
                 height: 0.2,
                 curveSegments: 5,
                 bevelEnabled: true,
                 bevelThickness: 0.03,
                 bevelSize: 0.02,
                 bevelOffset: 0,
                 bevelSegments: 5
             }
         )
         geomatry.center()
         const torusGeomatry = new THREE.TorusBufferGeometry(0.3 , 0.2 , 16 , 32)
 
         const material = new THREE.MeshMatcapMaterial({color: 0x00ffff })
         material.wireframe = false
 
         const text = new THREE.Mesh(geomatry , material)
         text.position.y = 2
         text.position.z = -2
         text.position.x = 10 - 0.4
         text.rotation.y = Math.PI * -0.5 
         scene.add(text)
     }
 )
}




 /*
* Bountry
 */
const boundry = new THREE.Group()
scene.add(boundry)

// Boundry Material
const boundryMaterial = new THREE.MeshStandardMaterial({
    map: bricks3ColorTexture,
    aoMap: bricks3AmbientOcclusionTexture,
    normalMap: bricks3NormalTexture,
    roughness: bricks3RoughnessTexture
    
})

//Boundry1 
const boundry1 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.5 , 6 , 30 ),
    boundryMaterial
)
boundry1.geometry.setAttribute(
    'uv2' , new THREE.BufferAttribute(boundry1.geometry.attributes.uv.array , 2)
)
boundry1.position.y = 6/2
boundry1.position.x = -20 / 2 + 0.5 / 2
boundry.add(boundry1)

// Boundry2
const boundry2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.5 , 6 , 20 ),
    boundryMaterial
)
boundry2.geometry.setAttribute(
    'uv2' , new THREE.BufferAttribute(boundry2.geometry.attributes.uv.array , 2)
)
boundry2.position.y = 6/2
boundry2.position.z = -30 / 2 + 0.5 / 2
boundry2.rotation.y = Math.PI * 0.5
boundry.add(boundry2)

// boundry3
const boundry3 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.5 , 6 , 30 ),
    boundryMaterial
)
boundry3.geometry.setAttribute(
    'uv2' , new THREE.BufferAttribute(boundry3.geometry.attributes.uv.array , 2)
)
boundry3.position.y = 6/2
boundry3.position.x = 20 / 2 - 0.5 / 2
boundry.add(boundry3)



// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 30),
    new THREE.MeshStandardMaterial({ 
        map: floorColorTexture,
        aoMap: floorAmbientOcclusionTexture,
        normalMap: floorNormalTexture,
        roughness: floorRoughnessTexture
     })
)
floor.geometry.setAttribute(
    'uv2' , new THREE.BufferAttribute(floor.geometry.attributes.uv.array , 2)
)
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
scene.add(floor)


/**
 * House
 */
 const house = new THREE.Group()
 house.position.z = - 30 / 2 + 10 / 2 + 0.1
 scene.add(house)

//  Walls
const walls = new THREE.Mesh(
    new THREE.BoxBufferGeometry(8 , 5 , 10),
    new THREE.MeshStandardMaterial({
        map: bricks2ColorTexture,
    aoMap: bricks2AmbientOcclusionTexture,
    normalMap: bricks2NormalTexture,
    roughness: bricks2RoughnessTexture
    
    })
)
walls.geometry.setAttribute(
    'uv2' , new THREE.BufferAttribute(walls.geometry.attributes.uv.array , 2)
)
walls.position.y = 5/ 2
house.add(walls)

// Pillers
const pillerMaterial = new THREE.MeshStandardMaterial({
    map: bricks2ColorTexture,
    aoMap: bricks2AmbientOcclusionTexture,
    normalMap: bricks2NormalTexture,
    roughness: bricks2RoughnessTexture
})

// Piller1
const piller1 = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(1 , 1 , 8) ,
    pillerMaterial
)
piller1.geometry.setAttribute(
    'uv2' , new THREE.BufferAttribute(piller1.geometry.attributes.uv.array , 2)
)
piller1.position.y = 8 / 2
piller1.position.z = 10 / 2 + 0.5 / 2
piller1.position.x = - 8/ 2 
house.add(piller1)

 // Piller2
const piller2 = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(1 , 1 , 8) ,
    pillerMaterial
)
piller2.geometry.setAttribute(
    'uv2' , new THREE.BufferAttribute(piller2.geometry.attributes.uv.array , 2)
)
piller2.position.y = 8 / 2
piller2.position.z = 10 / 2 + 0.5 / 2
piller2.position.x =  8/ 2 
house.add(piller2)

// Caps
// cap1
const cap1 = new THREE.Mesh(
    new THREE.ConeBufferGeometry(),
    pillerMaterial
) 
cap1.geometry.setAttribute(
    'uv2' , new THREE.BufferAttribute(cap1.geometry.attributes.uv.array , 2)
)
cap1.position.y = 0.5 + 8
cap1.position.z = 10 / 2 + 0.5 / 2
cap1.position.x =  8/ 2 
house.add(cap1)

// cap2
const cap2 = new THREE.Mesh(
    new THREE.ConeBufferGeometry(),
    pillerMaterial
) 
cap2.geometry.setAttribute(
    'uv2' , new THREE.BufferAttribute(cap2.geometry.attributes.uv.array , 2)
)
cap2.position.y = 0.5 + 8
cap2.position.z = 10 / 2 + 0.5 / 2
cap2.position.x = - 8/ 2 
house.add(cap2)

// Door
const door = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(3 , 3.5),
    new THREE.MeshStandardMaterial({
        map: doorColorTexture,
        aoMap: doorAmbientOcclusionTexture,
        normalMap: doorNormalTexture,
        roughness: doorRoughnessTexture
    })
) 
door.geometry.setAttribute(
    'uv2' , new THREE.BufferAttribute(door.geometry.attributes.uv.array , 2)
)
door.position.y = 3.5 / 2
door.position.z = 10 /2 + 0.01
house.add(door)

/**
 * Blocks Boundry
 */
// Blocks Boundry 1
const blockBoundry1 = new THREE.Group()
house.add(blockBoundry1)
// block1
const block1 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1 , 0.5 , 0.5),
    pillerMaterial
)
block1.geometry.setAttribute(
    'uv2' , new THREE.BufferAttribute(block1.geometry.attributes.uv.array , 2)
)
block1.position.y = 5 + 0.5 / 2
block1.position.z = 10 / 2 - 0.5 / 2
block1.position.x = - 8 * 0.25
blockBoundry1.add(block1)

// block2
const block2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1 , 0.5 , 0.5),
    pillerMaterial
)
block2.geometry.setAttribute(
    'uv2' , new THREE.BufferAttribute(block2.geometry.attributes.uv.array , 2)
)
block2.position.y = 5 + 0.5 / 2
block2.position.z = 10 / 2 - 0.5 / 2
// block2.position.x = - 8 * 0.25
blockBoundry1.add(block2)

// block3
const block3 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1 , 0.5 , 0.5),
    pillerMaterial
)
block3.geometry.setAttribute(
    'uv2' , new THREE.BufferAttribute(block3.geometry.attributes.uv.array , 2)
)
block3.position.y = 5 + 0.5 / 2
block3.position.z = 10 / 2 - 0.5 / 2
block3.position.x =  8 * 0.25
blockBoundry1.add(block3)

// Blocks Boundry 2
const blockBoundry2 = new THREE.Group()
house.add(blockBoundry2)
// blockLeft
const blockLeft = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.5 ,  0.5 , 10),
    pillerMaterial
)
blockLeft.position.y = 5 + 0.5 / 2
blockLeft.position.x = 8 / 2 - 0.5 / 2
blockBoundry2.add(blockLeft)

// blocRight
const blockRight = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.5 ,  0.5 , 10),
    pillerMaterial
)
blockRight.position.y = 5 + 0.5 / 2
blockRight.position.x = -8 / 2 + 0.5 / 2
blockBoundry2.add(blockRight)


/**
 * Ghost
 */
 const ghost1 = new THREE.PointLight(0x00ffff , 10 , 3)
 ghost1.castShadow = true
 scene.add(ghost1)
 
 const ghost2 = new THREE.PointLight(0x00ffff , 10 , 3)
 ghost2.castShadow = true
 scene.add(ghost2)
 
 const ghost3 = new THREE.PointLight(0x00ffff , 10 , 3)
 ghost3.castShadow = true
 scene.add(ghost3)
 
 




/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.2)
// gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight(0x00ffff , 1)
moonLight.position.set(4, 5, - 2)
// gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
// gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
// gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
// gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
scene.add(moonLight)

// Door Light
const doorLight = new THREE.PointLight(0x00ffff, 1 , 7 )
doorLight.position.set(0 , 4 , 7)
house.add(doorLight)


// Glow Light
const glowLight = new THREE.PointLight(0x00ffff, 1 , 10 )
glowLight.position.set(8 , 3 , 4)
house.add(glowLight)

const glowLight2 = new THREE.PointLight(0x00ffff, 1 , 10 )
glowLight2.position.set(8 , 3 , 8)
house.add(glowLight2)

const glowLight3 = new THREE.PointLight(0x00ffff, 1 , 10 )
glowLight3.position.set(8 , 3 , 12)
house.add(glowLight3)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = -8
camera.position.y = 11
camera.position.z = 11
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))



// // Shadow
// renderer.shadowMap.enabled = true


// doorLight.shadow.mapSize.width = 256
// doorLight.shadow.mapSize.height = 256
// doorLight.shadow.camera.far = 7

// ghost1.shadow.mapSize.width = 256
// ghost1.shadow.mapSize.height = 256
// ghost1.shadow.camera.far = 7

// ghost2.shadow.mapSize.width = 256
// ghost2.shadow.mapSize.height = 256
// ghost2.shadow.camera.far = 7

// ghost3.shadow.mapSize.width = 256
// ghost3.shadow.mapSize.height = 256
// ghost3.shadow.camera.far = 7

// // Shadows receve cast
// floor.receiveShadow = true
// walls.receiveShadow = true
// house.receiveShadow = true

// house.castShadow = true
// walls.castShadow = true
// block1.castShadow = true
// block2.castShadow = true
// block3.castShadow = true
// piller1.castShadow = true
// piller2.castShadow = true
// boundry1.castShadow = true
// boundry3.castShadow = true
// boundry2.castShadow = true

// doorLight.castShadow = true
// moonLight.castShadow = true
// ghost1.castShadow = true
// ghost2.castShadow = true
// ghost3.castShadow = true

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    
    
    // Update Ghost
   const angleG1 = elapsedTime * 0.5
   ghost1.position.x = Math.sin(angleG1) * 10
   ghost1.position.z = Math.cos(angleG1) * 10
   ghost1.position.y = Math.sin(elapsedTime * 3)

   const angleG2 = - elapsedTime 
   ghost2.position.x = Math.sin(angleG2) * 8
   ghost2.position.z = Math.cos(angleG2) * 8
   ghost2.position.y = Math.sin(elapsedTime * 10 + Math.sin(elapsedTime * 4  ) )

   const angleG3 = - elapsedTime * 1.2
   ghost3.position.x = Math.sin(angleG3) * 4
   ghost3.position.z = Math.cos(angleG3) * 6
   ghost3.position.y = Math.sin(elapsedTime * 2 * Math.sin(elapsedTime * 4  ) )





    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()