import { useState } from 'react';

function SkillTemplate2() {
    const skills = [
        // { name: 'HTML', logo: 'html.png' },
        // { name: 'CSS', logo: 'css.png' },
        { name: 'Javascript', logo: 'javascript.png' },
        { name: 'TypeScript', logo: 'typescript.png' },
        { name: 'VueJs', logo: 'vuejs.png' },
        // { name: 'NuxtJs', logo: 'nuxtjs.png' },
        { name: 'ReactJs', logo: 'reactjs.png' },
        // { name: 'NextJs', logo: 'nextjs.png' },
        { name: 'Laravel', logo: 'laravel.png' },
        { name: 'SpringBoot', logo: 'spring-boot.png' },
        { name: 'Flutter', logo: 'flutter.png' }
        // { name: 'Tailwind', logo: 'tailwind.png' },
        // { name: 'MySQL', logo: 'mysql.png' },
        // { name: 'PostgresSQL', logo: 'postgressql.png' },
        // { name: 'Git', logo: 'git.png' }
    ];

    const [marqueeTransition, setMarqueeTransition] =
        useState<string>('animate-marquee');
    const [marquee2Transition, setMarquee2Transition] =
        useState<string>('animate-marquee2');

    function clearMarquee() {
        setMarqueeTransition('');
    }

    return (
        <div className='group relative flex overflow-x-hidden text-white'>
            <div
                className={`py-12 whitespace-nowrap flex flex-row ${marqueeTransition} group-hover:pause-animation`}
            >
                {skills.map((skill, index) => (
                    <img
                        src={`/img/${skill?.logo}`}
                        alt={skill?.name}
                        key={index}
                        className='text-4xl mx-10 h-16'
                    />
                ))}
            </div>

            <div
                className={`absolute top-0 py-12 whitespace-nowrap flex flex-row ${marquee2Transition} group-hover:pause-animation`}
            >
                {skills.map((skill, index) => (
                    <img
                        src={`/img/${skill?.logo}`}
                        alt={skill?.name}
                        key={index}
                        className='text-4xl mx-10 h-16'
                    />
                ))}
            </div>
        </div>
    );
}

export default SkillTemplate2;
