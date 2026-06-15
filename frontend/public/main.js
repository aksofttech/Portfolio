// Three.js 3D Motion Graphics Implementation - High Quality Upgrade

// Global variables for mouse tracking
let mouseX = 0;
let mouseY = 0;
let scrollY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

document.addEventListener('scroll', () => {
    scrollY = window.scrollY;
});

// Helper: Extrude a rounded box geometry
function createRoundedBoxGeometry(width, height, depth, radius, radiusSegments) {
    const shape = new THREE.Shape();
    const x = -width/2, y = -height/2;
    shape.moveTo( x, y + radius );
    shape.lineTo( x, y + height - radius );
    shape.quadraticCurveTo( x, y + height, x + radius, y + height );
    shape.lineTo( x + width - radius, y + height );
    shape.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
    shape.lineTo( x + width, y + radius );
    shape.quadraticCurveTo( x + width, y, x + width - radius, y );
    shape.lineTo( x + radius, y );
    shape.quadraticCurveTo( x, y, x, y + radius );

    const extrudeSettings = {
        depth: depth - radius * 2,
        bevelEnabled: true,
        bevelSegments: radiusSegments,
        steps: 1,
        bevelSize: radius,
        bevelThickness: radius,
        curveSegments: radiusSegments
    };

    const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
    geometry.center();
    geometry.computeVertexNormals();
    return geometry;
}

// Setup common scene elements (renderer, camera)
function setupScene(containerId, isHero = false) {
    const container = document.getElementById(containerId);
    if (!container) return null;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    
    // alpha: true allows the canvas background to be transparent
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // IMPORTANT: Explicitly set clear color to transparent to fix the black box issue
    renderer.setClearColor(0x000000, 0);
    
    // Removed ACESFilmicToneMapping as it causes transparent backgrounds to render as black boxes
    renderer.toneMapping = THREE.NoToneMapping;
    
    container.appendChild(renderer.domElement);

    if (isHero) {
        // Stark, dramatic studio lighting for the glossy hero cubes
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        // Key light (bright white reflection)
        const keyLight = new THREE.PointLight(0xffffff, 3.0, 100);
        keyLight.position.set(5, 10, 10);
        scene.add(keyLight);

        // Fill light (subtle blue/purple)
        const fillLight = new THREE.PointLight(0x8b5cf6, 1.5, 100);
        fillLight.position.set(-10, -5, -5);
        scene.add(fillLight);
        
        // Rim light
        const rimLight = new THREE.PointLight(0xffffff, 1.0, 100);
        rimLight.position.set(0, 0, -10);
        scene.add(rimLight);
    } else {
        // Soft lighting for the matte "How it Works" objects
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const topLight = new THREE.DirectionalLight(0xffffff, 1.0);
        topLight.position.set(5, 10, 5);
        scene.add(topLight);

        const sideLight = new THREE.DirectionalLight(0xa8b4fc, 0.6);
        sideLight.position.set(-5, 0, 5);
        scene.add(sideLight);

        const frontLight = new THREE.DirectionalLight(0xffffff, 0.8);
        frontLight.position.set(0, 0, 10);
        scene.add(frontLight);
    }

    // Clear any existing canvas (for client-side routing)
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    return { container, scene, camera, renderer };
}

// Helper: Create environment map for silver reflections
function createEnvironmentMap(renderer) {
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const envScene = new THREE.Scene();
    
    // Create soft white planes to act as studio reflections
    const lightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lightMaterial2 = new THREE.MeshBasicMaterial({ color: 0xe2e8f0 });
    const geometry = new THREE.PlaneGeometry(10, 10);
    
    const light1 = new THREE.Mesh(geometry, lightMaterial);
    light1.position.set(0, 10, -10);
    light1.lookAt(0, 0, 0);
    envScene.add(light1);
    
    const light2 = new THREE.Mesh(geometry, lightMaterial2);
    light2.position.set(-10, 5, 10);
    light2.lookAt(0, 0, 0);
    envScene.add(light2);
    
    const light3 = new THREE.Mesh(geometry, lightMaterial);
    light3.position.set(10, -5, 0);
    light3.lookAt(0, 0, 0);
    envScene.add(light3);

    return pmremGenerator.fromScene(envScene).texture;
}

// --- HERO SECTION ---
function initHero3D() {
    const setup = setupScene('hero-3d-container', true);
    if (!setup) return;
    const { container, scene, camera, renderer } = setup;

    const envMap = createEnvironmentMap(renderer);

    // Perfectly smooth silver material
    const material = new THREE.MeshStandardMaterial({
        color: 0xe0e5ec, // Bright pristine silver
        metalness: 0.9,
        roughness: 0.05, // Perfectly smooth
        envMap: envMap,
        envMapIntensity: 2.0
    });

    const cubes = [];
    const radius = 0.15;
    
    const cubePositions = [
        { x: 0, y: 0, z: 0, scale: 1.8 },
        { x: 2.0, y: 1.2, z: -1, scale: 1.2 },
        { x: -1.6, y: -1.2, z: 1, scale: 1.5 },
        { x: 1.0, y: 2.0, z: 1.5, scale: 1.0 },
        { x: -1.5, y: 1.5, z: -2, scale: 1.2 },
        { x: 1.6, y: -1.6, z: 0.5, scale: 1.3 },
        { x: -2.0, y: 0.6, z: 2, scale: 1.1 },
        { x: 0.4, y: -1.8, z: -1.5, scale: 1.4 },
        { x: -0.4, y: 0.4, z: 2.5, scale: 0.9 }
    ];

    const group = new THREE.Group();
    scene.add(group);

    cubePositions.forEach((pos) => {
        const geometry = createRoundedBoxGeometry(pos.scale, pos.scale, pos.scale, radius, 5);
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(pos.x, pos.y, pos.z);
        cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        
        cube.userData = {
            rotationSpeedX: (Math.random() - 0.5) * 0.015,
            rotationSpeedY: (Math.random() - 0.5) * 0.015,
            floatSpeed: 1 + Math.random() * 1.5,
            floatOffset: Math.random() * Math.PI * 2,
            originalY: pos.y,
            originalX: pos.x,
            isBubbling: false,
            bubbleTime: 0
        };
        cubes.push(cube);
        group.add(cube);
    });

    camera.position.z = 8;

    // Raycaster for bubbling effect
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;
    });

    function animate() {
        requestAnimationFrame(animate);
        const time = Date.now() * 0.001;

        // Check intersections
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(cubes);
        
        // Reset bubbling state
        cubes.forEach(c => c.userData.isBubbling = false);
        
        // Set bubbling for hovered
        if (intersects.length > 0) {
            intersects[0].object.userData.isBubbling = true;
        }

        cubes.forEach((cube) => {
            cube.rotation.x += cube.userData.rotationSpeedX;
            cube.rotation.y += cube.userData.rotationSpeedY;

            // Hover Bubbling Effect
            let targetScale = 1.0;
            if (cube.userData.isBubbling) {
                cube.userData.bubbleTime += 0.15;
                // Quick jitter/bubble effect using sin wave
                targetScale = 1.0 + Math.sin(cube.userData.bubbleTime) * 0.15;
            } else {
                cube.userData.bubbleTime = 0;
            }
            
            // Smoothly scale
            cube.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

            // Floating
            cube.position.y = cube.userData.originalY + Math.sin(time * cube.userData.floatSpeed + cube.userData.floatOffset) * 0.2;
            
            // Scroll parallax
            cube.position.y -= scrollY * 0.0001;
        });

        // Mouse parallax for entire group
        group.rotation.x += (mouseY * 0.1 - group.rotation.x) * 0.05;
        group.rotation.y += (mouseX * 0.1 - group.rotation.y) * 0.05;

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// Material for How it works - Soft, dark matte plastic
function getMatteMaterial() {
    return new THREE.MeshStandardMaterial({
        color: 0x333338, // Lighter dark gray so they are visible
        metalness: 0.2,
        roughness: 0.6,
    });
}

// --- HOW IT WORKS 1: Exact Cube with Circular Hole and Inner Sphere ---
function initHow3D_1() {
    const setup = setupScene('how-3d-1', false);
    if (!setup) return;
    const { container, scene, camera, renderer } = setup;

    const group = new THREE.Group();
    const material = getMatteMaterial();

    // Create a square plate with a hole using THREE.Shape
    const size = 2.0;
    const holeRadius = 0.6;
    const thickness = 0.3;

    const shape = new THREE.Shape();
    const half = size/2;
    const radius = 0.3; // Corner radius

    // Outer rounded square
    shape.moveTo(-half, -half + radius);
    shape.lineTo(-half, half - radius);
    shape.quadraticCurveTo(-half, half, -half + radius, half);
    shape.lineTo(half - radius, half);
    shape.quadraticCurveTo(half, half, half, half - radius);
    shape.lineTo(half, -half + radius);
    shape.quadraticCurveTo(half, -half, half - radius, -half);
    shape.lineTo(-half + radius, -half);
    shape.quadraticCurveTo(-half, -half, -half, -half + radius);

    // Inner circular hole
    const holePath = new THREE.Path();
    holePath.absarc(0, 0, holeRadius, 0, Math.PI * 2, false);
    shape.holes.push(holePath);

    const extrudeSettings = {
        depth: thickness,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 1,
        bevelSize: 0.05,
        bevelThickness: 0.05,
        curveSegments: 16
    };

    const plateGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    plateGeo.center();

    // Assemble 6 plates to form a hollow cube
    const offsets = [
        { rotX: 0, rotY: 0, posZ: half }, // Front
        { rotX: 0, rotY: Math.PI, posZ: -half }, // Back
        { rotX: Math.PI/2, rotY: 0, posY: half }, // Top
        { rotX: -Math.PI/2, rotY: 0, posY: -half }, // Bottom
        { rotX: 0, rotY: Math.PI/2, posX: half }, // Right
        { rotX: 0, rotY: -Math.PI/2, posX: -half }, // Left
    ];

    offsets.forEach(off => {
        const plate = new THREE.Mesh(plateGeo, material);
        if (off.rotX) plate.rotation.x = off.rotX;
        if (off.rotY) plate.rotation.y = off.rotY;
        if (off.posX) plate.position.x = off.posX;
        if (off.posY) plate.position.y = off.posY;
        if (off.posZ) plate.position.z = off.posZ;
        group.add(plate);
    });

    // Inner sphere
    const sphereMat = new THREE.MeshStandardMaterial({
        color: 0x111111, metalness: 0.6, roughness: 0.4
    });
    const sphereGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(sphere);

    scene.add(group);
    camera.position.z = 5.5;

    function animate() {
        requestAnimationFrame(animate);
        const time = Date.now() * 0.001;

        group.rotation.x += 0.005;
        group.rotation.y += 0.01;
        
        sphere.rotation.x -= 0.01;
        sphere.rotation.y -= 0.015;

        group.position.y = Math.sin(time * 2) * 0.15;
        group.rotation.x += mouseY * 0.01;
        group.rotation.y += mouseX * 0.01;

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// --- HOW IT WORKS 2: Panelled Icosahedron ---
function initHow3D_2() {
    const setup = setupScene('how-3d-2', false);
    if (!setup) return;
    const { container, scene, camera, renderer } = setup;

    const group = new THREE.Group();
    const material = getMatteMaterial();

    // Base geometry to get vertices and faces
    const baseGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const pos = baseGeo.attributes.position;
    
    // Create individual separated panels for each face
    for (let i = 0; i < pos.count; i += 3) {
        const vA = new THREE.Vector3().fromBufferAttribute(pos, i);
        const vB = new THREE.Vector3().fromBufferAttribute(pos, i+1);
        const vC = new THREE.Vector3().fromBufferAttribute(pos, i+2);

        const center = new THREE.Vector3().add(vA).add(vB).add(vC).divideScalar(3);
        
        // Scale down vertices towards the center to create gaps
        const gap = 0.90; // 90% size
        const nA = vA.clone().lerp(center, 1 - gap);
        const nB = vB.clone().lerp(center, 1 - gap);
        const nC = vC.clone().lerp(center, 1 - gap);

        const faceGeo = new THREE.BufferGeometry();
        const vertices = new Float32Array([
            nA.x, nA.y, nA.z,
            nB.x, nB.y, nB.z,
            nC.x, nC.y, nC.z
        ]);
        faceGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        faceGeo.computeVertexNormals();

        const faceMesh = new THREE.Mesh(faceGeo, material);
        faceMesh.material.side = THREE.DoubleSide;
        group.add(faceMesh);
        
        // Add a smaller dark face inside to simulate thickness
        const innerMesh = new THREE.Mesh(faceGeo, new THREE.MeshStandardMaterial({color: 0x050505}));
        innerMesh.scale.set(0.95, 0.95, 0.95);
        group.add(innerMesh);
    }

    // Add nodes at vertices
    const uniquePos = [];
    for (let i = 0; i < pos.count; i++) {
        const v = new THREE.Vector3().fromBufferAttribute(pos, i);
        if (!uniquePos.some(p => p.distanceTo(v) < 0.1)) uniquePos.push(v);
    }

    const nodeMat = new THREE.MeshStandardMaterial({ color: 0x555555, metalness: 0.9, roughness: 0.2 });
    const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
    
    // Also add small cylinder struts to connect nodes to center (simulating the inner structure)
    const strutGeo = new THREE.CylinderGeometry(0.02, 0.02, 1.4, 8);
    const strutMat = new THREE.MeshStandardMaterial({ color: 0x222222 });

    uniquePos.forEach(p => {
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        node.position.copy(p);
        group.add(node);
        
        const strut = new THREE.Mesh(strutGeo, strutMat);
        strut.position.copy(p).multiplyScalar(0.5);
        strut.lookAt(p);
        strut.rotateX(Math.PI/2);
        group.add(strut);
    });

    scene.add(group);
    camera.position.z = 5.5;

    function animate() {
        requestAnimationFrame(animate);
        const time = Date.now() * 0.001;

        group.rotation.x += 0.008;
        group.rotation.y += 0.012;

        group.position.y = Math.sin(time * 2 + 1) * 0.15;
        group.rotation.x += mouseY * 0.01;
        group.rotation.y += mouseX * 0.01;

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// --- HOW IT WORKS 3: Seamless Hollow Rounded Frame ---
function initHow3D_3() {
    const setup = setupScene('how-3d-3', false);
    if (!setup) return;
    const { container, scene, camera, renderer } = setup;

    const group = new THREE.Group();
    const material = getMatteMaterial();
    
    const size = 1.8;
    const thickness = 0.4;
    const half = size / 2;

    // Use a Path to sweep/extrude a perfect rounded frame
    function createFrame(rotX, rotY) {
        const path = new THREE.CurvePath();
        const r = 0.3; // corner radius
        
        path.add(new THREE.LineCurve3(new THREE.Vector3(-half+r, half, 0), new THREE.Vector3(half-r, half, 0)));
        path.add(new THREE.QuadraticBezierCurve3(new THREE.Vector3(half, half, 0), new THREE.Vector3(half, half, 0), new THREE.Vector3(half, half-r, 0))); // Simplified corner
        path.add(new THREE.LineCurve3(new THREE.Vector3(half, half-r, 0), new THREE.Vector3(half, -half+r, 0)));
        path.add(new THREE.QuadraticBezierCurve3(new THREE.Vector3(half, -half, 0), new THREE.Vector3(half, -half, 0), new THREE.Vector3(half-r, -half, 0)));
        path.add(new THREE.LineCurve3(new THREE.Vector3(half-r, -half, 0), new THREE.Vector3(-half+r, -half, 0)));
        path.add(new THREE.QuadraticBezierCurve3(new THREE.Vector3(-half, -half, 0), new THREE.Vector3(-half, -half, 0), new THREE.Vector3(-half, -half+r, 0)));
        path.add(new THREE.LineCurve3(new THREE.Vector3(-half, -half+r, 0), new THREE.Vector3(-half, half-r, 0)));
        path.add(new THREE.QuadraticBezierCurve3(new THREE.Vector3(-half, half, 0), new THREE.Vector3(-half, half, 0), new THREE.Vector3(-half+r, half, 0)));

        const tubeGeo = new THREE.TubeGeometry(path, 64, thickness, 16, true);
        const mesh = new THREE.Mesh(tubeGeo, material);
        if (rotX) mesh.rotation.x = rotX;
        if (rotY) mesh.rotation.y = rotY;
        return mesh;
    }

    // Three intersecting frames create the hollow cube
    group.add(createFrame(0, 0));
    group.add(createFrame(Math.PI/2, 0));
    group.add(createFrame(0, Math.PI/2));

    scene.add(group);
    camera.position.z = 5.5;

    function animate() {
        requestAnimationFrame(animate);
        const time = Date.now() * 0.001;

        group.rotation.x -= 0.008;
        group.rotation.y += 0.01;

        group.position.y = Math.sin(time * 2 + 2) * 0.15;
        group.rotation.x += mouseY * 0.01;
        group.rotation.y += mouseX * 0.01;

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// Code Tab Switching
function initCodeTabs() {
    const tabs = document.querySelectorAll('.code-tab');
    const codeBlock = document.getElementById('code-block');
    
    const codeSnippets = {
        go: `<span class="code-keyword">package</span> main

<span class="code-keyword">import</span> (
    <span class="code-string">"context"</span>
    <span class="code-string">"fmt"</span>
    <span class="code-string">"github.com/integrix/sdk-go"</span>
)

<span class="code-keyword">func</span> <span class="code-function">main</span>() {
    client := integrix.<span class="code-function">NewClient</span>(<span class="code-string">"your-api-key"</span>)
    
    ctx := context.<span class="code-function">Background</span>()
    result, err := client.<span class="code-function">Get</span>(ctx, <span class="code-string">"user-123"</span>)
    
    <span class="code-keyword">if</span> err != <span class="code-keyword">nil</span> {
        fmt.<span class="code-function">Println</span>(<span class="code-string">"Error:"</span>, err)
        <span class="code-keyword">return</span>
    }
    
    fmt.<span class="code-function">Println</span>(<span class="code-string">"User:"</span>, result.Name)
}`,
        python: `<span class="code-keyword">import</span> integrix

client = integrix.<span class="code-function">Client</span>(<span class="code-string">"your-api-key"</span>)

<span class="code-keyword">try</span>:
    result = client.<span class="code-function">get</span>(<span class="code-string">"user-123"</span>)
    <span class="code-function">print</span>(<span class="code-string">f"User: {result.name}"</span>)
<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:
    <span class="code-function">print</span>(<span class="code-string">f"Error: {e}"</span>)`,
        kotlin: `<span class="code-keyword">import</span> com.integrix.sdk.IntegrixClient

<span class="code-keyword">fun</span> <span class="code-function">main</span>() {
    <span class="code-keyword">val</span> client = IntegrixClient(<span class="code-string">"your-api-key"</span>)
    
    try {
        val result = client.<span class="code-function">get</span>(<span class="code-string">"user-123"</span>)
        <span class="code-function">println</span>(<span class="code-string">"User: \${result.name}"</span>)
    } <span class="code-keyword">catch</span> (e: Exception) {
        <span class="code-function">println</span>(<span class="code-string">"Error: \\$e"</span>)
    }
}`,
        swift: `<span class="code-keyword">import</span> IntegrixSDK

<span class="code-keyword">let</span> client = IntegrixClient(apiKey: <span class="code-string">"your-api-key"</span>)

<span class="code-keyword">do</span> {
    <span class="code-keyword">let</span> result = <span class="code-keyword">try</span> client.<span class="code-function">get</span>(<span class="code-string">"user-123"</span>)
    <span class="code-function">print</span>(<span class="code-string">"User: \\(result.name)"</span>)
} <span class="code-keyword">catch</span> {
    <span class="code-function">print</span>(<span class="code-string">"Error: \\(error)"</span>)
}`,
        php: `<span class="code-keyword">require_once</span> <span class="code-string">'vendor/autoload.php'</span>;

<span class="code-keyword">use</span> Integrix\\SDK\\Client;

$client = <span class="code-keyword">new</span> Client(<span class="code-string">"your-api-key"</span>);

<span class="code-keyword">try</span> {
    $result = $client-><span class="code-function">get</span>(<span class="code-string">"user-123"</span>);
    <span class="code-function">echo</span> <span class="code-string">"User: "</span> . $result->name;
} <span class="code-keyword">catch</span> (Exception $e) {
    <span class="code-function">echo</span> <span class="code-string">"Error: "</span> . $e->getMessage();
}`,
        java: `<span class="code-keyword">import</span> com.integrix.sdk.Client;

<span class="code-keyword">public class</span> Main {
    <span class="code-keyword">public static void</span> <span class="code-function">main</span>(String[] args) {
        Client client = <span class="code-keyword">new</span> Client(<span class="code-string">"your-api-key"</span>);
        
        <span class="code-keyword">try</span> {
            Result result = client.<span class="code-function">get</span>(<span class="code-string">"user-123"</span>);
            System.out.<span class="code-function">println</span>(<span class="code-string">"User: "</span> + result.getName());
        } <span class="code-keyword">catch</span> (Exception e) {
            System.out.<span class="code-function">println</span>(<span class="code-string">"Error: "</span> + e.getMessage());
        }
    }
}`,
        ruby: `<span class="code-keyword">require</span> <span class="code-string">'integrix'</span>

client = Integrix::<span class="code-function">Client</span>.<span class="code-keyword">new</span>(<span class="code-string">'your-api-key'</span>)

<span class="code-keyword">begin</span>
  result = client.<span class="code-function">get</span>(<span class="code-string">'user-123'</span>)
  <span class="code-function">puts</span> <span class="code-string">"User: #{result.name}"</span>
<span class="code-keyword">rescue</span> => e
  <span class="code-function">puts</span> <span class="code-string">"Error: #{e.message}"</span>
<span class="code-keyword">end</span>`,
        nodejs: `<span class="code-keyword">const</span> { IntegrixClient } = <span class="code-keyword">require</span>(<span class="code-string">'@integrix/sdk'</span>);

<span class="code-keyword">const</span> client = <span class="code-keyword">new</span> IntegrixClient(<span class="code-string">'your-api-key'</span>);

<span class="code-keyword">try</span> {
  <span class="code-keyword">const</span> result = <span class="code-keyword">await</span> client.<span class="code-function">get</span>(<span class="code-string">'user-123'</span>);
  console.<span class="code-log">log</span>(<span class="code-string">'User:'</span>, result.name);
} <span class="code-keyword">catch</span> (error) {
  console.<span class="code-error">error</span>(<span class="code-string">'Error:'</span>, error);
}`,
        net: `<span class="code-keyword">using</span> Integrix.SDK;

<span class="code-keyword">class</span> Program {
    <span class="code-keyword">static void</span> <span class="code-function">Main</span>() {
        <span class="code-keyword">var</span> client = <span class="code-keyword">new</span> IntegrixClient(<span class="code-string">"your-api-key"</span>);
        
        <span class="code-keyword">try</span> {
            <span class="code-keyword">var</span> result = client.<span class="code-function">Get</span>(<span class="code-string">"user-123"</span>);
            Console.<span class="code-function">WriteLine</span>(<span class="code-string">$"User: {result.Name}"</span>);
        } <span class="code-keyword">catch</span> (Exception e) {
            Console.<span class="code-function">WriteLine</span>(<span class="code-string">$"Error: {e.Message}"</span>);
        }
    }
}`
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const lang = tab.dataset.lang;
            codeBlock.innerHTML = codeSnippets[lang] || codeSnippets.go;
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .how-card, .testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

function initAll() {
    initHero3D();
    initHow3D_1();
    initHow3D_2();
    initHow3D_3();
    initCodeTabs();
    initSmoothScroll();
    initScrollAnimations();
}

// Expose for Next.js route changes
window.initAK3D = initAll;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    setTimeout(initAll, 100);
}
