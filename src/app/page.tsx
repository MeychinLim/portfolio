'use client';

import Skill from '@/components/Skill';
import { ArrowRightCircle, Globe } from 'iconoir-react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    return (
        <div>
            <div className='flex flex-row justify-between items-center gap-10 h-screen mx-20'>
                <div className='h-[50rem] w-full flex flex-row justify-between'>
                    <div className='flex flex-col w-1/2 gap-6 mx-20'>
                        <div>
                            <div className='text-gray-400 text-4xl'>I'm a</div>
                            <div className='text-6xl font-bold text-primary pt-4 hue-rotate-15 motion-safe:animate-pulse'>
                                Software Developer
                            </div>
                        </div>
                        <div>
                            <button
                                className='btn btn-neutral'
                                onClick={() => router.push('/contact')}
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        {/* <Globe className='text-9xl animate-spin-slow' /> */}
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-40 items-center justify-between max-w-5xl mx-auto'>
                <div className='grid grid-cols-1 gap-y-10'>
                    <label className='flex text-5xl font-semibold justify-center w-full'>
                        About
                    </label>
                    <p className='indent-20'>
                        A quick learner, self-motivated, flexible, and reliable
                        software developer with more than 2 years of experience
                        writing, reviewing and fixing code seeking for
                        opportunities to challenges. Coming with passionate,
                        willing to learn new skills and the ability to perform
                        multiple projects and effectively in working as a team
                        or independently.
                    </p>
                    <div className='text-end'>
                        <button
                            className='btn btn-primary btn-sm px-10'
                            onClick={() => router.push('/about')}
                        >
                            More
                            <ArrowRightCircle />
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-y-10'>
                    <label className='flex text-5xl font-semibold justify-center w-full'>
                        Skills
                    </label>
                    <Skill />
                </div>
                <div className='grid grid-cols-1 gap-y-10'>
                    <label className='flex text-5xl font-semibold justify-center w-full'>
                        Experiences
                    </label>
                    <p className='text-center'>
                        I'm currently working at Cambodia Securities Exchange as
                        a Software Developer
                    </p>
                    <div className='text-end'>
                        <button
                            className='btn btn-primary btn-sm px-10'
                            onClick={() => router.push('/experiences')}
                        >
                            More
                            <ArrowRightCircle />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
