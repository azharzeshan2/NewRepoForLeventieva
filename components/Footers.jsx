import React from "react";

function Footers() {
  return (
    <footer class="text-white  bg-black body-font">
      <div class="container max-w-5xl 2xl:max-w-7xl  py-24 mx-auto">
        <div class="flex flex-wrap md:text-left text-center order-first">
          <div class="lg:w-3/6 md:w-1/2 w-full px-4">
            <h2 class="title-font text-4xl ml-3 font-normal text-white text-sm mb-3">
              Leventieva
            </h2>

            <p class="text-white  ml-3 font-merwator text-base   mt-2 md:text-left text-center">
              Get all my best stuff in your inbox.
            </p>
            <div className="xl:flex xl:flex-col -ml-3  mx-auto justify-center md:justify-start flex flex-row mt-4 ">
              <form
                method="post"
                id="revue-form"
                name="revue-form"
                target="_blank"
              >
                <div class=" flex flex-row   sm:flex-row sm:space-y-0">
                  <div class="revue-form-group">
                    <label for="member_email" class="sr-only">
                      Email address
                    </label>
                    <input
                      class="font-merwator inline-block h-10 py-3 xl:pl-6 pl-3 pr-3   text-white-800 placeholder-white transform translate-x-6 bg-black border border-white-900 rounded-l-full  revue-form-field sm:rounded-r-none focus:outline-none"
                      required=""
                      placeholder="Enter your email"
                      type="email"
                      name="member[email]"
                      id="member_email"
                    />
                  </div>
                  <div class="relative z-10 revue-form-actions">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="member[subscribe]"
                      id="member_submit"
                      class="inline-block h-10 xl:px-5 xl:py-0  p-2 font-normal font-merwator text-lg text-center text-black transition-all duration-700 rounded-full cursor-pointer bg-white  focus:outline-none active:outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="flex flex-row xl:pt-5 xl:pl-2 py-3  md:justify-start justify-center xl:justify-start">
              <img src="/fbfooter.png" alt="" className="p-2 " />
              <img src="/footerinsta.png" alt="" className="p-2 " />
              <img src="/twitterfotter.png" alt="" className="p-2 " />
            </div>
          </div>
          <div class="lg:w-1/6  mx-auto   justify-between ">
            <h2 class="font-fira font-bold text-white tracking-widest text-base mb-3">
              HOME
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-white font-fira font-normal text-base hover:text-white">
                  BLOG
                </a>
              </li>
              <li>
                <a class="text-white font-fira font-normal text-base hover:text-white">
                  PODCAST
                </a>
              </li>
              <li>
                <a class="text-white font-fira font-normal text-base hover:text-white">
                  EVENTS
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/6 mx-auto justify-between ">
            <h2 class="font-fira font-bold text-white tracking-widest text-base mb-3">
              ARTICLES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-white font-fira font-normal text-base hover:text-white">
                  RECENT PRESS
                </a>
              </li>
              <li>
                <a class="text-white font-fira font-normal text-base hover:text-white">
                  BOOKS
                </a>
              </li>
              <li>
                <a class="text-white font-fira font-normal text-base hover:text-white">
                  MY STORY
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/6  mx-auto justify-between ">
            <h2 class="font-fira font-bold text-white tracking-widest text-base mb-3">
              WALLPAPERS
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-white font-fira font-normal text-base hover:text-white">
                  PRESS KIT
                </a>
              </li>
              <li>
                <a class="text-white font-fira font-normal text-base hover:text-white">
                  PODCAST
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
