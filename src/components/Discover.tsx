import sectionImg from "../assets/bigPic.png";
const Discover = () => {
  return (
    <div className="bg-[#000618] pt-20  pb-[80px] relative ">
      <div className="container mx-auto px-4">
        <div className="sm:mb-3 mb-5">
          <h2 className="text-white text-4xl my-3 text-center ">
            Discover the Magnitude of Your Gains:
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <div className="hidden md:block" data-aos="fade-right">
            <img src={sectionImg} alt="discover" />
          </div>
          <div className="flex flex-col gap-5" data-aos="fade-up">
            <div className="text-[#D2D2D2] bg-[#28649745] rounded-2xl px-5 py-8 border border-solid border-slate-700">
              <p>
                Witness financial miracles with our flagship staking option.
                Stake your Libra tokens and watch your returns skyrocket with an
                astonishing APY of up to 2639%! This isn't just a staking plan;
                it's a wealth-building extravaganza.
              </p>
            </div>
            <div className="text-[#D2D2D2] bg-[#28649745] rounded-2xl px-5 py-8 border border-solid border-slate-700">
              <p>
                Dive into Libra Bank, the freedom tool that combines interest
                with flexibility. Earn a competitive APY that ensures steady
                gains while enjoying the liberty to withdraw at any time. Libra
                Bank is your gateway to consistent, medium APY returns.
              </p>
            </div>
            <div className="text-[#D2D2D2] bg-[#28649745] rounded-2xl px-5 py-8 border border-solid border-slate-700">
              <p>
                Simplify your journey to wealth with Auto Staking, offering the
                ease of staking directly from your wallet. While the APY may be
                lower, the simplicity is unmatched, making it an effortless yet
                rewarding investment strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
