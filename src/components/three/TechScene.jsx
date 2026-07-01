import { useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Torus, Box, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

// -- Palette (saturated so it reads on a light background) -------------------
const CYAN = '#0891b2';
const VIOLET = '#7c3aed';
const BLUE = '#2563eb';
const GREEN = '#059669';
const PINK = '#db2777';

// -- Floating particle field -------------------------------------------------
function Particles({ count = 520 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 26;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x += delta * 0.005;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={VIOLET}
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// -- Standard material tuned for a light background --------------------------
function techMaterial(color, { wireframe = true, emissive = 0.18 } = {}) {
  return (
    <meshStandardMaterial
      color={color}
      emissive={color}
      emissiveIntensity={emissive}
      metalness={0.35}
      roughness={0.35}
      wireframe={wireframe}
      transparent
      opacity={0.92}
    />
  );
}

function TechShape({ children, position, speed = 1, floatIntensity = 1.4 }) {
  return (
    <Float speed={speed} rotationIntensity={1.1} floatIntensity={floatIntensity}>
      <group position={position}>{children}</group>
    </Float>
  );
}

// -- Docker-inspired stacked containers --------------------------------------
function ContainerStack({ position }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.4;
  });
  return (
    <TechShape position={position} speed={1.2}>
      <group ref={ref}>
        {[
          [-0.5, 0.35, 0],
          [0.5, 0.35, 0],
          [-0.5, -0.35, 0],
          [0.5, -0.35, 0],
          [0, 1, 0],
        ].map((p, i) => (
          <Box key={i} args={[0.85, 0.6, 0.85]} position={p}>
            {techMaterial(BLUE)}
          </Box>
        ))}
      </group>
    </TechShape>
  );
}

// -- Database cylinder (MongoDB vibe) ----------------------------------------
function DatabaseStack({ position }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.5;
  });
  return (
    <TechShape position={position} speed={1}>
      <group ref={ref}>
        {[0.7, 0, -0.7].map((y, i) => (
          <mesh key={i} position={[0, y, 0]}>
            <cylinderGeometry args={[0.7, 0.7, 0.5, 32, 1, true]} />
            <meshStandardMaterial
              color={GREEN}
              emissive={GREEN}
              emissiveIntensity={0.2}
              metalness={0.35}
              roughness={0.35}
              side={THREE.DoubleSide}
              wireframe
              transparent
              opacity={0.92}
            />
          </mesh>
        ))}
      </group>
    </TechShape>
  );
}

// -- React-atom orbiting rings -----------------------------------------------
function ReactAtom({ position }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.6;
  });
  return (
    <TechShape position={position} speed={1.4} floatIntensity={1.8}>
      <group ref={ref}>
        <mesh>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={0.5} />
        </mesh>
        {[0, 60, 120].map((deg, i) => (
          <Torus
            key={i}
            args={[0.95, 0.035, 16, 80]}
            rotation={[Math.PI / 2, (deg * Math.PI) / 180, 0]}
          >
            <meshStandardMaterial
              color={CYAN}
              emissive={CYAN}
              emissiveIntensity={0.25}
              metalness={0.4}
              roughness={0.3}
            />
          </Torus>
        ))}
      </group>
    </TechShape>
  );
}

// -- Mouse-reactive rig ------------------------------------------------------
function Rig({ children }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const { x, y } = state.pointer;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, x * 0.28, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -y * 0.2, 0.05);
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, x * 0.6, 0.05);
  });
  return <group ref={ref}>{children}</group>;
}

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <pointLight position={[10, 10, 10]} intensity={90} color={VIOLET} />
      <pointLight position={[-10, -6, -4]} intensity={70} color={CYAN} />
      <pointLight position={[0, 8, -8]} intensity={45} color={PINK} />

      <Particles count={480} />

      <Rig>
        <ReactAtom position={[-4.2, 1.4, -1]} />
        <ContainerStack position={[4.4, -0.6, -2]} />
        <DatabaseStack position={[3.1, 1.9, -3]} />

        <TechShape position={[-3.6, -1.8, -1]} speed={1.6}>
          <Icosahedron args={[0.8, 0]}>{techMaterial(VIOLET)}</Icosahedron>
        </TechShape>

        <TechShape position={[0.4, 2.4, -4]} speed={1.1}>
          <Octahedron args={[0.7, 0]}>{techMaterial(PINK)}</Octahedron>
        </TechShape>

        <TechShape position={[1.6, -2.2, -1]} speed={1.3}>
          <Torus args={[0.6, 0.18, 20, 60]}>{techMaterial(BLUE, { wireframe: false, emissive: 0.12 })}</Torus>
        </TechShape>
      </Rig>
    </>
  );
}

export default function TechScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 9], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <SceneContents />
      </Suspense>
    </Canvas>
  );
}
