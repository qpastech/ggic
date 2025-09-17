import BackgroundVideo from "@/components/ui/BackgroundVideo";
import BtnLink from "@/components/ui/BtnLink";
import React from "react";

const Page = () => {
  return (
    <main>
      <div className="h-[calc(100vh-130px)] lg:h-[calc(100vh-170px)]">
        <BackgroundVideo
          src="/video/welcome.mkv"
          childrenClassName="h-full text-white pt-40 lg:pt-20 pl-5 lg:pl-20"
        >
          <div>
            <div className="flex flex-col gap-4 lg:gap-8">
              <h1 className="font-extrabold lg:text-[76px] text-4xl sm:text-5xl">
                Equipping.
              </h1>
              <h1 className="font-extrabold lg:text-[76px] text-4xl sm:text-5xl">
                Transforming.
              </h1>
              <h1 className="font-extrabold lg:text-[76px] text-4xl sm:text-5xl">
                Come expectant.
              </h1>
              <h1 className="font-extrabold lg:text-[76px] text-4xl sm:text-5xl">
                Be transformed
              </h1>
            </div>
            <p className="mt-10 w-100 text-lg">
              Join us Sundays at 9am · Grace to Grace International Church,
              Dagenham, RM10 8PS Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magnam ipsum voluptatem veniam inventore,
              consectetur amet nihil. ea?
            </p>
            <BtnLink href="plan-your-visit" className="mt-10">
              Plan Your Visit
            </BtnLink>
          </div>
        </BackgroundVideo>
      </div>
    </main>
  );
};

export default Page;
