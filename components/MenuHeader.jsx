function MenuHeader() {
  return (
    <section class="z-10 ">
      <nav className="  flex items-center  bg-white-800 p-3 flex-wrap shadow-sm">
        <span className=" font-Anton text-4xl pl-3  pt-3 leading-10 text-black font-extrabold">
          Leventieva
        </span>

        <button
          class=" text-black inline-flex p-3 hover:bg-white-900 rounded lg:hidden ml-auto hover:text-black outline-none nav-toggler"
          data-target="#navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
          id="navigation"
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto  pt-3 lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <a
              href="#"
              className="font-fira lg:inline-flex font-thin active:font-bold lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center  "
            >
              <span>Home</span>
            </a>
            <a
              href="#"
              className="font-fira lg:inline-flex  font-thin  active:font-bold lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center "
            >
              <span>About</span>
            </a>
            <a
              href="#"
              className="font-fira lg:inline-flex font-thin active:font-bold lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center"
            >
              <span>Services</span>
            </a>
            <a
              href="#"
              className="font-fira lg:inline-flex font-thin active:font-bold lg:w-auto w-full px-3  rounded text-black items-center justify-center"
            >
              <span>
                <img src="/Vector.png" alt="" className="h-7 w-7" />
              </span>
            </a>
            <a
              href="#"
              className="font-fira lg:inline-flex font-thin active:font-bold lg:w-auto w-full px-3  rounded text-black items-center justify-center"
            >
              <span>
                <img src="/insta.png" alt="" className="h-7 w-7" />
              </span>
            </a>
            <a
              href="#"
              className="font-fira  lg:inline-flex font-thin active:font-bold lg:w-auto w-full px-3  rounded text-black items-center justify-center"
            >
              <span>
                <img src="/twitter.png" alt="" className="h-7 w-7" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default MenuHeader;
