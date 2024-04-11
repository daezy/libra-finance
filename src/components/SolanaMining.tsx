import sectionImage from "../assets/miningPicture.png";

const SolanaMining = () => {
  return (
    <div className=" bg-[#000618] py-16 ">
      <div className="container mx-auto px-4 md:grid grid-cols-2 gap-3 items-center">
        <div
          className="md:block hidden lg:w-[70%] md:w-[90%]"
          data-aos="fade-right"
        >
          <img src={sectionImage} className="w-full" alt="" />
        </div>
        <div className="order-2   md:order-1 md:pt-0 " data-aos="fade-left">
          <div className="lg:block flex flex-col justify-center ">
            <div className="sm:mb-3 mb-5 my-3">
              <h2 className="text-white text-4xl">
                Libra Miner: Unlocking the Power of Solana Mining
              </h2>
            </div>
          </div>
          <div className="">
            <p className="text-gray-500">
              Libra Miner offers a revolutionary approach to Solana mining,
              providing users with a seamless and rewarding experience. Dive
              into the world of decentralized mining and harness the potential
              of Solana with Libra Miner.
            </p>
          </div>
          <div className="mt-8 lg:block ">
            <a href="https://miner.libra-finance.app">
              <button className=" px-5 py-3 w-full bg-gradient-to-r from-blue-900 to-blue-400 rounded-md">
                <p className="text-white font-bold sm:text-lg text-md">
                  JOIN NOW
                </p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolanaMining;
