import React from 'react';

const Lilnk = ({route}) => {
    return (
        <div>
            <li className=' hover:text-white hover:bg-black hover:rounded-xl  px-4 py-1'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Lilnk;