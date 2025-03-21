import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
interface Feature {
  title: string;
  description: string;
  image: string;
}

interface Feature166Props {
  heading: string;
  description?: string;
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
  feature4: Feature;
}

const Feature166 = ({
  heading = "Blocks built with Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  feature1 = {
    title: "UI/UX Design",
    description:
      "Creating intuitive user experiences with modern interface design principles and user-centered methodologies.",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
  feature2 = {
    title: "Responsive Development",
    description:
      "Building websites that look and function perfectly across all devices and screen sizes.",
    image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
  },
  feature3 = {
    title: "Brand Integration",
    description:
      "Seamlessly incorporating your brand identity into every aspect of your website's design.",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
  feature4 = {
    title: "Performance Optimization",
    description:
      "Ensuring fast loading times and smooth performance through optimized code and assets.",
    image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
  },
}: Feature166Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-24 flex flex-col items-center gap-6">
          <h1 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
            {heading}
          </h1>
          <p className="text-center text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
            {description}
          </p>
        </div>
        <div className="relative flex justify-center">
          <div className="relative flex w-full flex-col border border-muted2 md:w-1/2 lg:w-full">
            <div className="relative flex flex-col lg:flex-row">
              <div className="flex flex-col justify-between border-b border-solid border-muted2 p-10 lg:w-3/5 lg:border-b-0 lg:border-r">
                <h2 className="text-xl font-semibold">{feature1.title}</h2>
                <p className="text-muted-foreground">{feature1.description}</p>
                <Dialog>
                  <DialogTrigger className="cursor-pointer">
                    <Image
                      src={feature1.image}
                      alt={feature1.title}
                      width={1920}
                      height={1080}
                      className="aspect-[1.5] h-full w-full object-contain lg:aspect-[2.4]"
                    />
                  </DialogTrigger>
                  <DialogContent className="min-w-[calc(100%-4rem)] h-[calc(100svh-4rem)]">
                    <DialogHeader>
                      <DialogTitle>Admin Dashboard</DialogTitle>
                      <DialogDescription className=" w-max-full">
                        <Image
                          src={feature1.image}
                          alt={feature1.title}
                          width={1920}
                          height={1080}
                          className="mt-8 aspect-[1.5] h-full rounded-xl w-full object-contain lg:aspect-[2.4]"
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-2/5">
                <h2 className="text-xl font-semibold">{feature2.title}</h2>
                <p className="text-muted-foreground">{feature2.description}</p>

                <Dialog>
                  <DialogTrigger className="cursor-pointer">
                    <Image
                      src={feature2.image}
                      alt={feature2.title}
                      width={1920}
                      height={1080}
                      className=" aspect-[1.45] h-full w-full object-cover"
                    />
                  </DialogTrigger>
                  <DialogContent className="min-w-5xl max-w-5xl">
                    <DialogHeader>
                      <DialogTitle>Portail client</DialogTitle>
                      <DialogDescription className=" w-max-full">
                        <Image
                          src={feature2.image}
                          alt={feature2.title}
                          width={1920}
                          height={1080}
                          className="mt-8 aspect-[1.45] object-contain"
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="relative flex flex-col border-t border-solid border-muted2 lg:flex-row">
              <div className="flex flex-col justify-between border-b border-solid border-muted2 p-10 lg:w-2/5 lg:border-b-0 lg:border-r">
                <h2 className="text-xl font-semibold">{feature3.title}</h2>
                <p className="text-muted-foreground">{feature3.description}</p>
                <Dialog>
                  <DialogTrigger className="cursor-pointer">
                    <Image
                      src={feature1.image}
                      alt={feature1.title}
                      width={1920}
                      height={1080}
                      className="aspect-[1.5] h-full w-full object-contain lg:aspect-[2.4]"
                    />
                  </DialogTrigger>
                  <DialogContent className="min-w-[calc(100%-4rem)] h-[calc(100svh-4rem)]">
                    <DialogHeader>
                      <DialogTitle>Admin Dashboard</DialogTitle>
                      <DialogDescription className=" w-max-full">
                        <Image
                          src={feature3.image}
                          alt={feature3.title}
                          width={1920}
                          height={1080}
                          className="mt-8 aspect-[1.5] h-full rounded-xl w-full object-contain lg:aspect-[2.4] "
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-3/5">
                <h2 className="text-xl font-semibold">{feature4.title}</h2>
                <p className="text-muted-foreground">{feature4.description}</p>

                <Dialog>
                  <DialogTrigger className="cursor-pointer">
                    <Image
                      src={feature4.image}
                      alt={feature4.title}
                      width={1920}
                      height={1080}
                      className="aspect-[1.5] h-full w-full object-contain lg:aspect-[2.4]"
                    />
                  </DialogTrigger>
                  <DialogContent className="min-w-[calc(100%-4rem)] h-[calc(100svh-4rem)]">
                    <DialogHeader>
                      <DialogTitle>Admin Dashboard</DialogTitle>
                      <DialogDescription className=" w-max-full">
                        <Image
                          src={feature4.image}
                          alt={feature4.title}
                          width={1920}
                          height={1080}
                          className="mt-8 aspect-[1.5] h-full w-full object-contain lg:aspect-[2.4]"
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature166 };
