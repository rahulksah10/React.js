import React from 'react'

const Footer = () => {
    return (
        <div className=' p-8 justify-between bg-amber-400 space-x-6 space-y-16 flex flex-col  md:flex-row  '>
            <div className='gap-10 flex flex-col md:flex-row lg:flex-col cursor-pointer'>
                <div className=''>
                    <img className='w-24' src="/assets/metalogo.svg" alt="" />
                </div>
                <div className='flex flex-row md:hidden  gap-4'>
                    <img className='w-8' src="/assets/fb.svg" alt="facebook" />
                    <img className='w-8' src="/assets/thread.svg" alt="thread" />
                    <img className='w-8' src="/assets/insta.svg" alt="instagram" />
                    <img className='w-8' src="/assets/X.svg" alt="X" />
                    <img className='w-8' src="/assets/yt.svg" alt="youtube" />
                </div>
            </div>
            <div className='w-2/3 flex md:flex-col space-y-6 '>
                <div className=' flex sm:hidden md:flex space-x-6 justify-center  '>
                    <img className='w-8' src="/assets/fb.svg" alt="facebook" />
                    <img className='w-8' src="/assets/thread.svg" alt="thread" />
                    <img className='w-8' src="/assets/insta.svg" alt="instagram" />
                    <img className='w-8' src="/assets/X.svg" alt="X" />
                    <img className='w-8' src="/assets/yt.svg" alt="youtube" />
                </div>

                <div className=' gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div>
                        <ul className='grid gap-1.5 text-lg sm:text-sm text-gray-800 '>
                            <li><span className='font-medium'>Meta Store</span></li>
                            <li>Ray-Ban Meta glasses</li>
                            <li>Meta Quest</li>
                            <li>Accessories</li>
                            <li>Apps and games</li>
                            <li>More from Ray-Ban</li>
                            <li>Meta for Work</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='grid gap-1.5 text-lg sm:text-sm text-gray-800  '>
                            <li className='font-medium'><span>Community</span></li>
                            <li>Creators</li>
                            <li>Developers</li>
                            <li>Business</li>
                            <li>Charities</li>
                            <li>Download SDKs</li>
                            <li>VR for Good</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='grid gap-1.5 text-lg sm:text-sm text-gray-800 ' >
                            <li className='font-medium'> <span>Meta Store</span></li>
                            <li>Ray-Ban Meta glasses</li>
                            <li>Meta Quest</li>
                            <li>Accessories</li>
                            <li>Apps and games</li>
                            <li>More from Ray-Ban</li>
                            <li>Meta for Work</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='grid gap-1.5 text-lg sm:text-sm text-gray-800 ' >
                            <li className='font-medium'><span>Store support and legal</span></li>
                            <li>Meta Help centre</li>
                            <li>returns</li>
                            <li>Find a product</li>
                            <li>Returns</li>
                            <li>Authoried</li>
                            <li>Meta for Work</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='grid gap-1.5 text-lg sm:text-sm text-gray-800 ' >
                            <li className='font-medium'><span></span></li>
                            <li>Ray-Ban Meta glasses</li>
                            <li>Meta Quest</li>
                            <li>Accessories</li>
                            <li>Apps and games</li>
                            <li>More from Ray-Ban</li>
                            <li>Meta for Work</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='grid gap-1.5 text-lg sm:text-sm text-gray-800 ' >
                            <li className='font-medium'><span>Meta Store</span></li>
                            <li>Ray-Ban Meta glasses</li>
                            <li>Meta Quest</li>
                            <li>Accessories</li>
                            <li>Apps and games</li>
                            <li>More from Ray-Ban</li>
                            <li>Meta for Work</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
