import React from "react";

const SliderCards = ({ data }) => {
  return (
    <div className="p-4 md:w-1/3 ">
      <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
        <img
          className="lg:h-80 md:h-52 w-full object-cover object-center"
          src={data.imgsrc}
          alt="blog"
        />
        <div className="p-6">
          <h1 className=" font-normal text-base font-medium text-gray-900 mb-3">
            {data.title}
          </h1>
          <p className="leading-relaxed mb-3 font-merwator pr-4 text-xs font-normal">
            {data.paragrph}
          </p>
          <div className="flex items-center flex-wrap ">
            <a className="text-black-500 inline-flex text-xs font-normal font-black font-merwator items-center md:mb-2 lg:mb-0">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCards;
