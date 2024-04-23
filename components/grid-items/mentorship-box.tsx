import { GridItemInterface } from '@/config/site-config'
import React from 'react'
import Icon from '../icon'
import Link from 'next/link'

const Mentorship = ({ item }: { item: GridItemInterface }) => {
    return (
        <Link href={item.buttonLink ?? ""} className='flex items-center justify-between gap-4'>

            {/* icon */}

            <Icon type={item.icon ?? ""} color={item.color} />
            <div className='text-lg font-semibold w-full'>{item.title}</div>
            {/* other text */}
            <div>
                <div className='flex item-center justify-between'>
                    <div className='text-xs text-neutral-500'>promo</div>
                    <div className='flex items-center gap-1'>
                        <span className='text-xs line-through text-neutral-500'>{item.oldPrice}</span>
                        <span className='text-xs line-through text-neutral-500'>{item.price}</span>
                    </div>
                </div>
                {/* bottom container */}
                <div className='text-primary font-bold'>{item.promotion}</div>
            </div>

        </Link>
    )
}

export default Mentorship
