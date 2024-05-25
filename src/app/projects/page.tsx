'use client';
import { useRouter } from 'next/navigation';

function Page() {
    const router = useRouter();

    const projects = [
        {
            id: 1,
            name: 'E-commerce Website',
            status: 'New',
            descriptions: 'Shopping online with our E-commerce website.',
            preImage: null,
            technologies: ['TypeScript', 'NextJS']
        },
        {
            id: 2,
            name: 'Countries List Fetching',
            status: 'New',
            descriptions: 'Fetching countries list from REST Countries API.',
            preImage: null,
            technologies: ['NuxtJS 3']
        },
        {
            id: 3,
            name: 'UPS for Coffee Shop',
            status: 'New',
            descriptions: 'App for order coffee and generate receipt from UPS.',
            preImage: null,
            technologies: ['NuxtJs 3', 'Laravel']
        }
    ];

    return (
        <div className='font-mono'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='bg-gradient-to-b from-transparent to-primary rounded-2xl p-0.5 shadow-md hover:shadow-xl hover:-translate-y-1 delay-150 duration-150'
                    >
                        <div
                            className='card bg-base-100 h-full'
                            onClick={() =>
                                router.push(`/projects/${project?.id}`)
                            }
                        >
                            <figure>
                                <img
                                    src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                                    alt='Shoes'
                                />
                            </figure>
                            <div className='card-body p-6 gap-4'>
                                <h2 className='card-title'>
                                    {project?.name}
                                    <div className='badge badge-primary text-xs'>
                                        {project?.status}
                                    </div>
                                </h2>
                                <p className='text-sm'>
                                    {project?.descriptions}
                                </p>
                                <div className='card-actions justify-end'>
                                    {project?.technologies.map(
                                        (technology, index) => (
                                            <div
                                                key={index}
                                                className='badge badge-outline'
                                            >
                                                {technology}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;
