"use client";
import ProjectCard from "@/components/ProjectCard";
import SkillTemplate2 from "@/components/SkillTemplate2";
import {
    ArrowRightCircle,
    Download,
    GithubCircle,
    Linkedin,
    Telegram
} from "iconoir-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div className='flex-1 grid grid-cols-1 lg:grid-cols-2 m-4 md:m-0'>
            <div className='flex flex-col justify-between md:ml-10 lg:ml-20 h-96 md:h-full'>
                <div className='text-xl uppercase font-semibold py-4'>
                    Portfolio.io
                </div>

                <div className='flex flex-col'>
                    <div className='text-2xl uppercase font-semibold'>
                        Hello
                    </div>
                    <div className='w-full text-5xl md:text-7xl xl:text-9xl font-bold text-primary my-4'>
                        I'm Meychin
                    </div>
                    <div className='text-2xl font-semibold'>
                        A Software Developer
                    </div>
                    <div className='my-4'>
                        <button
                            className='btn btn-link text-accent btn-sm px-0 hover:translate-x-6 duration-500 uppercase'
                            onClick={() => router.push("/contact")}
                        >
                            Contact Me
                            <ArrowRightCircle />
                        </button>
                    </div>
                </div>

                <div className='flex flex-row gap-10'>
                    <a href='https://t.me/meychinlim' target='_blank'>
                        <Telegram className='w-10 h-10 hover:text-accent hover:scale-125 transition-transform duration-500 block' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/meychin-lim-b9a81125b/'
                        target='_blank'
                    >
                        <Linkedin className='w-10 h-10 hover:text-accent hover:scale-125 transition-transform duration-500 block' />
                    </a>
                    <a href='https://github.com/meychinlim' target='_blank'>
                        <GithubCircle className='w-10 h-10 hover:text-accent hover:scale-125 transition-transform duration-500 block' />
                    </a>
                </div>
            </div>

            <div>
                <Image
                    src='/portfolio_cover.png'
                    alt='portfolio_cover'
                    height={50}
                    width={750}
                />

                <div className='text-base lg:text-lg space-y-6 animate-slideInUp md:mx-10 lg:mx-20'>
                    <div className='indent-10'>
                        I am a quick learner, self-motivated, flexible, and
                        reliable software developer with more than 2 years of
                        experience writing, reviewing and fixing code seeking
                        for opportunities to challenges. Coming with passionate,
                        willing to learn new skills and the ability to perform
                        multiple projects and effectively in working as a team
                        or independently.
                    </div>
                    <div>
                        <button
                            className='btn btn-link text-accent btn-sm px-0 hover:translate-x-6 duration-500 uppercase'
                            onClick={() => router.push("/contact")}
                        >
                            View Resume
                            {/* <ArrowRightCircle /> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
