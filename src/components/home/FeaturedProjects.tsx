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
                <div className="h-full w-full flex flex-col items-center justify-between">
                <SectionTitle title='Featured Projects' subTitle=""/>
                <div className='w-full flex flex-wrap justify-between'>      
                    {
                        projects.map((project, index)=>
                            <div key={index} className='relative project-card'>
                                <Image src={project1} alt="project1" width={600} height={600} className='rounded-2xl'/>
                                <p>description</p>
                                <div className=" absolute bottom-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-around">
                                    <div className="p-1 text-center bg-primary text-secondary rounded preview">
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