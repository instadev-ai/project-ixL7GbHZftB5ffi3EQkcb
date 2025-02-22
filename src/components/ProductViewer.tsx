import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import Model from './Model'
import { Card } from './ui/card'

export default function ProductViewer() {
  return (
    <Card className="w-full h-[600px] relative overflow-hidden">
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>
      
      <div className="absolute bottom-4 left-4 right-4 text-center text-sm text-muted-foreground">
        Click and drag to rotate • Scroll to zoom
      </div>
    </Card>
  )
}