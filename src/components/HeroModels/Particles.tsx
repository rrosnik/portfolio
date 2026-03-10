import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 200 }) => {
  const mesh = useRef<THREE.Mesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          // eslint-disable-next-line react-hooks/purity
          (Math.random() - 0.5) * 10,
          // eslint-disable-next-line react-hooks/purity
          Math.random() * 10 + 5, // higher starting point
          // eslint-disable-next-line react-hooks/purity
          (Math.random() - 0.5) * 10,
        ],
        // eslint-disable-next-line react-hooks/purity
        speed: 0.005 + Math.random() * 0.001,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (mesh.current) {
      const positions = mesh.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        let y = positions[i * 3 + 1];
        y -= particles[i].speed;
        if (y < -2) y = Math.random() * 10 + 5;
        positions[i * 3 + 1] = y;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const positions = new Float32Array(count * 3);
  particles.forEach((p, i) => {
    positions[i * 3] = p.position[0];
    positions[i * 3 + 1] = p.position[1];
    positions[i * 3 + 2] = p.position[2];
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          // @ts-expect-error: unknown error
          args={[]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
