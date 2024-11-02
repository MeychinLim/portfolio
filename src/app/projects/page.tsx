"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function Page() {
    const router = useRouter();

    const projects = [
        {
            id: "1",
            name: "Real Estate For Agents (REA)",
            status: "Completed",
            descriptions:
                "This project have website and admin. This website help agency to post their properties and detail information from the owner of the properties. For the Admin Web application, we have lots of modules to manage all information related to properties such as Properties, News, Advertisements,...",
            preImage: "projects/kh25/kh25-home-preview.png",
            companyName: "APPA",
            technologies: ["NuxtJS 2, Laravel"]
        },
        {
            id: "2",
            name: "Valuation System (VAS)",
            status: "Completed",
            descriptions:
                "This project is confidential, cannot be shown in public. However, I can describe it, this system store each properties valuate information for the Valuation Company.",
            preImage: null,
            companyName: "APPA",
            technologies: ["NuxtJS 3, Laravel"]
        },
        {
            id: "3",
            name: "Map Tree System (MTS)",
            status: "Completed",
            descriptions:
                "This project is confidential, cannot be shown in public. However, I can describe it, this system store all the properties information and show properties's location as Map View.",
            preImage: null,
            companyName: "APPA",
            technologies: ["Laravel"]
        },
        {
            id: "4",
            name: "World Counties",
            status: "Completed",
            descriptions:
                "This project display all countries in the world as a list using REST API from https://restcountries.com/.",
            preImage: "projects/country-catalog/country-catalog.png",
            companyName: "Personal",
            technologies: ["NuxtJs 3"]
        },
        {
            id: "5",
            name: "Lucky Draw",
            status: "Completed",
            descriptions:
                "This project is use for Company Event to draw phone number and find the winner in the Event.",
            preImage: null,
            companyName: "CSX",
            technologies: ["NextJs"]
        },
        {
            id: "6",
            name: "Data Feed",
            status: "Completed",
            descriptions:
                "This project is use for provided data graph widget and API to company's clients.",
            preImage: null,
            companyName: "CSX",
            technologies: ["Laravel"]
        }
    ];

    return (
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-slideInUp'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='bg-gradient-to-b from-transparent to-accent rounded-2xl p-0.5 shadow-md group hover:shadow-xl hover:scale-105 duration-500'
                    >
                        <div
                            className='card bg-base-100 h-full rounded-2xl group-hover:cursor-pointer'
                            onClick={() =>
                                router.push(`/projects/${project?.id}`)
                            }
                        >
                            <figure>
                                <Image
                                    src='/cover2.png'
                                    alt='Shoes'
                                    width={500}
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
}

export default Page;
