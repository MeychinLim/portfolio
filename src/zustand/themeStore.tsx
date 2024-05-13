import { create } from 'zustand';

export const useThemeStore = create((set) => ({
    theme: 'nord',
    setTheme: (value: string) => set({ theme: value })
}));
