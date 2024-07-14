function Skill() {
    const skills = [
        { name: 'HTML', logo: 'html.png' },
        { name: 'CSS', logo: 'css.png' },
        { name: 'Javascript', logo: 'javascript.png' },
        { name: 'TypeScript', logo: 'typescript.png' },
        { name: 'VueJs', logo: 'vuejs.png' },
        { name: 'NuxtJs', logo: 'nuxtjs.png' },
        { name: 'ReactJs', logo: 'reactjs.png' },
        { name: 'NextJs', logo: 'nextjs.png' },
        { name: 'Laravel', logo: 'laravel.png' },
        { name: 'SpringBoot', logo: 'spring-boot.png' },
        { name: 'Flutter', logo: 'flutter.png' },
        { name: 'Tailwind', logo: 'tailwind.png' },
        { name: 'MySQL', logo: 'mysql.png' },
        { name: 'PostgresSQL', logo: 'postgressql.png' },
        { name: 'Git', logo: 'git.png' },
        { name: 'Git', logo: 'git.png' }
    ];

    return (
        <div className='grid grid-cols-4 gap-10'>
            {skills.map((skill) => (
                <div className='grid grid-cols-1 justify-between items-center bg-gray-300/40 p-12 shadow-lg rounded-2xl justify-items-center h-52'>
                    <img
                        src={`/img/${skill?.logo}`}
                        alt={skill?.name}
                        className='h-16'
                    />
                    <span className='text-base text-gray-200'>
                        {skill?.name}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Skill;
