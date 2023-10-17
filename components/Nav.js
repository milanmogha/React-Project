import React from 'react';

 function Nav() {
    return (
        <nav className='bg-black text-white'>
            <div className="Nav">
                <ul className="flex text-2xl px-20 pt-5">
                    <li>
                        <a href="/">MARKALL</a>
                    </li>
                    <li className='ml-auto'>
                        <a href="/">Services</a>
                    </li>
                    <li className='ml-32'>
                        <a href="/">Pricing</a>
                    </li>
                    <li className='ml-32'>
                        <a href="/">About Us</a>
                    </li>
                    <button type='button' className='bg-green-400 ml-auto p-2 rounded-xl text-black font-medium text-xl  hover:text-green-600 hover:bg-black '>
                        Get Started
                    </button>
                </ul>
            </div>
        </nav>
    );
}

export default Nav