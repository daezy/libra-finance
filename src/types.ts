import { Connection, PublicKey } from "@solana/web3.js";

export type AppContextType = {
  network: "localnet" | "devnet" | "mainnet";
  connection: Connection | null;
  contractData: ContractDataInterface | null;
  tokenPrice: number;
};

export type PhantomEvent = "disconnect" | "connect" | "accountChanged";

export interface ConnectOpts {
  onlyIfTrusted: boolean;
}

export interface ContractDataInterface {
  isInitialized: boolean;
  adminPubkey: PublicKey;
  stakeTokenMint: PublicKey;
  stakeTokenAccount: PublicKey;
  minimumStakeAmount: bigint;
  minimumLockDuration: bigint;
  normalStakingApy: bigint;
  lockedStakingApy: bigint;
  earlyWithdrawalFee: bigint;
  totalStaked: bigint;
  totalEarned: bigint;
}

export type TokenData = {
  id: string;
  mintSymbol: string;
  vsToken: string;
  vsTokenSymbol: string;
  price: number;
};
