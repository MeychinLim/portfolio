import { create } from 'zustand';

export const useThemeStore = create((set) => ({
    theme: 'dim',
    setTheme: (value: string) => set({ theme: value })
}));
