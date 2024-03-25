import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/alphadev 1.jpg";
import image2 from "../assets/cmc.jpg";
import image3 from "../assets/descreener 1.jpg";
// import image4 from "../assets/dextools 2.jpg";
import image5 from "../assets/raydium 1.jpg";
import "../randomStyle.css";

const ImageSlider = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  // };

  return (
    // <Slider {...settings} className="flex items-center ">
    //   <div className="p-6">
    //     <img src={image1} alt="Company Logo" />
    //   </div>
    //   <div className="p-6">
    //     <img src={image2} alt="Company Logo" />
    //   </div>
    //   <div className="p-6">
    //     <img src={image3} alt="Company Logo" />
    //   </div>
    //   <div className="p-6">
    //     <img src={image4} alt="Company Logo" />
    //   </div>
    //   <div className="p-6">
    //     <img src={image5} alt="Company Logo" />
    //   </div>
    // </Slider>

    <div className="flex gap-4 items-center slide-track bg-white">
      <div className="h-[100px] sm:w-[250px] w-[180px] flex items-center p-6">
        <img src={image1} alt="Company Logo" className="w-full" />
      </div>
      <div className="h-[100px] sm:w-[250px] w-[180px] flex items-center p-6">
        <img src={image2} alt="Company Logo" className="w-full" />
      </div>
      <div className="h-[100px] sm:w-[250px] w-[180px] flex items-center p-6">
        <img src={"./dextools.png"} alt="Company Logo" className="w-full" />
      </div>
      <div className="h-[100px] sm:w-[250px] w-[180px] flex items-center p-6">
        <img src={image3} alt="Company Logo" className="w-full" />
      </div>
      <div className="h-[100px] sm:w-[250px] w-[180px] flex items-center p-6">
        <img src={image5} alt="Company Logo" className="w-full" />
      </div>
      <div className="h-[60px] sm:w-[200px] w-[180px] flex items-center p-6">
        <img src={"./gotbit.jpg"} alt="Company Logo" className="w-full" />
      </div>

      {/* doubled */}
      <div className="h-[100px] sm:w-[250px] w-[180px] flex items-center p-6">
        <img src={image1} alt="Company Logo" className="w-full" />
      </div>
      <div className="h-[100px] sm:w-[250px] w-[180px] flex items-center p-6">
        <img src={image2} alt="Company Logo" className="w-full" />
      </div>
      <div className="h-[100px] sm:w-[250px] w-[180px] flex items-center p-6">
        <img src={"./dextools.png"} alt="Company Logo" className="w-full" />
      </div>
      <div className="h-[100px] sm:w-[250px] w-[180px] flex items-center p-6">
        <img src={image3} alt="Company Logo" className="w-full" />
      </div>
      <div className="h-[100px] sm:w-[250px] w-[180px] flex items-center p-6">
        <img src={image5} alt="Company Logo" className="w-full" />
      </div>
      <div className="h-[60px] sm:w-[200px] w-[180px] flex items-center p-6">
        <img src={"./gotbit.jpg"} alt="Company Logo" className="w-full" />
      </div>
    </div>
  );
};

export default ImageSlider;
