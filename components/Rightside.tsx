import { siteConfig } from '@/config/site-config';
import React from 'react'
import SocialBox from './grid-items/socials';
import GridItem from './grid-item';
import Mentorship from './grid-items/mentorship-box';
import Project from './grid-items/project';
import Equipment from './grid-items/Equipment-box';

const Rightside = () => {
    return (
        <div className="grid w-full grid-cols-4 xl:gap-8 gap-6 xl:py-10 py-6 xl:px-1 xl:overflow-y-auto auto-rows-[76px]">
            {siteConfig.item.map((item, index) => {
                return (
                    <GridItem key={item.title + index} size={item.layout}>

                        {item.type === "social" ? (
                            <SocialBox item={item} />
                        ) : item.type === "mentor" ? (<Mentorship item={item} />
                        ) : item.type === "project" ? (
                            <Project item={item} />
                        ) : item.type === "equipment" ? (
                            <Equipment item={item} />
                        ) : <div>not yet</div>
                        }

                    </GridItem>
                );
            })}
        </div>
    )
}

export default Rightside
