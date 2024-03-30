import Home from "../components/Home";
import ImageSlider from "../components/ImageSlider";
import About from "../components/About";
import Chart from "../components/Chart";
import Interest from "../components/Interest";
import CoreFeatures from "../components/CoreFeatures";
import Discover from "../components/Discover";
import Tokenocomics from "../components/Tokenocomics";
import HowItWorks from "../components/HowItWorks";
import WithdrawPolicy from "../components/WithdrawPolicy";
import RevenueSharing from "../components/RevenueSharing";
import SolanaMining from "../components/SolanaMining";

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Home />
      <ImageSlider />
      <About />
      <Chart />
      <Interest />
      <CoreFeatures />
      <SolanaMining />
      <HowItWorks />
      <Discover />
      <WithdrawPolicy />
      <RevenueSharing />
      <Tokenocomics />
    </div>
  );
};

export default Layout;
