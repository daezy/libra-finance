import homeImg from "../assets/IMG_4825 2.jpg";
import arrowImg from "../assets/Arrow_03.png";
import vector from "../assets/Vector 544.png";

const Home = () => {
  return (
    <div className="bg-[#000618] py-12 pb-16  relative" id="home">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2  gap-3 items-center sm:mx-9 mx-4">
        <div className="">
          <div className="pb-3">
            <h1 className="text-4xl md:text-6xl text-white font-bold leading-normal">
              <span className="text-blue-500 ">Libra Finance</span>, The Highest
              Reward Defi Protocol
            </h1>
          </div>
          <div className="pb-5 text-gray-400 " data-aos="zoom-in">
            <p className="text-lg">
              Introducing Solana{"'"}s First Rebase Token And Interest
              Derivative. Join Us In Shaping The Narrative, And Let Libra
              Finance Be The Canvas For Your Financial Masterpiece.
            </p>
            <br />
            <p className="text-lg">
              CA - Hz1XePA2vukqFBcf9P7VJ3AsMKoTXyPn3s21dNvGrHnd
            </p>
          </div>
          <div className="cursor-pointer">
            <button className="sm:px-8 px-5 py-3  w-[80%] bg-gradient-to-r from-blue-900 to-blue-400 rounded-md cursor-pointer">
              <a href="https://libra-finance.app/">
                <p className="text-white font-bold sm:text-lg text-md">
                  LAUNCH APP
                </p>
              </a>
            </button>
          </div>
        </div>
        <div className=" lg:pt-0 pt-10 lg:relative absolute sm:top-0  top-10 lg:opacity-100 opacity-10">
          <img src={homeImg} alt="home" className="w-full h-full" />
        </div>
        <div className="md:w-[150px] sm:w-[100px] absolute sm:top-5 top-1 md:left-[480px] left-[280px] hidden md:block">
          <img src={arrowImg} alt="arrow" className="w-full" />
        </div>
        <div className="absolute bottom-2 left-0 ">
          <img src={vector} alt="w-full" />
        </div>
        <div className="absolute w-[500px] h-[500px] p-4 bg-blue-400 -top-[85px] shadow-xl -left-[49px] opacity-5 rounded-full bg-opacity-20 blur"></div>
      </div>
    </div>
  );
};

export default Home;
