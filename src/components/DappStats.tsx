import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/App-Context";
import { PublicKey } from "@solana/web3.js";
import { STAKE_TOKEN_DECIMALS, STAKE_TOKEN_MINT } from "../solana/constants";
import { FaCaretRight } from "react-icons/fa";
import { formatAmount } from "../solana/utils";

const DappStats = () => {
  const ctx = useContext(AppContext);

  //   const [tokenAccount, setTokenAccount] = useState<TokenAccount | null>(null);
  const [supply, setSupply] = useState<number>(0);

  useEffect(() => {
    const getTokenSupply = async () => {
      if (ctx.contractData && ctx.connection) {
        const supply = await ctx.connection.getTokenSupply(
          new PublicKey(STAKE_TOKEN_MINT)
        );
        setSupply(Number(supply.value.amount));
      }
    };

    getTokenSupply();
  }, [ctx.contractData]);

  const displayValue = (func: number): string => {
    const value = func * ctx.tokenPrice;
    const fixed = value.toLocaleString();

    return fixed;
  };

  return (
    <div className="rounded-md divide-y divide-slate-600 bg-blue-950 shadow-md bg-opacity-45 mx-auto md:w-10/12 ">
      <div className="text-blue-600 p-4">
        <a
          href="https://libra-finance.app"
          target="_blank"
          className="flex items-center gap-1  text-2xl"
        >
          Libra Dapp <FaCaretRight />
        </a>
      </div>

      <div className="text-white flex gap-3 justify-between items-center p-4">
        <p className="">Current Libra Price</p>

        <div>
          <p className="text-blue-500 text-lg">
            ${ctx.contractData ? ctx.tokenPrice : 0}{" "}
          </p>
        </div>
      </div>

      <div className="text-white flex gap-3 justify-between items-center p-4">
        <p className="">Current Libra Supply</p>

        <div>
          <p className="text-blue-500 text-lg">
            {ctx.contractData
              ? Math.round(
                  Number(formatAmount(supply, STAKE_TOKEN_DECIMALS))
                ).toLocaleString()
              : 0}{" "}
            LIBRA{" "}
          </p>
        </div>
      </div>
      <div className="text-white flex gap-3 justify-between items-center p-4">
        <p className="">Total Libra Burned</p>

        <div>
          <p className="text-blue-500 text-lg">
            {ctx.contractData
              ? (
                  1000000000 -
                  Math.round(Number(formatAmount(supply, STAKE_TOKEN_DECIMALS)))
                ).toLocaleString()
              : 0}{" "}
            LIBRA
          </p>
        </div>
      </div>
      <div className="text-white flex gap-3 justify-between items-center p-4">
        <p className="">Total Libra Deposited</p>

        <div>
          <p className="text-blue-500 text-lg">
            {ctx.contractData
              ? Math.round(
                  Number(
                    formatAmount(
                      parseInt(ctx.contractData.totalStaked.toString()),
                      STAKE_TOKEN_DECIMALS
                    )
                  )
                ).toLocaleString()
              : 0}{" "}
            LIBRA
          </p>
          <p>
            ($
            {displayValue(
              ctx.contractData
                ? Math.round(
                    Number(
                      formatAmount(
                        parseInt(ctx.contractData.totalStaked.toString()),
                        STAKE_TOKEN_DECIMALS
                      )
                    )
                  )
                : 0
            )}
            )
          </p>
        </div>
      </div>

      <div className="text-white flex gap-3 justify-between items-center p-4">
        <p className="">Total Libra Paid</p>

        <div>
          <p className="text-blue-500 text-lg">
            {ctx.contractData
              ? Math.round(
                  Number(
                    formatAmount(
                      parseInt(ctx.contractData.totalEarned.toString()),
                      STAKE_TOKEN_DECIMALS
                    )
                  )
                ).toLocaleString()
              : 0}
          </p>
          <p>
            ($
            {displayValue(
              ctx.contractData
                ? Math.round(
                    Number(
                      formatAmount(
                        parseInt(ctx.contractData.totalEarned.toString()),
                        STAKE_TOKEN_DECIMALS
                      )
                    )
                  )
                : 0
            )}
            )
          </p>
        </div>
      </div>
      <div className="text-white flex gap-3 justify-around items-center p-4">
        <div className="text-center">
          <h3 className="text-lg">Libra Bank APY</h3>
          <p className="text-blue-500 text-xl">
            {ctx.contractData
              ? formatAmount(
                  parseInt(ctx.contractData.lockedStakingApy.toString()),
                  1
                )
              : 0}
            %{" "}
          </p>
          <p>16.59% / day</p>
        </div>

        <div className="text-center">
          <h3 className="text-lg">Libra Stake APY</h3>
          <p className="text-blue-500 text-xl">
            {ctx.contractData
              ? formatAmount(
                  parseInt(ctx.contractData.normalStakingApy.toString()),
                  1
                )
              : 0}
            %{" "}
          </p>
          <p>7.23% / day</p>
        </div>
      </div>
    </div>
  );
};

export default DappStats;
