import { GridItemInterface } from "@/config/site-config";

const SocialBox = ({ item }: { item: GridItemInterface }) => {
    return <div>
        {/* header */}
        <div>
            {/* icon */}
            Icons
        </div>
        {item.layout === "2x2" && <div>Button</div>}
    </div>
}

export default SocialBox