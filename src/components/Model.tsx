import { useGLTF } from '@react-three/drei'

export default function Model() {
  const { scene } = useGLTF('/shoe.glb')
  return <primitive object={scene} scale={1} />
}

useGLTF.preload('/shoe.glb')