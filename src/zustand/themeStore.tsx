import { create } from 'zustand';

export const useThemeStore = create((set) => ({
    theme: 'dark',
    setTheme: (value: string) => set({ theme: value })
}));
