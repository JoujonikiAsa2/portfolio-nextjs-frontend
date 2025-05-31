import ProjectList from '@/components/project/ProjectList';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Projects | Joujoniki",
  description: "Personal Portfolio Projects",
};


const ProjectPage = () => {
    return (
        <div>
            <ProjectList/>
        </div>
    );
};

export default ProjectPage;