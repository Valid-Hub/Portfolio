import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import styles from '../../styles/Components/Canvas/stars.module.css';
import type { Points as ThreePoints } from 'three';

interface StarsProps {
    [key: string]: any;
}

const Stars = (props: StarsProps) => {
    const ref = useRef<ThreePoints>(null!);

    const [sphere] = useState<Float32Array>(() => random.inSphere(new Float32Array(5000), { radius: 1.3 }) as Float32Array);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial transparent color="#f272c8" size={0.003} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    );
};

const StarsCanvas = () => {
    return (
        <div className={styles.container}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
