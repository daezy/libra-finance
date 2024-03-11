import React from "react";
import { FaXmark } from "react-icons/fa6";
import logo from "../assets/libra logo 1.png";

interface propType {
  clicked: boolean;
  setClicked: () => void;
}

const NavbarSlider: React.FC<propType> = ({ setClicked }) => {
  return (
    <div className="h-[100vh] w-[300px] bg-slate-950 fixed z-30 right-[-2px] top-0  pt-[30px]">
      <div className="mx-[15px]">
        <div className="flex flex-row justify-between items-center ">
          <div className="p rounded-full bg-white">
            <img src={logo} alt="logo" width={60} />
          </div>
          <div
            className="p-2 border-0 rounded-full bg-[#03001417]"
            onClick={setClicked}
          >
            <FaXmark className="text-white h-8 w-8 cursor-pointer  " />
          </div>
        </div>

        <div className="mt-[40px]">
          <ul className="list-none">
            <li className="py-[15px] border-b border-gray-700 border-1">
              <a
                href="#about"
                className="cursor-pointer text-white hover:text-blue-500"
              >
                About
              </a>
            </li>

            <li className="py-[15px] border-b  border-gray-700 border-1">
              <a
                href="#features"
                className="cursor-pointer text-white hover:text-blue-500"
              >
                Features
              </a>
            </li>

            <li className="py-[15px] border-b border-gray-700 border-1">
              <a
                href="https://libra-finance.app"
                className="cursor-pointer text-white hover:text-blue-500"
              >
                Dapp
              </a>
            </li>
            <li className="py-[15px] border-b border-gray-700 border-1">
              <a
                href="https://libra-finance.app/bank"
                className="cursor-pointer text-white hover:text-blue-500"
              >
                Libra Bank
              </a>
            </li>
            <li className="py-[15px] border-b border-gray-700 border-1">
              <a
                href="https://librafinance.gitbook.io/libra-finance"
                className="cursor-pointer text-white hover:text-blue-500"
              >
                Docs
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-[20px]">
          <div className="flex justify-center flex-row gap-10">
            {/* {Socials.map((social) => (
              <Link href={social.url} target="_blank">
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={35}
                  height={35}
                />
              </Link>
            ))} */}

            {/* <Link
              href="https://www.linkedin.com/in/anselm-fajobi-8ab5a623b"
              target="_blank"
            >
              <FaLinkedin className="text-white text-[25px]" />
            </Link>
            <Link href="https://www.github.com/daddyaezzy" target="_blank">
              <FaGithub className="text-white text-[25px]" />
            </Link>
            <Link href="https://x.com/bigdidiy_?s=21" target="_blank">
              <FaTwitter className="text-white text-[25px]" />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSlider;
