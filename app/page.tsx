import Rightside from "@/components/Rightside";
import Footer from "@/components/footer";

import Leftside from "@/components/left-side";


export default function Home() {
  return (
    <main className=" container scrollbar flex flex-col mx-auto xl:flex-row flex-1 h-full w-full gap-10 ">
      <Leftside />

      {/* Right side */}
      <Rightside />

      <div className='flex w-full px-8 pb-5 xl:hidden '> <Footer /></div>
    </main>
  );
}
