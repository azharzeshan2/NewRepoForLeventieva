import React, { Component } from "react";

import sdata from "./s_data";

import SliderCards from "./SliderCards";

function SlidesThird() {
  return (
    <section className=" bg-bgsllides body-font  ">
      <h1 className="text-center text-4xl pt-10  font-normal font-Anton m-auto justify-center">
        TOP ARTICLES
      </h1>
      <div className="container py-10 mx-auto   max-w-5xl xl:max-w-5xl 2xl:max-w-7xl md:px-8  xl:mx-auto justify-between">
        <div className="flex flex-wrap -m-4">
          {sdata.map((item) => (
            <SliderCards data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SlidesThird;
