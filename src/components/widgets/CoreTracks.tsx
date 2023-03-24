import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import { coreCourses } from "@/data/coreCourses";

const CoreTracks = () => {
  //in order to get line break in paragraph we assign it to a variable and pass its name as value in <p> tag and pass tialwind class "whitespace-pre-line"
  const header = "Core Courses \n (Common in all Specialization):";
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        <div className="max-w-screen-md">
          <h4 className="text-teal-800 font-semibold text-lg mt-4">
            Programme of studies
          </h4>
          <h2 className="text-5xl font-bold whitespace-pre-line">{header}</h2>
          <p className="mt-3 text-xl text-gray-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>

          <div className="mt-4">
            <Button text="Learn More" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row my-20 gap-x-8 gap-y-6">
          {coreCourses.map((item, i) => (
            <div className="flex flex-col flex-1 justify-center border rounded-md relative px-8 py-16">
              <h4 className="font-bold text-lg">{item.heading}</h4>
              <p className="mt-2 text-gray-600 z-0">{item.description}</p>
              <div className="absolute text-gray-200 -top-8 right-10 text-[170px] font-bold -z-10">
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
