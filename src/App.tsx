import { Suspense } from "react"
import { ThemeProvider } from "./components/theme-provider"
import Scene from "./components/Scene"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container mx-auto p-4">
          <Scene />
        </div>
      </Suspense>
    </ThemeProvider>
  )
}

export default App