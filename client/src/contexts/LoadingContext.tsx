import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type LoadingStage = 
  | "initializing"
  | "authenticating"
  | "loading-content"
  | "rendering"
  | "complete";

interface LoadingContextType {
  isLoading: boolean;
  progress: number;
  stage: LoadingStage;
  setIsLoading: (loading: boolean) => void;
  setProgress: (progress: number) => void;
  setStage: (stage: LoadingStage) => void;
  advanceStage: () => void;
  reset: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<LoadingStage>("initializing");

  const stageOrder: LoadingStage[] = [
    "initializing",
    "authenticating",
    "loading-content",
    "rendering",
    "complete",
  ];

  const advanceStage = useCallback(() => {
    setStage((current) => {
      const currentIndex = stageOrder.indexOf(current);
      const nextIndex = Math.min(currentIndex + 1, stageOrder.length - 1);
      const nextStage = stageOrder[nextIndex];

      // Update progress based on stage
      const stageProgress = {
        initializing: 15,
        authenticating: 35,
        "loading-content": 65,
        rendering: 85,
        complete: 100,
      };

      setProgress(stageProgress[nextStage]);

      if (nextStage === "complete") {
        setTimeout(() => setIsLoading(false), 500);
      }

      return nextStage;
    });
  }, []);

  const reset = useCallback(() => {
    setIsLoading(true);
    setProgress(0);
    setStage("initializing");
  }, []);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        progress,
        stage,
        setIsLoading,
        setProgress,
        setStage,
        advanceStage,
        reset,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}
