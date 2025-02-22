import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

function Box() {
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function Scene() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 45 }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Box />
        </Canvas>
      </Suspense>
    </div>
  )
}