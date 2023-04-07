"use client";

import React, { useState } from "react";
import Wrapper from "@/components/shared/Wrapper";
import QuarterBox from "@/components/shared/QuarterBox";
import { specializedCourseData } from "@/data/specializedCoursesData";
import Image from "next/image";

const SpecializedTracks = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");
  const selectedItemData = specializedCourseData.find(
    (item) => item.slug === selectedItem
  );

  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-5xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-xl text-gray-600 max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>

        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
          {/* content left */}
          <div className="self-start sticky top-24 shadow-xl rounded-xl border border-slate-200 py-8 px-8 basis-8/12">
            <h4 className="text-lg text-primary font-medium">
              Specialized Programs
            </h4>
            
            <h3 className="text-2xl font-bold">
              {selectedItemData?.heading}
            </h3>
            <p className="text-lg text-slate-600 mt-2">
              {selectedItemData?.descripton}
            </p>
            <button className="text-primary text-xl mt-4 underline flex gap-x-2 items-end">
              Learn more{" "}
              <svg
                className="mb-1.5"
                width="10"
                height="13"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {selectedItemData?.quarters.map((item) => (
                <QuarterBox
                key={item.number}
                  heading={item.heading}
                  description={item.description}
                  number={item.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>
          {/* content right */}
          <div className="px-4 py-6 basis-4/12 bg-slate-200 space-y-3">
            {specializedCourseData.map((item, i) => (
              <div
                onClick={() => setSelectedItem(item.slug)}
                key={item.slug}
                className="flex gap-x-3 items-center cursor-pointer"
              >
                <div className="flex-shrink-0 h-24 w-36">
                  <Image
                    src={item.image}
                    alt={item.heading}
                    className="h-24 object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-primary font-medium">
                    Specialized Program
                  </h4>
                  <h3 className="text-xl font-semibold">{item.heading}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
