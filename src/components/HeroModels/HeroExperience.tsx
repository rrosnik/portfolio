import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
// @ts-expect-error: import jsx
import { RoomModel } from "./RoomModel";
import HeroLight from "./HeroLight";
import Particles from "./Particles";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 764px)" });
  return (
    <Canvas camera={{ position: [0, 10, 10], fov: 45 }}>
      <HeroLight />
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2}
        maxAzimuthAngle={Math.PI / 4}
        minAzimuthAngle={-Math.PI / 4}
      />
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <RoomModel />
      </group>
      {/* <GizmoViewport scale={0.6} position={[0, 0, 0]} /> */}
      <Particles count={500} />
    </Canvas>
  );
};

export default HeroExperience;
