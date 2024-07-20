'use client';
import { CheckCircleSolid } from 'iconoir-react';

function Page() {
    const experiences = [
        {
            title: 'Software Developer',
            company: 'Cambodia Securities Exchange',
            duration: 'September 2023 - Present',
            skills: [
                'ReactJs',
                'NextJs',
                'SpringBoot',
                'Java',
                'Flutter',
                'TypeScript'
            ],
            responsibilities: [
                'Implement new feature base on client requirement.',
                'Create responsive UI using ReactJs & PrimeReact.',
                'Develop both mobile application and web application.',
                'Learn new skills like Flutter, Java Spring Boot, ReactJs and TypeScript.',
                'Review merge request assigned by Team Leader.',
                'Testing and debugging.',
                'Do research and update project document.'
            ]
        },
        {
            title: 'Junior Web Developer',
            company: 'Asia Pacific Property Appraisal',
            duration: 'March 2022 - September 2023',
            skills: ['VueJs', 'NuxtJs', 'Tailwind', 'PHP', 'Laravel'],
            responsibilities: [
                'Develop feature base on task assigned by Supervisor.',
                'Create responsive UI using NuxtJs & Tailwind.',
                'Learn best practice from Senior Developers.',
                'Learn new skills like Phython and ReactJs taught by Seniors.',
                'Testing and debugging.',
                'Review merge request assigned by Team Leader.',
                'Do research and update document assigned by Team Leader.'
            ]
        },
        {
            title: 'Assistant General Manager & Operation',
            company: 'Tatsumi Shokai Cambodia',
            duration: 'May 2021 - March 2022',
            skills: ['Team Work', 'Management'],
            responsibilities: [
                'Prepare daily, weekly and monthly reports for manager.',
                'Collect payment from delivery team.',
                'Control delivery operation and make sure it goes smoothly.',
                'Do other tasks assigned by management and support operation team.'
            ]
        },
        {
            title: 'Administrator',
            company: 'Tatsumi Shokai Cambodia',
            duration: 'June 2020 - May 2021',
            skills: ['Communication'],
            responsibilities: [
                'Control daily purchase requests.',
                'Control monthly stock.',
                'Control all the staff information.',
                'Write documents such as resigned letter, job offer,etc.',
                'Support operation team when the team needed.'
            ]
        }
    ];

    return (
        <div className='container mx-auto'>
            <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
                {experiences.map((experience, index) => (
                    <li key={index}>
                        <div className='timeline-middle'>
                            <CheckCircleSolid className='h-5 w-5' />
                        </div>
                        <time className=' italic text-lg md:text-xl mt-7 px-2 text-end w-full hidden md:block'>
                            {experience?.duration}
                        </time>
                        <div className='timeline-end mb-10'>
                            <time className=' italic text-lg md:text-xl block md:hidden'>
                                {experience?.duration}
                            </time>
                            <div className='text-lg md:text-xl italic'>
                                {experience?.company}
                            </div>
                            <div className='text-base md:text-lg font-black'>
                                {experience?.title}
                            </div>
                            <div className='text-sm md:text-base pt-4'>
                                <ul className='list-disc pl-12'>
                                    {experience?.responsibilities.map(
                                        (responsibility, index) => (
                                            <li key={index}>
                                                {responsibility}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className='flex flex-wrap gap-2 pt-4'>
                                {experience?.skills.map((skill, index) => (
                                    <span
                                        className='text-xs px-3 py-1 bg-warning rounded-xl text-gray-800'
                                        key={index}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Page;
