import { ThemeProvider } from "./components/theme-provider"
import ProductViewer from "./components/ProductViewer"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container mx-auto p-4">
        <ProductViewer />
      </div>
    </ThemeProvider>
  )
}

export default App