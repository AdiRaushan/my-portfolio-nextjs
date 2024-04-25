import { GridItemInterface } from '@/config/site-config'
import Link from 'next/link'
import React from 'react'
import Icon from '../icon'
import { Star } from 'lucide-react'

const Project = ({ item }: { item: GridItemInterface }) => {
    return (
        <Link className='flex items-center gap-3' href={item.buttonLink ?? ""}>{/* icon  */}
            <Icon type={item.icon ?? ""} color={item.color} />
            {/* title */}
            <div className='w-full @md:text-lg text-basefont-semibold'>{item.title}</div>
            {/* Links */}
            <div className=' flex items-center gap-1'>

                <span className='mt-[1px] @md:text-lg text-base'>Visit</span>
                <Star size="13" fill='currentColor' />
            </div>
        </Link>
    )
}

export default Project
