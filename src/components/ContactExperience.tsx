import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// @ts-expect-error: importing jsx in tsx
import { ComputerModel } from "./models/Computer-optimized.jsx";

const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} shadows>
      <ambientLight intensity={0.5} color="#fff4e6" />
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group scale={0.03} position={[0, -3, -4]} castShadow>
          <ComputerModel />
        </group>
      </Float>

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -3, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>
    </Canvas>
  );
};

export default ContactExperience;
