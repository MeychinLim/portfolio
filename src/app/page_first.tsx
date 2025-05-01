"use client";

import ProjectCard from "@/components/FirstLayoutTheme/ProjectCard";
import SkillTemplate2 from "@/components/FirstLayoutTheme/SkillTemplate2";
import { ArrowRightCircle, Download } from "iconoir-react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div>
            <div className='flex flex-row justify-between gap-10 max-w-screen-xl mx-auto mb-10 md:mb-32'>
                <div className='xl:h-[45rem] w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-y-20 sm:mt-24 md:mt-32'>
                    <div className='lg:mx-10 space-y-14 animate-slideInLeft'>
                        <div>
                            <span className='w-full text-gray-400 text-3xl sm:text-5xl lg:text-7xl font-bold flex flex-row gap-6'>
                                Hello!
                            </span>
                            <div className='w-full lg:indent-16 text-xl md:text-3xl xl:text-4xl font-bold text-primary pt-4'>
                                I am Meychin Lim
                            </div>
                            <div className='w-full text-lg md:text-2xl font-bold pt-4'>
                                A Software Developer
                            </div>
                        </div>
                        <div className='animate-[bounce_1500ms_ease-in-out_infinite]'>
                            <a
                                // href='/cv.pdf'
                                className='btn btn-accent'
                                download
                            >
                                <Download />
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className='text-base lg:text-lg space-y-6 animate-slideInUp'>
                        <div className='indent-10'>
                            I am a quick learner, self-motivated, flexible, and
                            reliable software developer with more than 2 years
                            of experience writing, reviewing and fixing code
                            seeking for opportunities to challenges. Coming with
                            passionate, willing to learn new skills and the
                            ability to perform multiple projects and effectively
                            in working as a team or independently.
                        </div>
                        <div>
                            <button
                                className='btn btn-link text-accent btn-sm px-0 hover:translate-x-6 duration-500'
                                onClick={() => router.push("/contact")}
                            >
                                Contact Me
                                <ArrowRightCircle />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-5 md:gap-32 items-center justify-between mx-auto max-w-5xl'>
                <div className='grid grid-cols-1 gap-y-5 md:gap-y-10'>
                    <label className='flex text-3xl lg:text-5xl font-semibold justify-center w-full'>
                        Skills
                    </label>
                    <SkillTemplate2 />
                </div>

                <div className='grid grid-cols-1 gap-y-5 md:gap-y-10'>
                    <label className='flex text-3xl lg:text-5xl font-semibold justify-center w-full'>
                        Latest Project
                    </label>
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
}
