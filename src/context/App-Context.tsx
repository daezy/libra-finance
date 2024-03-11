import React, { createContext, useEffect, useState } from "react";
import { AppContextType, ContractDataInterface, TokenData } from "../types";
import { Connection, PublicKey } from "@solana/web3.js";
import {
  CONTRACT_DATA_ACCOUNT,
  MAINNET_CONNECTION_URL,
} from "../solana/constants.ts";
import { getContractData } from "../solana/utils.ts";

export const AppContext = createContext<AppContextType>({
  connection: null,
  contractData: null,
  tokenPrice: 0,
  network: "mainnet",
});

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [connection, setConnection] = useState<Connection | null>(null);
  const [contractData, setContractData] =
    useState<ContractDataInterface | null>(null);
  const [network] = useState<"localnet" | "devnet" | "mainnet">("mainnet");
  const [libraPrice, setLibraPrice] = useState<number>(0);

  useEffect(() => {
    setConnection(new Connection(MAINNET_CONNECTION_URL, "confirmed"));
  }, [network]);

  useEffect(() => {
    // Function to set up user account, user token account and contract account data
    const setUp = async () => {
      if (connection) {
        const contractData = await getContractData(
          connection,
          new PublicKey(CONTRACT_DATA_ACCOUNT)
        );
        setContractData(contractData);
      }
    };

    fetch(
      "https://price.jup.ag/v4/price?ids=Hz1XePA2vukqFBcf9P7VJ3AsMKoTXyPn3s21dNvGrHnd"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const authors: TokenData =
          data.data["Hz1XePA2vukqFBcf9P7VJ3AsMKoTXyPn3s21dNvGrHnd"];
        setLibraPrice(authors.price);
      });
    setUp().then((val) => val);
  }, [connection]);

  return (
    <AppContext.Provider
      value={{
        network,
        tokenPrice: libraPrice,
        connection,
        contractData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
