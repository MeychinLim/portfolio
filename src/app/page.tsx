"use client";

import Introduction from "@/components/SecondLayoutTheme/Introduction";
import Project from "@/components/SecondLayoutTheme/Project";

export default function Home() {
    return (
        <div className='h-full mx-4 md:mx-10 lg:mx-20'>
            <Introduction />
            <Project />
        </div>
    );
}
