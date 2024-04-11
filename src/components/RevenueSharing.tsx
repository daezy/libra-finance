import sectionImg from "../assets/hodlbot_illustration 1.png";

const RevenueSharing = () => {
  return (
    <div className="bg-[#000618] py-16 relative ">
      <div className="container mx-auto px-4 md:grid  md:grid-cols-2 gap-3 items-center">
        <div className="order-2 md:order-1" data-aos="fade-right">
          <div className="lg:block flex flex-col justify-center ">
            <div className="p-1 bg-white  flex items-start relative text-center mb-6 md:w-[450px]">
              <div className="bg-blue-600 absolute sm:h-[46px] h-[34px] w-1 top-0 -left-1  py-1 "></div>
              <h3 className="text-blue-600 font-semibold px-2 sm:text-[25px] text-[17px] ">
                Revenue Sharing and Sustainability
              </h3>
            </div>
          </div>
          <div className="">
            <p className="text-gray-500">
              The 4% fee collected on deposits and withdrawals is reinvested
              back into the mining pool, contributing to the sustainability and
              growth of the Libra Miner ecosystem. This revenue-sharing model
              ensures that miners, both inside and outside the Libra community,
              benefit from the success of the platform.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="order-1 md:order-2 mb-4 md:mt-0 mt-10"
        >
          <img src={sectionImg} alt="section" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default RevenueSharing;
