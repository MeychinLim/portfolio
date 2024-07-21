'use client';

import ProjectCard from '@/components/ProjectCard';
import SkillTemplate2 from '@/components/SkillTemplate2';
import { ArrowRightCircle, Download, Globe } from 'iconoir-react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    return (
        <div>
            <div className='flex flex-row justify-between items-center gap-10 mx-20'>
                <div className='h-[50rem] w-full flex flex-row justify-between mt-32'>
                    <div className='flex flex-col w-1/2 gap-16 mx-20'>
                        <div>
                            <div className='text-gray-400 text-8xl font-bold'>
                                Hello!
                            </div>
                            <div className='indent-20 text-4xl font-bold text-primary pt-4 hue-rotate-15'>
                                I'm Meychin Lim
                            </div>
                            <div className='text-2xl font-bold pt-4 hue-rotate-15'>
                                A Software Developer
                            </div>
                        </div>
                        <div>
                            <button
                                className='btn btn-accent'
                                onClick={() => router.push('/contact')}
                            >
                                <Download />
                                Download CV
                            </button>
                        </div>
                    </div>

                    <div className='w-1/2 text-lg space-y-6'>
                        <div className='w-[30rem] indent-10'>
                            I'm a quick learner, self-motivated, flexible, and
                            reliable software developer with more than 2 years
                            of experience writing, reviewing and fixing code
                            seeking for opportunities to challenges. Coming with
                            passionate, willing to learn new skills and the
                            ability to perform multiple projects and effectively
                            in working as a team or independently.
                        </div>
                        <div>
                            <button
                                className='btn btn-link text-accent btn-sm px-0'
                                onClick={() => router.push('/contact')}
                            >
                                Contact Me
                                <ArrowRightCircle />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-40 items-center justify-between mx-auto max-w-5xl'>
                <div className='grid grid-cols-1 gap-y-10'>
                    <label className='flex text-5xl font-semibold justify-center w-full'>
                        Skills
                    </label>
                    <SkillTemplate2 />
                </div>

                <div className='grid grid-cols-1 gap-y-10'>
                    <label className='flex text-5xl font-semibold justify-center w-full'>
                        Latest Project
                    </label>
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
}
