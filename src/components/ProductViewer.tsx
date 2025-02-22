import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Card } from './ui/card'

function Box() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function ProductViewer() {
  return (
    <Card className="w-full h-[600px] relative overflow-hidden">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <OrbitControls />
      </Canvas>
      
      <div className="absolute bottom-4 left-4 right-4 text-center text-sm text-muted-foreground">
        Click and drag to rotate • Scroll to zoom
      </div>
    </Card>
  )
}