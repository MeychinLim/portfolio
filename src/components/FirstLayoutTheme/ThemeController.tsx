'use client';
import { useThemeStore } from '@/zustand/themeStore';
import { HalfMoon, SunLight } from 'iconoir-react';

function ThemeController() {
    const theme = useThemeStore((state: any) => state.theme);
    const setTheme = useThemeStore((state: any) => state.setTheme);

    return (
        <label className='swap swap-rotate px-4'>
            {theme === 'dim' ? (
                <div onClick={(e) => setTheme('nord')}>
                    <SunLight />
                </div>
            ) : (
                <div onClick={(e) => setTheme('dim')}>
                    <HalfMoon />
                </div>
            )}
        </label>
    );
}

export default ThemeController;
