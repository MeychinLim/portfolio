'use client';

import ExperienceTimeLineTemplate from '@/components/Project/ExperienceTimeLineTemplate';

function Page() {
    const experiences = [
        {
            title: 'Software Developer',
            company: 'Cambodia Securities Exchange',
            duration: 'September 2023 - Present',
            titleTimeline: 'timeline-start',
            detailTimeLine: 'timeline-end',
            skills: [
                'TypeScript',
                'ReactJs',
                'NextJs',
                'SpringBoot',
                // 'Java',
                'Flutter'
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
            titleTimeline: 'timeline-end',
            detailTimeLine: 'timeline-end md:timeline-start md:text-end',
            skills: [
                // 'VueJs',
                'NuxtJs',
                'Laravel',
                'Tailwind'
                //  'PHP',
            ],
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
            titleTimeline: 'timeline-start',
            detailTimeLine: 'timeline-end',
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
            titleTimeline: 'timeline-end',
            detailTimeLine: 'timeline-end md:timeline-start md:text-end',
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

    return <ExperienceTimeLineTemplate experiences={experiences} />;
}

export default Page;
