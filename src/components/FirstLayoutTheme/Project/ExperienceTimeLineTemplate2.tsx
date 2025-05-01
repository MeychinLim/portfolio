import { CheckCircleSolid } from 'iconoir-react';

type Props = {
    experiences: any;
};

const ExperienceTimeLineTemplate2 = ({ experiences }: Props) => {
    return (
        <div className='container mx-auto'>
            <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
                {experiences.map((experience: any, index: number) => (
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
                                        (
                                            responsibility: any,
                                            index: number
                                        ) => (
                                            <li key={index}>
                                                {responsibility}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className='flex flex-wrap gap-2 pt-4'>
                                {experience?.skills.map(
                                    (skill: any, index: number) => (
                                        <span
                                            className='text-xs px-3 py-1 bg-warning rounded-xl text-gray-800'
                                            key={index}
                                        >
                                            {skill}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceTimeLineTemplate2;
