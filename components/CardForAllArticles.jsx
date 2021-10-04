import React from "react";
function CardForAllArticles({ datas }) {
  return (
    <div class=" flex flex-col border  py-10 px-2 xl:my-2 lg:my-2 rounded-lg shadow-xl md:flex-row  lg:flex-row xl:flex xl:flex-row">
      <img
        src={datas.imagee}
        alt=""
        className="h-48 w-52 justify-center mx-auto xl:mx-0"
      />
      <div className="flex flex-col p-5 justify-center">
        <h2 class="text-2xl 2xl:text-4xl font-normal font-Anton text-black mb-2">
          {datas.tittle}
        </h2>
        <p class="leading-relaxed text-sm 2xl:text-lg font-merwator text-black">
          {datas.paragrap}
        </p>
      </div>
    </div>
  );
}

export default CardForAllArticles;
