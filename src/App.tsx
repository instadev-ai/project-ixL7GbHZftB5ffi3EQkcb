import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "./components/theme-provider"
import { Toaster } from "./components/ui/sonner"
import ProductViewer from "./components/ProductViewer"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="container mx-auto p-4">
          <ProductViewer />
        </div>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App