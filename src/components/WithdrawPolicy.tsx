import xIcon from "../assets/ic_round-dangerous.png";
import withdrawIcon from "../assets/uil_money-withdrawal.png";
import libraImg from "../assets/Group 1171275018.png";

const WithdrawPolicy = () => {
  return (
    <div className="bg-[#000618] py-16  relative " id="features">
      <div className=" container mx-auto px-4">
        <div className="sm:mb-3 pt-12  ">
          <h2 className="text-white sm:text-[30px] text-[21px] text-center">
            Fee Structural and Withdrawal Policy
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[80px] items-center  ">
          <div
            className="py-10 flex flex-col  justify-center items-center bg-[rgba(255,253,253,0.1)] bg-opacity-60 p-5 rounded-md 0 mt-7 relative"
            data-aos="fade-up"
          >
            <div className="w-[57px] absolute top-3 flex justify-center items-center -mt-11 ">
              <div className="bg-blue-600 p-4 rounded-full shadow-xl shadow-blue-500 border-2 border-solid border-blue-300">
                <img src={xIcon} alt="" width={30} />
              </div>
            </div>
            <div>
              <h3 className="text-center text-xl my-2 text-white">4% Fee:</h3>
              <p className="text-center text-[#6d6c6c]">
                A 4% fee is applied to all deposits and withdrawals made on the
                Libra Miner platform. This fee is utilized to sustain the
                operations of the mining pool and is a crucial component of the
                revenue-sharing mechanism.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="md:flex justify-center items-center z-9999 relative hidden"
          >
            <img src={libraImg} className="w-full md:w-9/12" alt="" />
          </div>
          <div
            className="py-10 flex flex-col justify-center items-center bg-[rgba(255,253,253,0.1)] bg-opacity-60 p-5 rounded-md 0 mt-7 relative"
            data-aos="fade-up"
          >
            <div className="w-[57px] absolute top-3 flex justify-center items-center -mt-11 ">
              <div className="bg-red-600 p-4 rounded-full shadow-xl shadow-red-500 border-2 border-solid border-red-300">
                <img src={withdrawIcon} alt="" width={30} />
              </div>
            </div>
            <div>
              <h3 className="text-center text-xl my-2 text-white">
                Withdrawal Penalties
              </h3>
              <p className="text-center text-[#6d6c6c]">
                Miners must wait for a minimum of 7 days before withdrawing
                their initial deposit from the Libra Miner platform. Attempting
                to withdraw before the 7-day period will result in a penalty,
                ensuring that miners commit to the mining process and contribute
                to the stability of the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawPolicy;
