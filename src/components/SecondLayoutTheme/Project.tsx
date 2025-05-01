import { Scissor } from "iconoir-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Project = () => {
    const router = useRouter();

    const projects = [
        {
            id: 1,
            name: "E-commerce Website",
            status: "New",
            descriptions:
                "Lorem ipsum dolor sit amet ipsum dolor et. Amet sit et hendrerit ut diam diam diam aliquyam nostrud vero amet exerci. Amet ut ea lorem ut. Kasd dolores ipsum eos. Enim wisi ea ut duis accusam consequat duo iriure nonumy gubergren dolore ad sed sed lorem sit. Veniam aliquyam duo aliquyam nulla sanctus stet rebum. Sadipscing labore sanctus eos eirmod nibh nonumy dolor consequat vel aliquyam voluptua nibh dignissim at dolor diam dolores gubergren.",
            preImage: null,
            companyName: "APPA",
            rating: "",
            technologies: ["TypeScript", "NextJS"]
        },
        {
            id: 2,
            name: "E-commerce Website",
            status: "New",
            descriptions:
                "Lorem ipsum dolor sit amet ipsum dolor et. Amet sit et hendrerit ut diam diam diam aliquyam nostrud vero amet exerci. Amet ut ea lorem ut. Kasd dolores ipsum eos. Enim wisi ea ut duis accusam consequat duo iriure nonumy gubergren dolore ad sed sed lorem sit. Veniam aliquyam duo aliquyam nulla sanctus stet rebum. Sadipscing labore sanctus eos eirmod nibh nonumy dolor consequat vel aliquyam voluptua nibh dignissim at dolor diam dolores gubergren.",
            preImage: null,
            companyName: "APPA",
            rating: "",
            technologies: ["TypeScript", "NextJS"]
        },
        {
            id: 3,
            name: "E-commerce Website",
            status: "New",
            descriptions:
                "Lorem ipsum dolor sit amet ipsum dolor et. Amet sit et hendrerit ut diam diam diam aliquyam nostrud vero amet exerci. Amet ut ea lorem ut. Kasd dolores ipsum eos. Enim wisi ea ut duis accusam consequat duo iriure nonumy gubergren dolore ad sed sed lorem sit. Veniam aliquyam duo aliquyam nulla sanctus stet rebum. Sadipscing labore sanctus eos eirmod nibh nonumy dolor consequat vel aliquyam voluptua nibh dignissim at dolor diam dolores gubergren.",
            preImage: null,
            companyName: "APPA",
            rating: "",
            technologies: ["TypeScript", "NextJS"]
        }
    ];

    return (
        <div className='my-20'>
            <div className='text-center text-3xl md:text-4xl lg:text-5xl mb-20'>
                PROJECTS
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {projects.map((project, index) => (
                    <div key={index} className='border rounded-box'>
                        <div
                            className='card h-full rounded-box group-hover:cursor-pointer'
                            onClick={() =>
                                router.push(`/projects/${project?.id}`)
                            }
                        >
                            <figure>
                                <Image
                                    src='/cover2.png'
                                    alt='Shoes'
                                    width={600}
                                    height={100}
                                />
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
                                <p className='text-sm md:text-base'>
                                    {project?.descriptions.substring(0, 100)}{" "}
                                    ...
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
