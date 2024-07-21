import { CheckCircleSolid } from 'iconoir-react';

type Props = {
    experiences: any;
};

const ExperienceTimeLineTemplate3 = ({ experiences }: Props) => {
    return (
        <div className='mx-auto max-w-6xl'>
            {experiences.map((experience: any, index: number) => (
                <div key={index} className='flex w-full md:gap-x-4 mb-10'>
                    <div className='hidden md:block text-end md:w-1/3 xl:text-nowrap'>
                        <strong className='text-base md:text-lg block'>
                            {experience?.company}
                        </strong>
                        <div className='text-xs md:text-sm lg:text-base text-info/60 italic'>
                            {experience?.duration}
                        </div>
                    </div>

                    <div className='divider divider-horizontal divider-start'>
                        <div>
                            <CheckCircleSolid className='h-5 w-5' />
                        </div>
                    </div>

                    <div className='w-full md:w-2/3'>
                        <div className='block md:hidden pb-2'>
                            <strong className='text-base md:text-lg block'>
                                {experience?.company}
                            </strong>
                            <div className='text-xs md:text-sm lg:text-base text-info/60 italic'>
                                {experience?.duration}
                            </div>
                        </div>
                        <strong className='text-accent text-base sm:text-lg md:text-xl lg:text-2xl mb-4 block'>
                            {experience?.title}
                        </strong>
                        <ul className='list-disc text-xs md:text-sm lg:text-base pl-4'>
                            {experience?.responsibilities.map(
                                (responsibility: any, index: number) => (
                                    <li key={index} className='pb-2'>
                                        {responsibility}
                                    </li>
                                )
                            )}
                        </ul>
                        <div className='flex flex-wrap gap-2 pt-2'>
                            {experience?.skills.map(
                                (skill: any, index: number) => (
                                    <span
                                        className='text-xs px-3 py-1 bg-warning hover:bg-warning/90 delay-150 rounded-xl text-gray-700'
                                        key={index}
                                    >
                                        {skill}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceTimeLineTemplate3;
