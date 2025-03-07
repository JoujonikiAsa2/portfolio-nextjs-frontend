import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import project1 from '@/assets/banner-shape.png'
import Image from 'next/image';
import Link from 'next/link';
import DarkContainer from "../shared/DarkContainer";

const FeaturedProjects = () => {
    const projects = Array.from({ length: 2 });
    return (
            <DarkContainer>
                <div className="h-full w-full flex flex-col items-center justify-between py-24">
                <SectionTitle title='Featured Projects' subTitle=""/>
                <div className='w-full flex flex-col md:flex-row gap-8 justify-between'>      
                    {
                        projects.map((project, index)=>
                            <div key={index} className='relative w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-4 border'>
                                <Image src={project1} alt="project1" width={500} height={500} sizes='100vw' className='rounded-2xl'/>
                                <p>description</p>
                                <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-around">
                                    <div className="p-1 text-center bg-primary text-secondary rounded preview ">
                                        <Link href="/project-livelink" target="new">
                                            Preview
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                </div>
            </DarkContainer>
    );
};

export default FeaturedProjects;