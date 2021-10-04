import React from "react";

function SecondCardForALlarticles() {
  return (
    <section className="flex flex-col">
      <div className="  px-5 pt-24  pb-6 xl:w-10/12">
        <div class="p-0">
          <div class="bg-white flex items-center md:w-11/12 xl:w-72 rounded-full w-72 border">
            <input
              class="rounded-lg w-full py-0 px-6 text-black font-merwator  focus:outline-none"
              id="search"
              type="text"
              placeholder="Search here"
            />

            <div class="p-4">
              <button class=" text-black rounded-full p-0  focus:outline-none w-10 h-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6 ">
        <h1 className="font-merwator font-bold text-xs">Category</h1>
        <div className="">
          <ul className="xl:flex xl:flex-col flex flex-row md:flex md:flex-row space-x-5 xl:space-x-0 md:space-x-6  list-disc xl:pl-10 pl-6 pt-4">
            <li className="font-merwator pb-2 font-normal text-xs">
              Category 1
            </li>
            <li className="font-merwator pb-2 font-normal text-xs">
              Category 2
            </li>
            <li className="font-merwator pb-2  font-normal text-xs">
              Category 3
            </li>
            <li className="font-merwator pb-2 font-normal text-xs">
              Category 4
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-merwator font-bold pt-4 text-xs">
            Latest Articles
          </h1>
          <div className="flex  pt-4  flex-row  justify-left ">
            <img src="/list-small.png" alt="" />
            <p className="font-merwator text-normal md:py-6 p-2 xl:py-2 justify-left   text-xs">
              chunks as necessary, making this the first true generator
            </p>
          </div>
          <div className="flex  pt-4  flex-row  ">
            <img src="/list-small.png" alt="" />
            <p className="font-merwator text-normal md:py-6 xl:py-2 p-2  text-xs">
              chunks as necessary, making this the first true generator
            </p>
          </div>
          <div className="flex  pt-4  flex-row ">
            <img src="/list-small.png" alt="" />
            <p className="font-merwator text-normal md:py-6 xl:py-2 p-2 justify-left  text-xs">
              chunks as necessary, making this the first true generator
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6  py-5 ">
        <div className="bg-black p-6">
          <h1 className="xl:text-3xl     md:text-3xl  text-2xl font-anton text-center  md:text-center xl:text-left  font-normal text-white mb-5">
            SUBSCRIBE FOR ACCESS TO EXCLUSIVE CONTENT.
          </h1>
          <div className="md:flex md:flex-row flex flex-row md:justify-center justify-center xl:justify-start ">
            <button className="font-merwator  text-black bg-white text-xs  px-5 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondCardForALlarticles;
