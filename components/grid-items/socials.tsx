import { GridItemInterface } from "@/config/site-config";
import Icon from "../icon";

const SocialBox = ({ item }: { item: GridItemInterface }) => {
    return <div>
        <div className="flex items-center justify-between">
            {/* icon */}
            <Icon type={item.icon ?? ""} color={item.color} />
            {/* button */}
            {item.layout === "2x2" && <div>Button</div>}
        </div>
        <div className="mt-2">
            {/* content */}
            <div className="text-lg font-semibold">{item.title}</div>
            <div className="text-sm text-neutral-500">{item.username}</div>
            {item.description && <div className="text-neutral-500 text-sm mt-1 ">{item.description}</div>}
            {/* button */}
            {item.layout === "1x2" && <div>button</div>}
        </div>

    </div>

}

export default SocialBox