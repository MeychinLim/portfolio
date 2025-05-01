import Image from "next/image";
import { useState } from "react";

function SkillTemplate2() {
    const skills = [
        // { name: 'HTML', logo: 'html.png' },
        // { name: 'CSS', logo: 'css.png' },
        { name: "Javascript", logo: "javascript.png" },
        { name: "TypeScript", logo: "typescript.png" },
        { name: "VueJs", logo: "vuejs.png" },
        { name: "NuxtJs", logo: "nuxtjs.png" },
        { name: "ReactJs", logo: "reactjs.png" },
        { name: "NextJs", logo: "nextjs.png" }
        // { name: 'Laravel', logo: 'laravel.png' },
        // { name: 'SpringBoot', logo: 'spring-boot.png' }
        // { name: 'Flutter', logo: 'flutter.png' }
        // { name: 'Tailwind', logo: 'tailwind.png' },
        // { name: 'MySQL', logo: 'mysql.png' },
        // { name: 'PostgresSQL', logo: 'postgressql.png' },
        // { name: 'Git', logo: 'git.png' }
    ];

    const skills2 = [
        // { name: 'HTML', logo: 'html.png' },
        // { name: 'CSS', logo: 'css.png' },
        // { name: 'Javascript', logo: 'javascript.png' },
        // { name: 'TypeScript', logo: 'typescript.png' },
        // { name: 'VueJs', logo: 'vuejs.png' },
        // { name: 'NuxtJs', logo: 'nuxtjs.png' },
        // { name: 'ReactJs', logo: 'reactjs.png' },
        // { name: 'NextJs', logo: 'nextjs.png' },
        { name: "Laravel", logo: "laravel.png" },
        { name: "SpringBoot", logo: "spring-boot.png" },
        { name: "Flutter", logo: "flutter.png" },
        { name: "Tailwind", logo: "tailwind.png" },
        { name: "MySQL", logo: "mysql.png" },
        { name: "PostgresSQL", logo: "postgressql.png" }
        // { name: 'Git', logo: 'git.png' }
    ];

    return (
        <div className='group relative flex overflow-x-hidden text-white'>
            <div
                className={`py-12 whitespace-nowrap flex flex-row animate-marquee group-hover:pause-animation`}
            >
                {skills.map((skill, index) => (
                    <Image
                        src={`/img/${skill?.logo}`}
                        alt={skill?.name}
                        key={index}
                        width={75}
                        height={100}
                        className='mx-2 lg:mx-10 h-10 lg:h-16'
                    />
                ))}
            </div>

            <div
                className={`absolute top-0 py-12 whitespace-nowrap flex flex-row animate-marquee2 group-hover:pause-animation`}
            >
                {skills2.map((skill, index) => (
                    <Image
                        src={`/img/${skill?.logo}`}
                        alt={skill?.name}
                        key={index}
                        width={100}
                        height={100}
                        className='mx-2 lg:mx-10 h-10 lg:h-16'
                    />
                ))}
            </div>
        </div>
    );
}

export default SkillTemplate2;
