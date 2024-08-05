'use client';

import { useMenuStore } from '@/zustand/menuStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ThemeController from './ThemeController';

function Navbar() {
    const router = useRouter();
    const activeMenu = useMenuStore((state: any) => state.activeMenu);
    const setActiveMenu = useMenuStore((state: any) => state.setActiveMenu);

    const menuItem = [
        { name: 'Projects', path: '/projects' },
        { name: 'Experiences', path: '/experiences' },
        { name: 'Contact', path: '/contact' }
    ];

    function handleActiveMenu(name: string, path: string) {
        router.push(path);
        setActiveMenu(name);
    }

    return (
        <nav className='sticky top-0 w-full font-mono shadow-lg z-50 text-white'>
            <div className='navbar bg-neutral'>
                <div className='navbar-start'>
                    <Link
                        href='/'
                        className='text-xl p-4 hover:text-primary'
                        onClick={() => setActiveMenu('')}
                    >
                        Portfolio
                    </Link>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal px-1 gap-2'>
                        {menuItem.map((item, index) => (
                            <li key={index}>
                                <div
                                    className={`duration-500 py-2 px-4 rounded-lg ${activeMenu === item?.name ? 'bg-accent text-black hover:bg-accent' : 'hover:bg-accent/50'}`}
                                    onClick={() =>
                                        handleActiveMenu(item?.name, item?.path)
                                    }
                                >
                                    {item?.name}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='navbar-end'>
                    <ThemeController />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
