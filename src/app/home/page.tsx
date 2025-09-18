import FlexContent, { FlexContentProps } from "@/components/common/FlexContent";
import UpcomingEvents from "@/components/modules/UpcomingEvents";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import BtnLink from "@/components/ui/BtnLink";
import { upcoming_events } from "@/data/events";
import React from "react";

const welcomeSection: FlexContentProps = {
  imgPosition: "right",
  image: "/pictures/worship.jpg",
  title: "Welcome",
  content:
    "Church is not the same without you. Whether you’re exploring faith, new to the area, or looking for a church home — you belong here. Church is not the same without you. Whether you’re exploring faith, new to the area, or looking for a church home — you belong here. Church is not the same without you. Whether you’re exploring faith, new to the area, or looking for a church home — you belong here.",
  ctaHref: "http://localhost:4000/plan-your-visit",
  ctaTitle: "Join Us",
};

const serviceTimeSection: FlexContentProps = {
  imgPosition: "left",
  image: "/pictures/pastor.jpg",
  title: "Service Times & Location",
  content:
    "Join us every Sunday at 9am · Redif, Graceland, Wantz Rd, Dagenham RM10 8PS. Parking and children’s check-in are available when you visit.Join us every Sunday at 9am · Redif, Graceland, Wantz Rd, Dagenham RM10 8PS. Parking and children’s check-in are available when you visit.Join us every Sunday at 9am · Redif, Graceland, Wantz Rd, Dagenham RM10 8PS. Parking and children’s check-in are available when you visit",
  ctaHref: "http://localhost:4000/plan-your-visit",
  ctaTitle: "Plan Your Visit",
};

const Page = () => {
  return (
    <main>
      <div className="px-25 rounded-2xl h-[calc(100vh-130px)] lg:h-[calc(100vh-170px)] overflow-hidden">
        <BackgroundVideo
          src="/video/welcome.mkv"
          childrenClassName="h-full text-white flex items-center pl-5 lg:pl-20"
          className="rounded-3xl"
        >
          <div className="">
            <div className="flex flex-col gap-4 lg:gap-2 text-white">
              <h1 className="font-extrabold text-white text-4xl sm:text-5xl">
                Equipping.
              </h1>
              <h1 className="font-extrabold text-white text-4xl sm:text-5xl">
                Transforming.
              </h1>
              <h1 className="font-extrabold text-white text-4xl sm:text-5xl">
                Come expectant.
              </h1>
              <h1 className="font-extrabold text-white text-4xl sm:text-5xl">
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
      <section className="mx-5 mt-35">
        <FlexContent {...welcomeSection} imgClassName="w-200 object-cover" />
      </section>
      <section className="mx-5 mt-35">
        <FlexContent
          {...serviceTimeSection}
          imgClassName="w-200 object-cover object-top lg:h-200"
        />
      </section>
      <section className="mt-35">
        <h2 className="text- text-center">Upcoming Events</h2>
        <p className="mx-auto mt-8 max-w-150 text-lg text-center">
          There’s always something happening at Grace to Grace — come be a part
          of what God is doing.
        </p>
        <div className="flex flex-wrap justify-center gap-40 lg:gap-10 mt-20">
          {upcoming_events.map((event) => {
            return (
              <div key={event.id}>
                <UpcomingEvents {...event} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Page;
