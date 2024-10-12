'use client';

import { ArrowRightCircle } from 'iconoir-react';
import { useRouter } from 'next/navigation';

function ProjectCard() {
    const router = useRouter();

    const project = {
        id: '1',
        name: 'E-commerce Website',
        status: 'New',
        descriptions:
            'Lorem ipsum dolor sit amet ipsum dolor et. Amet sit et hendrerit ut diam diam diam aliquyam nostrud vero amet exerci. Amet ut ea lorem ut. Kasd dolores ipsum eos. Enim wisi ea ut duis accusam consequat duo iriure nonumy gubergren dolore ad sed sed lorem sit. Veniam aliquyam duo aliquyam nulla sanctus stet rebum. Sadipscing labore sanctus eos eirmod nibh nonumy dolor consequat vel aliquyam voluptua nibh dignissim at dolor diam dolores gubergren.',
        preImage: null,
        companyName: 'APPA',
        rating: '',
        technologies: ['TypeScript', 'NextJS']
    };

    return (
        <div className='group grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 rounded-2xl'>
            <div className='group-hover:scale-105 transition-transform duration-700'>
                <img src={`/cover2.png`} className='rounded-2xl' />
            </div>
            <div className='flex flex-col justify-between space-y-4 py-2 px-4 md:py-6 md:px-0'>
                <div className='space-y-4 transition-transform duration-700 translate-x-0 group-hover:translate-x-6 '>
                    <strong className='text-warning'>{project?.name}</strong>
                    <div className='text-sm w-4/5'>
                        <small>
                            {project?.descriptions.substring(0, 100)} ...
                        </small>
                    </div>
                </div>
                <div className='transition-transform duration-700 translate-x-0 group-hover:translate-x-6'>
                    <button
                        className='btn btn-link btn-sm px-0 text-accent'
                        onClick={() => router.push(`/projects/${project?.id}`)}
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
