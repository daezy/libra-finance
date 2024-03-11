const Chart = () => {
  return (
    <div className="h-[100vh] bg-[#000618]   py-[75px] " id="dapp">
      <div className="flex justify-center relative  items-center  h-full container mx-auto px-4">
        <div className="">
          <div
            id="dexscreener-embed"
            className="w-full  aspect-w-16 aspect-h-9"
          >
            <iframe
              src="https://dexscreener.com/solana/EDM3b4NNas5raWKENejTUTDRA9NwPkoX2Dk6tYFxSbgs?embed=1&theme=dark&trades=0&info=0"
              className=" absolute inset-0 w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
