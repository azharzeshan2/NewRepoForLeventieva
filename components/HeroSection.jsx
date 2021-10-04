function HeroSection() {
  return (
    <section class="text-gray-600 body-font  ">
      <div className="flex ">
        <img
          src="/sidecircle.png"
          alt=""
          className=" hidden  xl:inline-block lg:inline-block  md:inline-block 2xl:inline-block xl:h-80 lg:h-60  2xl:h-96 md:h-52 sm:h-36  h-20  "
        />
        <div class=" flex  mx-auto 2xl:space-x-0 space-x-4 2xl:max-w-7xl max-w-5xl xl:max-w-5xl xl:mx-auto xl:justify-between  xl:py-24 lg:py-24 2xl:py-24 py-5 md:py-12  md:flex-row flex-col ">
          <div class="flex   md:w-3/5 lg:w-1/2 2xl:w-3/5  xl:w-3/6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 px-5 ">
            <h1 class=" sm:text-4xl  xl:text-6xl 2xl:text-8xl md:text-3xl  text-2xl mb-4 font-medium text-gray-900 ">
              I am
              <br class="hidden lg:inline-block md:inline-block" />
              Yoana Leventieva <br />
              Marketing Expert
            </h1>
            <p class="mb-8 leading-relaxed font-merwator  2xl:text-xl mr-28 md:mr-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              felis, sed ullamcorper tempus faucibus in imperdiet.
            </p>
            <div class="flex xl:justify-center">
              <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none  font-merwator text-lg">
                Get Started
              </button>
              <button class="ml-4 border inline-flex text-black-700 bg-white-100 border-1 py-2 px-6 font-merwator focus:outline-none   text-lg">
                Learn More
              </button>
            </div>
            <h1 className="font-merwator font-normal mt-6  ">Featured on</h1>
            <div className="flex mt-5  ">
              <img src="/techcrunch.png" alt="" className="w-20 h-14 " />
              <img src="/yahoo.png" alt="" className="w-20 h-10 mx-6 " />
              <img
                src="/Banner.png"
                alt=""
                className="w-20 h-8  align-bottom "
              />
            </div>
          </div>
          <div class="2xl:w-1/2 xl:pl-24 2xl:w-2/5 lg:w-1/2 xl:pl-24 lg:3/6 md:w-2/5 xl:w-3/6 mx-auto justify-between  2xl:mx-auto  2xl:m-auto  2xl:w-4/12">
            <img
              class="object-cover lg:h-96 2xl:h-3/4 xl:2/4 "
              alt="hero"
              src="/Group.svg"
            />
          </div>
        </div>
        <img
          src="/sidecircle2.svg"
          alt=""
          className="pt-80 lg:w-28 2xl:w-40  xl:w-40 w-16 hidden xl:inline-block lg:inline-block md:inline-block 2xl:inline-block "
        />
      </div>
    </section>
  );
}

export default HeroSection;
