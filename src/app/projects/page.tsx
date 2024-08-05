'use client';

import { useRouter } from 'next/navigation';

function Page() {
    const router = useRouter();

    const projects = [
        {
            id: '1',
            name: 'E-commerce Website',
            status: 'New',
            descriptions: 'Shopping online with our E-commerce website.',
            preImage: null,
            technologies: ['TypeScript', 'NextJS']
        },
        {
            id: '2',
            name: 'Countries List Fetching',
            status: 'New',
            descriptions: 'Fetching countries list from REST Countries API.',
            preImage: null,
            technologies: ['NuxtJS 3']
        },
        {
            id: '3',
            name: 'UPS for Coffee Shop',
            status: 'New',
            descriptions: 'App for order coffee and generate receipt from UPS.',
            preImage: null,
            technologies: ['NuxtJs 3', 'Laravel']
        }
    ];

    return (
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-slideInUp'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='bg-gradient-to-b from-transparent to-accent rounded-2xl p-0.5 shadow-md group hover:shadow-xl hover:scale-105 duration-500'
                    >
                        <div
                            className='card bg-base-100 h-full rounded-2xl group-hover:cursor-pointer'
                            onClick={() =>
                                router.push(`/projects/${project?.id}`)
                            }
                        >
                            <figure>
                                <img src='/cover2.png' alt='Shoes' />
                            </figure>
                            <div className='card-body p-6 gap-4'>
                                <h2 className='card-title'>
                                    <div className='group-hover:text-accent duration-500 whitespace-nowrap w-4/5 truncate'>
                                        {project?.name}
                                    </div>
                                    <div className='badge badge-primary text-xs group-hover:animate-wiggle'>
                                        {project?.status}
                                    </div>
                                </h2>
                                <p className='text-sm'>
                                    {project?.descriptions}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;
