import Image from 'next/image'
import React from 'react'

const menus = [
    {
        name: 'news',
    }, {
        name: 'live'
    },
    {
        name: 'p-done'
    }
];

const Nav = () => {
    return (
        <div className='border-b border-gray-light py-3 shadow-sm'>
            <div className=''></div>
            <div className='container flex items-center justify-between'>
                {/* Nav left */}
                <div className='flex items-center gap-14'>
                    <Image src={'/images/vdone-logo.png'} alt="pdone-logo" width="60" height="50" />
                    <ul className='hidden md:flex gap-8 text-lg capitalize'>
                        {menus.map((menu, index) => (
                            <li className={index === 0 ? 'text-primary' : ''}><a>{menu.name}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Nav center */}
                <div className='bg-gray-light flex px-4 py-4 rounded-full gap-2'>
                    <Image src={'/icons/search-icon.svg'} alt="search-icon" width="20" height="20" />
                    <input type="text" placeholder='Tìm kiếm tin tức' className='w-full md:w-80' />
                </div>

                {/* Nav right */}
                <div className='flex gap-8 items-center'>
                    <div className='relative'>
                        <Image src={'/icons/bell-icon.svg'} alt="search-icon" width="30" height="30" />
                        <span className='absolute bg-red rounded-full h-6 w-6 text-[12px] text-center flex items-center justify-center text-white -top-3 -right-2'>9+</span>
                    </div>

                    <div className='relative'>
                        <Image src={'/icons/mess-icon.svg'} alt="search-icon" width="30" height="30" />
                    </div>

                    <div className='relative'>
                        <Image src={'/images/img_user.png'} alt="search-icon" width="35" height="35" className='rounded-full' />
                        <div className='absolute -bottom-1 -right-2 bg-gray-light p-1 rounded-full'>
                            <Image src={'/icons/nav-icon-2.svg'} width="15" height="15" alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav