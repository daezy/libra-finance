import lineImg from "../assets/Rectangle 40857.png";
import pointerImg from "../assets/pointer.png";

const HowItWorks = () => {
  return (
    <div className="bg-[#000618]  py-16  relative " id="features">
      <div className=" container mx-auto px-4">
        <div className="sm:mb-3 mt-0 my-10 ">
          <h2 className="text-white sm:text-[30px] text-4xl text-center">
            HOW IT WORKS
          </h2>
        </div>
        <div className="md:flex relative justify-center mt-10 items-center  flex-col">
          <div
            data-aos="fade-up"
            className="w-[100%]  z-40   pb-4 md:flex justify-end"
          >
            <div className="flex gap-4 items-center     md:w-[51%]">
              <div className="bg-yellow-400 w-11 h-11 z-30 relative p-4 rounded-full shadow-xl shadow-yellow-500 border-2 border-solid border-yellow-300 flex items-center justify-center">
                <p className="font-[800] text-[30px] text-white">1</p>
                <div className="absolute top-5 right-[-18px]  w-[15px] h-[3px]">
                  <img src={pointerImg} className="w-full h-full" alt="" />
                </div>
              </div>
              <div className="text-[#D2D2D2] relative bg-[#28649745] rounded-2xl px-5 py-8 border border-solid border-slate-700">
                <p>
                  Dive into Libra Bank, the freedom tool that combines interest
                  with flexibility. Earn a competitive APY that ensures steady
                  gains while enjoying the liberty to withdraw at any time.
                  Libra Bank is your gateway to consistent, medium APY returns.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="w-[100%] md:pl-[50px]  pb-4 z-40">
            <div className="flex md:flex-row-reverse gap-4 items-center md:w-[51%]">
              <div className="bg-purple-500 w-11 h-11 relative z-30 p-4 rounded-full shadow-xl shadow-indigo-500 border-2 border-solid border-purple-400 flex items-center justify-center">
                <p className="font-[800] text-[30px] text-white">2</p>
                <div className="absolute top-5 md:left-[-18px] right-[-18px]  w-[15px] h-[3px]">
                  <img src={pointerImg} className="w-full h-full" alt="" />
                </div>
              </div>
              <div className="text-[#D2D2D2] relative bg-[#28649745] rounded-2xl px-5 py-8 border border-solid border-slate-700">
                <p>
                  Fixed APY and Dynamic Rewards: Enjoy a fixed APY of 2,120% on
                  your mining deposits. However, please note that this APY is
                  subject to change based on the volume of activity on the Libra
                  Miner platform. The more activity, the higher the potential
                  rewards.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="w-[100%]  pb-4 z-40 md:flex justify-end"
          >
            <div className="flex gap-4 items-center md:w-[51%]">
              <div className="bg-green-600 w-11 h-11 relative z-[99] p-4 rounded-full shadow-xl shadow-green-500 border-2 border-solid border-green-300 flex items-center justify-center">
                <p className="font-[800] text-[30px] text-white">3</p>
                <div className="absolute top-5 right-[-18px]  w-[15px] h-[3px]">
                  <img src={pointerImg} className="w-full h-full" alt="" />
                </div>
              </div>
              <div className="text-[#D2D2D2] relative bg-[#28649745] rounded-2xl px-5 py-8 border border-solid border-slate-700">
                <p>
                  Reinvestment Option: Miners have the option to reinvest their
                  earned Solana back into the mining pool, compounding their
                  returns and maximizing their mining potential. Reinvesting
                  allows miners to accelerate their earnings and capitalize on
                  the growing opportunities within the mining ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute block  top-0 sm:w-[2%] w-[1%] z-0  h-[100%] md:left-[50%] left-4 ">
            <img
              src={lineImg}
              className="w-full h-full z-1 md:opacity-100 opacity-50"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
