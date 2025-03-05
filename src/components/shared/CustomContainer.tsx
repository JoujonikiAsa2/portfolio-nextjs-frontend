import React from 'react';

const CustomContainer = ({children}:{children:React.ReactElement}) => {
    return (
        <div className="lg:mx-[10vw] 2xl:mx-[16vw] h-full">
            {children}
        </div>
    );
};

export default CustomContainer;