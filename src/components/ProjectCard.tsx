'use client';

import { ArrowRightCircle } from 'iconoir-react';
import { useRouter } from 'next/navigation';

function ProjectCard() {
    const router = useRouter();

    return (
        <div className='group grid grid-cols-2 gap-10 rounded-2xl'>
            <div className='group-hover:scale-105 transition-transform duration-700'>
                <img src={`/cover2.png`} className='rounded-2xl' />
            </div>
            <div className='flex flex-col justify-between space-y-4 py-6'>
                <div className='space-y-4 transition-transform duration-700 translate-x-0 group-hover:translate-x-6 '>
                    <strong className='text-warning'>Title World</strong>
                    <p className='text-3xl'>Subtitle Hello World</p>
                    <small className='text-sm'>
                        Lorem ipsum dolor sit amet Diam volutpat eos. Eos dolor
                        diam justo. Duo accusam ipsum vulputate illum gubergren
                        invidunt.
                    </small>
                </div>
                <div className='transition-transform duration-700 translate-x-0 group-hover:translate-x-6'>
                    <button
                        className='btn btn-link btn-sm px-0 text-accent'
                        onClick={() => router.push('/experiences')}
                    >
                        Detail
                        <ArrowRightCircle />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
