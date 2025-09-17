import Image from "next/image";
import React from "react";
import BtnLink from "../ui/BtnLink";

export type FlexContentProps = {
  image: string;
  title: string;
  content: string;
  imgClassName?: string;
  imgPosition?: "right" | "left";
  ctaHref: string;
  ctaTitle: string;
};
const FlexContent = ({
  image,
  title,
  content,
  imgClassName,
  imgPosition = "left",
  ctaTitle,
  ctaHref,
}: FlexContentProps) => {
  return (
    <div
      className={`flex  justify-center items-center gap-25 flex-wrap ${
        imgPosition === "left"
          ? "flex-col lg:flex-row"
          : "flex-col lg:flex-row-reverse"
      }`}
    >
      <Image
        src={image}
        height={10000}
        width={10000}
        className={`rounded-2xl lg:max-w-150 w-150 h-120 ${imgClassName}`}
        alt={title}
      />

      <div>
        <h2 className="w-full lg:w-150">{title}</h2>
        <p className="mt-10 w-100 text-lg">{content}</p>
        <BtnLink href={ctaHref} className="mt-10 w-full lg:w-fit text-center">
          {ctaTitle}
        </BtnLink>
      </div>
    </div>
  );
};

export default FlexContent;
