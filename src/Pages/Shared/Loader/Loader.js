import React from 'react';

const Loader = () => {
 

    return (
        <div className='flex justify-center'>
            <div style={{borderTopColor:"transparent"}}
                class="w-16 h-16 border-4 border-blue-400 border-double rounded-full animate-spin">
            </div>
        </div>
               
    );
};

export default Loader;