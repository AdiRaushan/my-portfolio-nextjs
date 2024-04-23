import { GridItemInterface } from '@/config/site-config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Equipment = ({ item }: { item: GridItemInterface }) => {
    return (
        <div className='flex flex-col justify-end w-full h-full overflow-hidden rounded-3xl '>
            {/* overlay */}
            <div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90' />
            <Image className='object-center object-cover' fill src={item.image ?? ""} alt='bg-image' />
            {/*  */}
            <div className='relative z-20 p-8'>
                <div className="text-lg font-semibold text-white mb-3 ml-1">{item.title}</div>
                {/* items
                 */}
                <div className='flex flex-wrap items-center gap-3'> {item.equipments?.map((equipment) => {
                    return <Link className="px-2 py-1 text-sm font-medium bg-white rounded-lg dark:bg-neutral-900" key={equipment.link} href={equipment.link}>
                        {equipment.title}
                    </Link>
                })}</div>
            </div>
        </div>
    )
}

export default Equipment
