
import DappStats from "./DappStats";

const Tokenocomics = () => {
  return (
    <div className="bg-[#000618] py-[100px] relative ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <div className="order-2 md:order-1" data-aos="fade-right">
          <div className="lg:block flex flex-col justify-center ">
            <div className="p-1 bg-white mb-1 flex items-start relative text-center w-[300px]">
              <div className="bg-blue-600 absolute h-8 w-1 top-0 -left-1  py-1 "></div>
              <h3 className="text-blue-600 font-semibold px-2 ">
                GET STARTED WITH LIBRA FINANCE
              </h3>
            </div>
            <div className="sm:mb-3 mb-5 my-3">
              <h2 className="text-white text-4xl">
                Join The Libra Finance Community
              </h2>
            </div>
          </div>
          <div className="">
            <p className="text-gray-500">
              Connect with us on social media, explore our roadmap, and be part
              of the Libra Finance vision. <br />
              Engage with a vibrant community dedicated to shaping the future of
              DeFi.
            </p>
          </div>
          <div className="mt-8 lg:block flex">
            <a href="https://t.me/libraprotocolsol">
              <button className=" px-5 py-3 w-full bg-gradient-to-r from-blue-900 to-blue-400 rounded-md">
                <p className="text-white font-bold sm:text-lg text-md">
                  JOIN NOW
                </p>
              </button>
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 mb-4">
          {/* <img src={sectionImg} alt="section" className="w-full" />

          <div>
            <p className="text-center text-blue-500 font-semibold text-[30px]">
              TOKENOMICS
            </p>
          </div> */}

          <DappStats />
        </div>
      </div>
    </div>
  );
};

export default Tokenocomics;
