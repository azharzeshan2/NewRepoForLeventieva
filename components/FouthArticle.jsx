import CardForAllArticles from "./CardForAllArticles";
import SecondCardForALlarticles from "./SecondCardForALlarticles";
import allarticledata from "./allarticle_data";

function FouthArticle() {
  return (
    <div className="flex  py-16   ">
      <div className="hidden xl:flex xl:flex-col lg:flex  justify-center">
        <img
          src="/leftsidecircle.png"
          alt=""
          className="  xl:h-80 2xl:h-96 lg:h-0  "
        />
      </div>
      <div className="flex flex-col md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row  xl:mx-16 mx-4 xl:max-w-5xl 2xl:max-w-7xl 2xl:ml-mar">
        <div className="xl:flex xl:flex-row text-gray-600 body-font overflow-hidden ">
          <div class="xl:w-11/12  divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-col md:flex-nowrap">
              <h1 className="text-4xl 2xl:text-7xl text-black  pb-4 pl-1 mt-6 md:mt-0 ">
                All Articles
              </h1>
              {allarticledata.map((items) => (
                <CardForAllArticles datas={items} />
              ))}
            </div>
          </div>

          {/* second section */}
          <div className="xl:w-4/12 ">
            <SecondCardForALlarticles />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FouthArticle;
