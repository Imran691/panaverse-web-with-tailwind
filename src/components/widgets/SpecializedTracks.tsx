import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import QuarterBox from "@/components/shared/QuarterBox";
import { coreCourses } from "@/data/coreCourses";

const SpecializedTracks = () => {
  return (
    <section>
      <Wrapper>
        <div>
          <h2 className="text-5xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-xl text-gray-600">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>

        <div className="mt-8">
          <div className="shadow-xl rounded-xl border border-slate-200 py-8 px-8">
            <h4 className="text-lg text-teal-700">Specialized Program</h4>
            <h3 className="text-2xl font-bold">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h3>
            <p className="text-lg text-slate-600 mt-2">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <button className="text-teal-700 text-xl mt-4 underline flex gap-x-2 items-end">
              Learn more{" "}
              <svg className="mb-1.5"
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
          </div>

          <div className="flex flex-col md:flex-row my-20 gap-x-8 gap-y-6">
          {coreCourses.map((item, i) => (
            <QuarterBox 
            heading={item.heading}
            description={item.description}
            number={item.number}
            />
          ))}
          </div>

          <div>right side</div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
