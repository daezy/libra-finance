import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  AOS.init();
  const [toTop, setToTop] = useState("hidden");

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      if (windowHeight > 500) {
        setToTop("");
      } else {
        setToTop("hidden");
      }
    }
  };

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  return (
    <div>
      <Navbar />
      <Layout />
      <Footer />

      <button
        id="to-top-button"
        title="Go To Top"
        onClick={handleToTop}
        className={`${toTop} fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-2xl shadow-md bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold transition-colors duration-300 animate-bounce`}
      >
        <svg
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          ></path>
        </svg>
        <span className="sr-only">Go to top</span>
      </button>
    </div>
  );
}

export default App;
