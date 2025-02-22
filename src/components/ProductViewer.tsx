import { Canvas } from '@react-three/fiber'
import { Card } from './ui/card'

function Scene() {
  return (
    <mesh>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

export default function ProductViewer() {
  return (
    <Card className="w-full h-[600px] relative overflow-hidden">
      <Canvas>
        <Scene />
      </Canvas>
    </Card>
  )
}