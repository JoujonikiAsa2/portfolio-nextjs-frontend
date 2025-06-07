import React from 'react';

const SecondaryBanner = ({title, subTitle, theme}:{title:string, subTitle:string, theme:string}) => {
    return (
        <div className={`mb-4 md:mb-12 w-full h-80 bg-[#8757F7]/30 flex flex-col gap-6 justify-center items-center ${theme === "dark" ? "text-white" :"text-black"}`}>
            <h2 className='text-lg sm:text-xl md:text-3xl'>{title}</h2>
            <small className='text-xs'>{subTitle}</small>
        </div>
    );
};

export default SecondaryBanner;