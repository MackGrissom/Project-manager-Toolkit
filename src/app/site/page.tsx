import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { pricingCards } from "@/lib/constants";
  import clsx from "clsx";
  import { Check } from "lucide-react";
  import Image from "next/image";
  import Link from "next/link";
  
  export default function Home() {
    return (
      <>
        <section className=" w-full pt-36 relative flex items-center justify-center flex-col h-[100vh] dark:bg-black ">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#fab915_100%)]" />
          <Image
            src={"./assets/zenkitlogo.svg"}
            width={200}
            height={200}
            alt="logo"
            className="animate"
          />
          <p className="text-center italic">
            Manage and grow your online business with one versatile platform
          </p>
          <div className="bg-gradient-to-r from-[#fab915] to-secondary-foreground text-transparent bg-clip-text relative">
            <h1 className=" text-9xl text-bold text-center md:text-[150px] pb-11">
              {" "}
              ZenWorks
            </h1>
          </div>
          <div className="flex justify-center items-center relative md:mt-[-70px]">
            <Image
              src={"/assets/preview.png"}
              alt="banner"
              height={1200}
              width={1200}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted bottom-0"
            />
            <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
          </div>
        </section>
        <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-90px]">
          <h2 className="text-4xl text-center mt-20">Streamline your workflow</h2>
          <p className="text-mute-foreground text-center">
            Website Builder, CRM, Analytics, Project Management and payment processing - all in one
          </p>
          <div className="flex justify-center gap-4 flex-wrap mt-6">
            {pricingCards.map((card) => (
              <Card
                key={card.title}
                className={clsx("w-[300px] flex flex-col justify-between", {
                  "border-2 border-primary": card.title === "Unlimited Saas",
                })}
              >
                <CardHeader>
                  <CardTitle
                    className={clsx("", {
                      "text-muted-foreground": card.title !== "Unlimited Saas",
                    })}
                  >
                    {card.title}
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-4xl font-bold">
                    {card.price}
                  </span>
                  <span className="text-4xl font-bold">
                    /mo
                  </span>
                </CardContent>
                <CardFooter className="flex flex-col items-stat gap-4">
                  <div>{card.features.map((feature)=> 
                  
                  <div key={feature} className="flex gap-2 items-center"> 
                  <Check className="text-muted-foreground"/> 
                  <p>{feature}</p>
                  </div>
                  )}
                    </div>
                  <Link 
                  href={`agency?plan=${card.priceId}`}
                  className={clsx("w-full text-center bg-primary p-2 rounded-md", {
                    "!bg-muted-foreground" : card.title !=='Unlimited Saas'
                  })}
                  >
  Get Started
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </>
    );
  }
  