import aboutImg from "../assets/Group 1171274998.jpg";
import vector from "../assets/Vector 544.png";

const About = () => {
  return (
    <div className="bg-[#000618] py-[80px]  relative " id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:mx-7 container mx-auto px-4 items-center">
        <div data-aos="fade-right">
          <img
            src={aboutImg}
            alt=""
            className=" md:mt-0 mt-10 rounded-[50px] max-w-full"
          />
        </div>
        <div className="" data-aos="fade-left">
          <div className="md:block flex flex-col justify-center">
            <div className="p-1 bg-white mb-1 flex items-start relative text-center w-[80px]">
              <div className="bg-blue-600 absolute h-8 w-1 top-0 -left-1 py-1"></div>
              <h3 className="text-blue-600 font-semibold px-2">ABOUT</h3>
            </div>
            <div className="sm:mb-3 my-3 mb-5">
              <h2 className="text-white text-4xl ">What is Libra Finance?</h2>
            </div>
          </div>
          <div>
            <p className="text-gray-500">
              Libra Finance is not just a project; it's a journey into the
              future of decentralized finance. <br /> As you explore our
              meticulously crafted ecosystem, each section unfolds with
              sophistication, offering unparalleled opportunities for investors
              seeking innovation, security, and substantial returns.
            </p>
            <br />
            <p className="text-gray-500">
              In every section, Libra Finance whispers promises of innovation,
              security, and unparalleled returns. As an investor, you are not
              merely participating; you are becoming a part of the future of
              decentralized finance. Join us in shaping the narrative, and let
              Libra Finance be the canvas for your financial masterpiece.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-0 rotate-180 ">
        <img src={vector} alt="w-full" />
      </div>
      <div className="absolute w-[500px] h-[500px] p-4 bg-blue-400 -top-[85px] shadow-xl -right-[170px] opacity-5 rounded-full bg-opacity-20 blur"></div>
    </div>
  );
};

export default About;
