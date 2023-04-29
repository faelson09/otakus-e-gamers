import React from 'react'

function Navbar() {
    return (
        <nav className='w-full h-16 px-4 bg-[#555555] shadow-md flex justify-center'>
            <div className='min-[1700px]:w-[1700px] w-full h-full flex items-center justify-between'>
            <p>ola</p>
            <ul className=' flex items-center justify-between'>
                <li className='text-[#ff4500] mx-4'>ola</li>
                <li className='text-[#ff4500] mx-4'>ola</li>
                <li className='text-[#ff4500] mx-4'>ola</li>
                <li className='text-[#ff4500] mx-4'>ola</li>
                <li className='text-[#ff4500] mx-4'>ola</li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar