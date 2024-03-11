import image1 from "../assets/Group 1171275004.png";
import image2 from "../assets/Group 1171275005.png";
import image3 from "../assets/Group 1171275006.png";
import sectionImg from "../assets/bothPhones.png";

const Interest = () => {
  return (
    <div className="bg-[#000618]  pb-[100px] relative ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center container mx-auto px-4 ">
        <div className="">
          <div className="md:block flex flex-col justify-center">
            <div className="p-1 bg-white mb-1 flex items-start relative text-center w-[250px]">
              <div className="bg-blue-600 absolute h-8 w-1 top-0 -left-1 py-1"></div>
              <h3 className="text-blue-600 font-semibold px-2 ">
                LIBRA INTEREST PROTOCOLS
              </h3>
            </div>
            <div className="sm:mb-3 mb-5">
              <h2 className="text-white text-2xl md:text-4xl my-3">
                Experience the Unprecedented: Libra Finance's Industry-Leading
                APY!
              </h2>
            </div>
          </div>
          <div>
            <p className="text-gray-500">
              Unleash the power of your investments with Libra Finance, the
              undisputed leader in the industry, offering the largest Annual
              Percentage Yield (APY) that exceeds all expectations.
            </p>
          </div>
          <div className="flex justify-between mt-3">
            <div>
              <img src={image1} alt="" className="md:w-[150px] w-[100px]" />
            </div>
            <div>
              <img src={image2} alt="" className="md:w-[150px]  w-[100px]" />
            </div>
            <div>
              <img src={image3} alt="" className="md:w-[150px]  w-[100px]" />
            </div>
          </div>
        </div>

        <div className="w-[100%] lg:block hidden">
          <img src={sectionImg} alt="section" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Interest;
