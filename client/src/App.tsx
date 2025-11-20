import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ProactiveLoadingScreen } from "./components/ProactiveLoadingScreen";
import Home from "./pages/Home";
import { useAuth } from "./_core/hooks/useAuth";
import { useLoading } from "./contexts/LoadingContext";
import { useEffect } from "react";

function Router() {
  const { loading } = useAuth();
  const { setStage, advanceStage } = useLoading();
  
  useEffect(() => {
    if (loading) {
      setStage("initializing");
      const timers = [
        setTimeout(() => advanceStage(), 300),
        setTimeout(() => advanceStage(), 800),
        setTimeout(() => advanceStage(), 1500),
        setTimeout(() => advanceStage(), 2200),
        setTimeout(() => advanceStage(), 2800),
      ];
      return () => timers.forEach(t => clearTimeout(t));
    }
  }, [loading, setStage, advanceStage]);
  
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <ProactiveLoadingScreen />
      <Switch>
        <Route path={"\\"} component={Home} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
