import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const Panel = (props: {
  desc: string;
  img: StaticImageData;
  glowimg: StaticImageData;
  title: string;
  link: string;
}) => {
  return (
    <div className="my-36 flex flex-col md:flex-row justify-center w-[90vw] mx-auto">
      <div className="relative hidden md:block basis-[50%]">
        <Image
          src={props.glowimg}
          alt="glow"
          className="z-[-1] absolute left-[2px] top-[1rem]"
        />
        <Image src={props.img} alt="hero" />
      </div>
      <div className="flex flex-col basis-[35%] justify-center items-center mx-auto ">
        <h1 className="text-white font-DM Sans font-bold text-6xl my-5">
          {props.title}
        </h1>

        <div className=" relative md:hidden basis-[50%]">
          <Image
            src={props.glowimg}
            alt="glow"
            className="z-[-1] absolute left-[2px] top-[1rem]"
          />
          <Image src={props.img} alt="hero" />
        </div>
        <p className="text-[#ffffffae] text-center md:text-left font-light font-DM_Sans text-base my-9">
          {props.desc}
        </p>
        <Link href={props.link}>
          <button className="bg-[#ffffff]  text-[#212121] font-medium text-base mt-2 rounded-2xl px-10 py-2 w-96 hover:scale-105">
            Learn More &gt;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Panel;
