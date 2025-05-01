"use client";

import { useMenuStore } from "@/zustand/menuStore";
import { HomeSimple } from "iconoir-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import ThemeController from './ThemeController';

function SecondNavbar() {
    const router = useRouter();
    const activeMenu = useMenuStore((state: any) => state.activeMenu);
    const setActiveMenu = useMenuStore((state: any) => state.setActiveMenu);

    const menuItems = [
        { name: "Projects", path: "/projects" },
        { name: "Experiences", path: "/experiences" },
        { name: "Contact", path: "/contact" }
    ];

    function handleActiveMenu(name: string, path: string) {
        router.push(path);
        setActiveMenu(name);
    }

    return (
        <nav className='flex justify-between items-center mx-4 md:mx-10 lg:mx-20 uppercase'>
            <div
                className='text-base md:text-xl font-semibold py-4 cursor-pointer'
                onClick={() => handleActiveMenu("Home", "/")}
            >
                Portfolio.io
            </div>

            <div className='flex gap-2 md:gap-10 justify-center text-xs sm:text-sm md:text-base font-medium md:font-semibold'>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className='text-center cursor-pointer'
                        onClick={() => handleActiveMenu(item?.name, item?.path)}
                    >
                        {item?.name}
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default SecondNavbar;
