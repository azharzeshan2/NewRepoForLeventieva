import React from "react";

function CardsAllnews({ cards }) {
  return (
    <section className="flex flex-row ">
      <div className=" flex flex-wrap justify-center m-auto  text-gray-600 body-font overflow-hidden">
        <div class="container  mx-auto ">
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-col md:flex-nowrap ">
              <div class=" p-5 rounded-lg   md:flex-grow xl:flex xl:flex-row flex flex-col">
                <img src={cards.imagee} alt="" />
                <div className="flex flex-col xl:p-5 p-2 justify-center">
                  <h2 class="text-2xl font-normal 2xl:text-3xl font-Anton text-black mb-2">
                    {cards.tittle}
                  </h2>
                  <p class="leading-relaxed text-sm 2xl:text-xl font-merwator text-black">
                    {cards.paragrap}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsAllnews;
