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

    // Set fixed size as requested
    renderer.setSize(900, 500);
    camera.aspect = 900 / 500;
    camera.updateProjectionMatrix();

    const envMap = createEnvironmentMap(renderer);

    // Perfectly smooth silver material
    const material = new THREE.MeshStandardMaterial({
        color: 0xe0e5ec, // Bright pristine silver
        metalness: 0.9,
        roughness: 0.05, // Perfectly smooth
        envMap: envMap,
        envMapIntensity: 2.0
    });

    const group = new THREE.Group();
    scene.add(group);

    const rings = [];
    // Create 4 nested rings
    const ringConfigs = [
        { radius: 1.5, tube: 0.08, speedX: 0.01, speedY: 0.015, speedZ: 0.005 },
        { radius: 2.2, tube: 0.06, speedX: -0.012, speedY: 0.01, speedZ: -0.008 },
        { radius: 2.9, tube: 0.04, speedX: 0.008, speedY: -0.018, speedZ: 0.01 },
        { radius: 3.5, tube: 0.02, speedX: -0.015, speedY: -0.005, speedZ: -0.012 }
    ];

    ringConfigs.forEach((config) => {
        const geometry = new THREE.TorusGeometry(config.radius, config.tube, 32, 100);
        const ring = new THREE.Mesh(geometry, material);
        
        // Random initial rotations
        ring.rotation.x = Math.random() * Math.PI;
        ring.rotation.y = Math.random() * Math.PI;
        ring.rotation.z = Math.random() * Math.PI;
        
        ring.userData = {
            speedX: config.speedX,
            speedY: config.speedY,
            speedZ: config.speedZ,
            targetScale: 1.0
        };
        
        rings.push(ring);
        group.add(ring);
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

        // Expand rings slightly on hover
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(rings);
        
        rings.forEach((ring) => {
            ring.userData.targetScale = 1.0;
        });

        if (intersects.length > 0) {
            // If any ring is hovered, expand all slightly
            rings.forEach((ring) => {
                ring.userData.targetScale = 1.05;
            });
        }

        rings.forEach((ring) => {
            ring.rotation.x += ring.userData.speedX;
            ring.rotation.y += ring.userData.speedY;
            ring.rotation.z += ring.userData.speedZ;
            
            // Smoothly scale
            ring.scale.lerp(
                new THREE.Vector3(ring.userData.targetScale, ring.userData.targetScale, ring.userData.targetScale), 
                0.05
            );
        });
        
        // Entire group floating and scroll parallax
        group.position.y = Math.sin(time * 0.5) * 0.3 - scrollY * 0.001;

        // Mouse parallax for entire group
        group.rotation.x += (mouseY * 0.1 - group.rotation.x) * 0.05;
        group.rotation.y += (mouseX * 0.1 - group.rotation.y) * 0.05;

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = 900 / 500;
        camera.updateProjectionMatrix();
        renderer.setSize(900, 500);
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
