import { GridItemInterface } from '@/config/site-config'
import React from 'react'
import Icon from '../icon'

const Mentorship = ({ item }: { item: GridItemInterface }) => {
    return (
        <div className='flex items-center gap-3'>
            {/* icon */}

            <Icon type={item.icon ?? ""} color={item.color} />
            <div className='text-lg font-semibold'>{item.title}</div>
            {/* other text */}
            <div>
                <div className=''>
                    <div>promo</div>
                    <div>
                        <span>{item.oldPrice}</span>
                        <span>{item.price}</span>
                    </div>
                </div>
                {/* bottom container */}
                <div>{item.promotion}</div>
            </div>
        </div>
    )
}

export default Mentorship
