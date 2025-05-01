import { CheckCircleSolid } from 'iconoir-react';

type Props = {
    experiences: any;
};

const ExperienceTimeLineTemplate4 = ({ experiences }: Props) => {
    return (
        <div className='mx-auto max-w-5xl'>
            <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
                {experiences.map((experience: any, index: number) => (
                    <li key={index}>
                        <div className='timeline-middle'>
                            <CheckCircleSolid className='h-5 w-5' />
                        </div>
                        <time
                            className={`mt-4 px-6 text-end h-full w-full hidden md:block ${experience?.titleTimeline}`}
                        >
                            <strong
                                className={`text-lg md:text-xl block ${experience?.titleTimeline === 'timeline-end' ? 'text-start' : 'text-end'}`}
                            >
                                {experience?.company}
                            </strong>
                            <div
                                className={`text-base md:text-lg text-info/60 italic ${experience?.titleTimeline === 'timeline-end' ? 'text-start' : 'text-end'}`}
                            >
                                {experience?.duration}
                            </div>
                        </time>

                        <div
                            className={`px-4 mb-10 md:mb-20 ${experience?.detailTimeLine}`}
                        >
                            <strong className='text-lg md:text-xl block md:hidden'>
                                {experience?.company}
                            </strong>
                            <time className='italic text-sm md:text-base text-info/60 block md:hidden'>
                                {experience?.duration}
                            </time>
                            <div className='text-accent text-base sm:text-lg md:text-xl lg:text-2xl font-black'>
                                {experience?.title}
                            </div>

                            <div className='text-sm md:text-base pt-4 md:pt-10 text-start'>
                                <ul className='list-disc'>
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

                            <div
                                className={`flex flex-wrap gap-2 pt-6 ${experience?.titleTimeline === 'timeline-end' ? 'md:justify-end' : 'md:justify-start'}`}
                            >
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

export default ExperienceTimeLineTemplate4;
