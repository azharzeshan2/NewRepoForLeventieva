import React from "react";

function SubscribeLetter() {
  return (
    <section className="border xl:mx-80 2xl:w-6/12 2xl:justify-center 2xl:m-auto  rounded-lg bg-white shadow-lg xl:p-10 py-8">
      <div className="flex flex-col justify-center  md:items-center">
        <h1 className="xl:text-5xl md:text-5xl text-4xl 2xl:text-7xl  font-normal text-center">
          Subscribe to our newsletter
        </h1>
        <p className="font-merwator 2xl:text-2xl  xl:px-16 2xl:px-60 md:px-32 px-10 py-5 xl:test-base text-sm  font-normal text-center">
          making it look like readable English. Many desktop publishing packages
          and web page editors now
        </p>
      </div>
      <div className="xl:flex xl:flex-col flex flex-row justify-center  space-x-0  mt-2 md:items-center">
        <form
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
          className=""
        >
          <div class="flex flex-row xl:flex  xl:flex-row xl:space-y-0  sm:flex-row sm:space-y-0">
            <div class="revue-form-group">
              <label for="member_email" class="sr-only">
                Email address
              </label>
              <input
                class="font-merwator inline-block h-12 2xl:h-20 py-3 2xl:py-8 xl:pl-6 md:pl-6 md:pr-2 xl:pr-12 pl-2 pl-6 -ml-6 text-gray-800 placeholder-gray-500 transform translate-x-6 bg-white border border-gray-300 rounded-l-full  revue-form-field sm:rounded-r-none focus:outline-none"
                required=""
                placeholder="Enter your email "
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
                class="inline-block font-merwator font-normal 2xl:text-3xl text-lg h-12 2xl:h-20 xl:px-5 px-3 py-3 2xl:px-10  font-semibold text-center text-white transition-all duration-700 rounded-full cursor-pointer bg-black hover:from-indigo-500 hover:to-indigo-600 focus:outline-none active:outline-none"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SubscribeLetter;
