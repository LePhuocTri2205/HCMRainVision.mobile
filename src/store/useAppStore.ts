import { create } from "zustand";

type Theme = "light" | "dark";

interface AppState {
  isReady: boolean;
  theme: Theme;
  setIsReady: (isReady: boolean) => void;
  setTheme: (theme: Theme) => void;
}

const useAppStore = create<AppState>((set) => ({
  // Basic state: khoi tao trang thai dau tien cho global store Day 5
  isReady: false,
  theme: "light",

  setIsReady: (isReady) => set({ isReady }),
  setTheme: (theme) => set({ theme }),
}));

export default useAppStore;
