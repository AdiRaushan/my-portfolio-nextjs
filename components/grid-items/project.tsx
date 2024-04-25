import { GridItemInterface } from "@/config/site-config";
import Link from "next/link";
import React from "react";
import Icon from "../icon";
import { ExternalLink } from "lucide-react";

const Project = ({ item }: { item: GridItemInterface }) => {
    return (
        <Link className="flex items-start mb-10" href={item.buttonLink ?? ""}>
            {/* icon  */}
            <Icon type={item.icon ?? ""} color={item.color} />
            {/* title */}
            <div className="w-full @md:text-lg text-basefont-semibold mb-3          ">
                {item.title}
            </div>
            {item.description && <div className="text-neutral-500 text-sm mt-1 line-clamp-2 @lg:line-champ-none ">{item.description}</div>}
            {/* Links */}
            <div className=" flex  gap-1">
                <span className="mt-[15px] @md:text-lg text-base">Visit</span>
                < ExternalLink size="15" className="mt-3" />
            </div>
        </Link>
    );
};

export default Project;
