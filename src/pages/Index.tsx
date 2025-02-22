const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">3D Product Viewer</h1>
          <p className="text-xl text-muted-foreground">
            Interactive 3D product visualization
          </p>
        </div>
        
        {/* We'll dynamically import the ProductViewer to avoid SSR issues */}
        <div className="w-full aspect-square md:aspect-[4/3]">
          <ProductViewer />
        </div>
      </div>
    </div>
  )
}

export default Index