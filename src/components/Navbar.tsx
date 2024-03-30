import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/libra logo 1.png";
import NavbarSlider from "./NavbarSlider";
import Overlay from "./Overlay";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("About");
  const [clicked, setClicked] = useState(false);

  const handleActiveLink = (option: string) => {
    setActiveLink(option);
  };
  const toggleSideBar = () => {
    setClicked((side) => !side);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setClicked(false);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#000618] relative">
      <div className="flex container  px-7  py-2 justify-between items-center ">
        <a href="#">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-20" />
            <h1 className="text-white font-bold text-2xl ml-[-17px]">LIBRA</h1>
          </div>
        </a>

        {!isMobile && (
          <div className="flex gap-7 uppercase">
            <a
              href="#about"
              onClick={() => handleActiveLink("About")}
              className={`text-white hover:text-blue-500 ${
                activeLink === "About" && "border-b-2 border-blue-500"
              }`}
            >
              About
            </a>
            <a
              href="#features"
              onClick={() => handleActiveLink("Features")}
              className={`text-white hover:text-blue-500 ${
                activeLink === "Features" && "border-b-2 border-blue-500"
              }`}
            >
              Features
            </a>
            <a
              href="https://libra-finance.app"
              onClick={() => handleActiveLink("Dapp")}
              className={`text-white  hover:text-blue-500 ${
                activeLink === "Dapp" && "border-b-2 border-blue-500"
              }`}
            >
              Dapp
            </a>
            <a
              href="https://libra-finance.app/bank"
              onClick={() => handleActiveLink("Libra Bank")}
              className={`text-white hover:text-blue-500 ${
                activeLink === "Libra Bank" && "border-b-2 border-blue-500"
              }`}
            >
              Libra Bank
            </a>
            <a
              href="https://librafinance.gitbook.io/libra-finance"
              onClick={() => handleActiveLink("Docs")}
              className={`text-white hover:text-blue-500 ${
                activeLink === "Docs" && "border-b-2 border-blue-500"
              }`}
            >
              Docs
            </a>
          </div>
        )}
        {!isMobile ? (
          <div>
            <a href="https://jup.ag/swap/SOL-Hz1XePA2vukqFBcf9P7VJ3AsMKoTXyPn3s21dNvGrHnd">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-900 to-blue-400 rounded-md">
                <p className="text-white font-bold ">BUY</p>
              </button>
            </a>
          </div>
        ) : (
          <div className="p-1 bg-blue-500 rounded-md flex justify-center">
            <button
              className="w-8 h-8"
              onClick={() => setClicked((prev) => !prev)}
            >
              <AiOutlineMenu className="text-white w-full h-full" />
            </button>
          </div>
        )}
      </div>
      {clicked && <NavbarSlider setClicked={toggleSideBar} clicked={clicked} />}
      {clicked && <Overlay handleSidebar={toggleSideBar} />}
    </div>
  );
};

export default Navbar;
