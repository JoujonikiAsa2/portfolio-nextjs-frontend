import BlogList from '@/components/blog/BlogList';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Blog List | Joujoniki",
  description: "Personal Portfolio Blog List",
};

const BlogPage = () => {
    return (
        <div>
            <BlogList/>
        </div>
    );
};

export default BlogPage;