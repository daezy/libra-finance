import {
  FaDiscord,
  FaGithub,
  FaMedium,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#01030B]">
      <footer className="container mx-auto px-4 py-4 text-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div className="p-4 text-slate-200">
            <h2 className="text-2xl my-3 text-slate-100">Socials</h2>
            <a
              href="https://twitter.com/librafinanceSol"
              className="flex items-center py-2 hover:text-blue-500"
            >
              <FaTwitter className="text-blue-500" /> &nbsp; Twitter
            </a>
            <a href="" className="flex items-center py-2 hover:text-blue-500">
              <FaDiscord className="text-blue-500" /> &nbsp; Discord
            </a>
            <a
              href="https://t.me/libraprotocolsol"
              className="flex items-center py-2 hover:text-blue-500"
            >
              <FaTelegram className="text-blue-500" /> &nbsp; Telegram
            </a>
            <a href="" className="flex items-center py-2 hover:text-blue-500">
              <FaMedium className="text-blue-500" /> &nbsp; Medium
            </a>
            <a href="" className="flex items-center py-2 hover:text-blue-500">
              <FaGithub className="text-blue-500" /> &nbsp; Github
            </a>
          </div>
          <div className="p-4 text-slate-200">
            <h2 className="text-2xl my-3 text-slate-100">Products</h2>
            <a
              href="https://www.libra-finance.app/revShare"
              className="py-2 block hover:text-blue-500"
            >
              {" "}
              Automatic-Staking
            </a>
            <a
              href="https://www.libra-finance.app/bank"
              className="py-2 block hover:text-blue-500"
            >
              Libra Bank
            </a>
            <a
              href="https://www.libra-finance.app/stake"
              className="py-2 block hover:text-blue-500"
            >
              Staking
            </a>
          </div>
          <div className="p-4 text-slate-200">
            <h2 className="text-2xl my-3 text-slate-100">Quick Links</h2>
            <a href="" className="py-2 block hover:text-blue-500">
              {" "}
              Home
            </a>
            <a href="#about" className="py-2 block hover:text-blue-500">
              About
            </a>
            <a href="#features" className="py-2 block hover:text-blue-500">
              Features
            </a>
            <a
              href="https://librafinance.gitbook.io/libra-finance"
              className="py-2 block hover:text-blue-500"
            >
              Docs
            </a>
            <a
              href="https://www.libra-finance.app"
              className="py-2 block hover:text-blue-500"
            >
              Dapp
            </a>
          </div>
        </div>
        <p className="text-slate-100 text-center  border-t border-solid border-slate-600 p-5 pt-7">
          Copyright © 2024 LIBRA.FINANCE (
          <span className="text-blue-500">$LIBRA</span>). All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
