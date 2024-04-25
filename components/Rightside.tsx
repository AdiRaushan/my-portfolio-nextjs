"use client";
import { siteConfig } from '@/config/site-config';
import React, { useEffect } from 'react'
import SocialBox from './grid-items/socials';
import GridItem from './grid-item';
import Project from './grid-items/project';
import Equipment from './grid-items/Equipment-box';
import { useAnimate, stagger } from 'framer-motion';




const Rightside = () => {
    const staggerDelay = stagger(0.02, {
        startDelay: 0.5,
    });
    const [scope, animate] = useAnimate()

    useEffect(() => {
        if (scope.current) {
            animate("div", {
                opacity: 1,
                y: 0,
                scale: 1,
            }, {
                duration: 0.12,
                type: "spring",
                stiffness: 330,
                damping: 35,
                delay: staggerDelay

            })
        }
    }, [scope]);
    return (

        <div
            ref={scope}
            className="grid w-full grid-cols-4 grid-col-1 xl:gap-8 gap-6 xl:py-10 p-6 py-2 xl:px-1 xl:overflow-y-auto auto-rows-[76px]">
            {siteConfig.item.map((item, index) => {
                return (
                    <GridItem key={item.title + index} size={item.layout}>

                        {item.type === "social" ? (
                            <SocialBox item={item} />
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
