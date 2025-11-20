import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Logo3DProps {
  className?: string;
}

export function Logo3D({ className = '' }: Logo3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const logoMeshRef = useRef<THREE.Mesh | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffd700, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00ffff, 0.5);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);

    // Load logo texture and create 3D object
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      '/al-doha-logo.png',
      (texture) => {
        // Create circular geometry for the logo
        const geometry = new THREE.CylinderGeometry(2, 2, 0.3, 64);
        
        // Create materials
        const materials = [
          // Side material (gold edge)
          new THREE.MeshStandardMaterial({
            color: 0xd4af37,
            metalness: 0.8,
            roughness: 0.2,
          }),
          // Top material (logo texture)
          new THREE.MeshStandardMaterial({
            map: texture,
            metalness: 0.3,
            roughness: 0.4,
          }),
          // Bottom material (logo texture)
          new THREE.MeshStandardMaterial({
            map: texture,
            metalness: 0.3,
            roughness: 0.4,
          }),
        ];

        const logoMesh = new THREE.Mesh(geometry, materials);
        logoMesh.rotation.x = Math.PI / 6; // Tilt slightly
        scene.add(logoMesh);
        logoMeshRef.current = logoMesh;

        // Add glow effect
        const glowGeometry = new THREE.CylinderGeometry(2.2, 2.2, 0.1, 64);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: 0xffd700,
          transparent: true,
          opacity: 0.2,
          side: THREE.DoubleSide,
        });
        const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
        logoMesh.add(glowMesh);
      },
      undefined,
      (error) => {
        console.error('Error loading logo texture:', error);
        // Fallback: create a simple gold disc
        const geometry = new THREE.CylinderGeometry(2, 2, 0.3, 64);
        const material = new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          metalness: 0.8,
          roughness: 0.2,
        });
        const logoMesh = new THREE.Mesh(geometry, material);
        logoMesh.rotation.x = Math.PI / 6;
        scene.add(logoMesh);
        logoMeshRef.current = logoMesh;
      }
    );

    // Add floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffd700,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Rotate logo
      if (logoMeshRef.current) {
        logoMeshRef.current.rotation.y += 0.005;
        logoMeshRef.current.rotation.z = Math.sin(Date.now() * 0.001) * 0.1;
      }

      // Rotate particles slowly
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
      
      if (logoMeshRef.current) {
        logoMeshRef.current.geometry.dispose();
        if (Array.isArray(logoMeshRef.current.material)) {
          logoMeshRef.current.material.forEach(mat => mat.dispose());
        } else {
          logoMeshRef.current.material.dispose();
        }
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full ${className}`}
      style={{ minHeight: '400px' }}
    />
  );
}
