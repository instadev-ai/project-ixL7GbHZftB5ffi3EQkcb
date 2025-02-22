import Scene from '../components/Scene'

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">3D Viewer</h1>
      <Scene />
    </div>
  )
}