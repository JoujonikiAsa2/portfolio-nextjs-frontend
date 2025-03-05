import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import { useAppSelector } from "@/lib/hook";
import project1 from '@/assets/banner-shape.png'
import Image from 'next/image';
import Link from 'next/link';
import CustomContainer from "../shared/CustomContainer";

const FeaturedProjects = () => {
    const theme = useAppSelector((state) => state.theme.theme);
    const projects = Array.from({ length: 2 });
    return (
        <div  className={`h-full py-24 px-2 lg:px-0 w-full flex gap-6 items-center justify-center ${
            theme === "dark"
              ? "bg-[#0F0715] text-white"
              : "bg-white text-black"
          }`}>
            <CustomContainer>
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
            </CustomContainer>
        </div>
    );
};

export default FeaturedProjects;