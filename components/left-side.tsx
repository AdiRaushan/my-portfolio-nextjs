import { siteConfig } from '@/config/site-config'
import { Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Footer from './footer'

const Leftside = () => {
    return (
        <div className="flex-1 w-full h-full xl:max-w-md p-8">
            {/* Left side */}
            <div className="flex flex-col w-full h-full space-y-6  rounded-md">
                <Image
                    alt="avatar"
                    src="/adi-pf.png"
                    width="100"
                    height="100"
                    priority
                    loading="eager"
                />
                <div className="mt-6">
                    {/* Tittle */}
                    <div className="text-md font-semibold text-blue-300 ">
                        {siteConfig.title}
                    </div>
                    {/* Fullname */}
                    <h1 className="text-2xl mt-2 font-bold">{siteConfig.creator}</h1>
                    {/* bio */}
                    <p className="text-xl font-light text-neutral-500">
                        {siteConfig.bio}
                    </p>
                </div>
                {/* buttons */}
                <div className="flex items-center gap-3 mt-6 ">
                    <a className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800">

                        <MapPin size={16} />
                        {siteConfig.location}
                    </a>

                    <a
                        className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800 "
                        href={`mailto:${siteConfig.email}`}
                    >
                        {" "}
                        <Mail size={16} />
                        Contact me
                    </a>
                </div>
                <div className='hidden xl:flex py-8'> <Footer /></div>
                {/* footer */}

            </div>
        </div>
    )
}

export default Leftside
