import { GridItemInterface } from "@/config/site-config";
import Icon from "../icon";
import Button from "../button";
import Link from "next/link";

const SocialBox = ({ item }: { item: GridItemInterface }) => {
    return (
        <Link href={item.buttonLink ?? ""} target="_Blank" >
            <div className="flex items-center justify-between">
                {/* icon */}
                <Icon type={item.icon ?? ""} color={item.color} />
                {/* button */}
                {item.layout === "2x2" && (<Button text={item.buttonTitle ?? ""} secondaryText={item.buttonSecondaryText} color={item.color} />)}
            </div>
            <div className="mt-2">
                {/* content */}
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="text-sm text-neutral-500">{item.username}</div>
                {item.description && <div className="text-neutral-500 text-sm mt-1 line-clamp-2 ">{item.description}</div>}
                {/* button */}
                {item.layout === "1x2" && (
                    <div className="mt-2"><Button text={item.buttonTitle ?? ""} secondaryText={item.buttonSecondaryText} color={item.color} /></div>)}
            </div>

        </Link>


    )
}

export default SocialBox