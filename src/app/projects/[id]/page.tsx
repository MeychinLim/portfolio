"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Props = {
    params: { id: string };
};

type Project = {
    id: string;
    name: string;
    status: string;
    descriptions: string;
    preImage: null;
    companyName: string;
    rating: string;
    technologies: string[];
};

function Page({ params }: Props) {
    const [project, setProject] = useState<Project | undefined>();

    const projects = useMemo(
        () => [
            {
                id: "1",
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
                id: "2",
                name: "Countries List Fetching",
                status: "New",
                descriptions:
                    "Lorem ipsum dolor sit amet ipsum dolor et. Amet sit et hendrerit ut diam diam diam aliquyam nostrud vero amet exerci. Amet ut ea lorem ut. Kasd dolores ipsum eos. Enim wisi ea ut duis accusam consequat duo iriure nonumy gubergren dolore ad sed sed lorem sit. Veniam aliquyam duo aliquyam nulla sanctus stet rebum. Sadipscing labore sanctus eos eirmod nibh nonumy dolor consequat vel aliquyam voluptua nibh dignissim at dolor diam dolores gubergren.",
                preImage: null,
                companyName: "APPA",
                rating: "",
                technologies: ["NuxtJS 3"]
            },
            {
                id: "3",
                name: "UPS for Coffee Shop",
                status: "New",
                descriptions:
                    "Lorem ipsum dolor sit amet ipsum dolor et. Amet sit et hendrerit ut diam diam diam aliquyam nostrud vero amet exerci. Amet ut ea lorem ut. Kasd dolores ipsum eos. Enim wisi ea ut duis accusam consequat duo iriure nonumy gubergren dolore ad sed sed lorem sit. Veniam aliquyam duo aliquyam nulla sanctus stet rebum. Sadipscing labore sanctus eos eirmod nibh nonumy dolor consequat vel aliquyam voluptua nibh dignissim at dolor diam dolores gubergren.",
                preImage: null,
                companyName: "APPA",
                rating: "",
                technologies: ["NuxtJs 3", "Laravel"]
            }
        ],
        []
    );

    useEffect(() => {
        const project = projects.find((project) => project?.id === params?.id);
        if (!!project) setProject(project);
    }, [params?.id, projects, setProject]);

    return (
        <div className='max-w-6xl mx-auto'>
            <div className='mb-10'>
                <div className='text-neutral-content text-2xl md:text-3xl lg:text-4xl font-bold flex items-center gap-4 mb-4'>
                    <span>{project?.name}</span>
                    <span className='badge badge-secondary'>
                        {project?.status}
                    </span>
                </div>

                <span className='text-base mb-1'>
                    Company Name: {project?.companyName}
                </span>

                <div className='flex items-center gap-4'>
                    <span className='text-base'>Built From: </span>
                    {project?.technologies.map((technology, index) => (
                        <span
                            key={index}
                            className='badge badge-accent badge-outline'
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>

            <div className='rounded-xl bg-gradient-to-r from-accent to-green-200'>
                <div className='px-6 md:px-14 translate-y-6 md:translate-y-14'>
                    <Image
                        src='/cover2.png'
                        alt='Shoes'
                        className='rounded-xl mb-6 md:mb-14'
                        width={1000}
                        height={100}
                    />
                    <Image
                        src='/cover2.png'
                        alt='Shoes'
                        className='rounded-xl mb-6 md:mb-14'
                        width={1000}
                        height={100}
                    />
                </div>
            </div>
            <p className='text-base px-10 pt-10 md:pt-20 indent-10'>
                {project?.descriptions}
            </p>
        </div>
    );
}

export default Page;
