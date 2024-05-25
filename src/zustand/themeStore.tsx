import { create } from 'zustand';

export const useThemeStore = create((set) => ({
    theme: 'winter',
    setTheme: (value: string) => set({ theme: value })
}));
