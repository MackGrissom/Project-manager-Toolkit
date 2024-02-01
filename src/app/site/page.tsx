import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#fab915_100%)]" />
        <p className="text-center">Build, grow and scale your entire business with one platform</p>
        <div className="bg-gradient-to-r from-[#fab915] to-secondary-foreground text-transparent bg-clip-text relative pb-6">
          <h1 className=" text-9xl text-bold text-center md:text-[200px]">
            {" "}
            ZenKit
          </h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px]">
         <Image 
         src={'/assets/preview.png'}
         alt="banner"
         height={1200}
         width={1200}
         className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
         />
         <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
         
        </div>
      </section>
    </>
  );
}
