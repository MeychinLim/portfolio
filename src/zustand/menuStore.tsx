import { create } from 'zustand';

export const useMenuStore = create((set) => ({
    activeMenu: 'home',
    setActiveMenu: (value: string) => set({ activeMenu: value })
}));
