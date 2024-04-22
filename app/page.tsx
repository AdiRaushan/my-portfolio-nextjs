import GridItem from "@/components/grid-item";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";







export default function Home() {
  return (
    <main className="flex flex-1 h-full w-full gap-10 ">
      <div className="flex-1 h-full max-w-md p-8">
        {/* Left side */}
        <div className="flex flex-col  h-full space-y-6 rounded-md">

          <Image
            alt="avatar"
            src="/adi-pf.png"
            width="100"
            height="100"
            priority
            loading="eager"
          />
          <div className="mt-6">
            {/* Tittle */}
            <div className="text-md font-semibold text-blue-300 ">{siteConfig.title}</div>
            {/* Fullname */}
            <h1 className="text-2xl mt-2 font-bold">{siteConfig.creator}</h1>
            {/* bio */}
            <p className="text-xl font-light text-neutral-500">{siteConfig.bio}</p>
          </div>
          {/* buttons */}
          <div className="flex items-center justify-between gap-6 ">
            <a className="text-sm cursor-pointer w-full border flex items-center border-neutral-200 dark:border-neutral-800 py-2 px-3 rounded-md gap-1"> <MapPin size={16} />{siteConfig.location}</a>

            <a className="text-sm cursor-pointer w-full border flex items-center border-neutral-100 dark:border-neutral-800 py-2 px-3 rounded-md gap-1 " href={`mailto:${siteConfig.email}`}> <Mail size={16} />Contact me</a>
          </div>

          {/* footer */}
          <div className="flex items-center justify-between pt-6 text-xs border-t border-neutral-100  dark:border-neutral-800">
            <div className="text-neutral-500">Buit By Adi Raushan | @2024 WebDev, All Right Reserve</div>
            <ThemeToggle />
          </div>

        </div>
      </div>
      <div className="flex-1 h-full p-3">
        {/* Right side */}
        <div className="w-full h-full overflow-y-auto p-6 grid grid-cols-4 auto-rows-[76px] gap-10">
          {siteConfig.item.map((item, index) => {
            return (
              <GridItem key={item.title + index} size={item.layout}><div>{item.title}</div></GridItem>
            )
          })}

        </div>
      </div>
    </main>
  );
}
