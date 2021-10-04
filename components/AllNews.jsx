import React from "react";
import article_data from "./article_data";
import CardsAllnews from "./CardsAllnews";
function AllNews() {
  return (
    <div className="flex flex-row py-10 ">
      <div className="flex xl:pl-16 flex-col justify-end  max-w-5xl xl:max-w-5xl  lg:max-w-5xl 2xl:max-w-7xl lg:mx-auto xl:mx-auto mx-auto">
        {article_data.map((items) => (
          <CardsAllnews cards={items} />
        ))}
        <h1 className="font-merwator text-black flex flex-row justify-end ">
          More News{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </h1>
      </div>
      <div className=" flex flex-col justify-center">
        <img
          src="rightcirclelast.png"
          alt=""
          className="h-60 2xl:h-96  hidden xl:inline-block"
        />
      </div>
    </div>
  );
}

export default AllNews;
