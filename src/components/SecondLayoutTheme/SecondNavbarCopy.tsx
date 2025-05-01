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
        <nav className='bg-neutral text-white flex flex-col justify-between items-center'>
            <div className='p-4'>
                {/* <Dock height={25} width={25} /> */}
                <HomeSimple />
            </div>
            <div className='flex flex-col gap-20 justify-center text-xs sm:text-sm md:text-base'>
                {menuItems.map((item, index) => (
                    <div key={index} className='rotate-90 text-center'>
                        {item?.name}
                    </div>
                ))}
            </div>

            <div></div>
        </nav>
    );
}

export default SecondNavbar;
