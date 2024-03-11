import { Connection, PublicKey } from "@solana/web3.js";
import { CONTRACT_DATA_LAYOUT } from "./layout.ts";
import {} from "./constants.ts";
import {
  AccountLayout,
  getAssociatedTokenAddress,
  TOKEN_2022_PROGRAM_ID,
} from "@solana/spl-token";

export const formatAmount = (amount: number, decimals: number) => {
  return (amount / 10 ** decimals).toString();
};

export const getTokenAccount = async (
  connection: Connection,
  owner: PublicKey,
  mint: PublicKey
) => {
  const associatedToken = await getAssociatedTokenAddress(
    mint,
    owner,
    undefined,
    TOKEN_2022_PROGRAM_ID
  );
  const accountData = await getAccountData(connection, associatedToken);
  if (accountData) {
    const rawAccount = AccountLayout.decode(accountData);
    return {
      address: associatedToken,
      mint: rawAccount.mint,
      owner: rawAccount.owner,
      amount: rawAccount.amount,
    };
  } else {
    throw Error("Token Account Not Found");
  }
};

export const getAccountData = async (
  connection: Connection,
  address: PublicKey
) => {
  const accountInfo = await connection.getAccountInfo(address);
  return accountInfo?.data;
};

export const getContractData = async (
  connection: Connection,
  address: PublicKey
) => {
  const accountData = await getAccountData(connection, address);
  if (accountData) {
    const contractData = CONTRACT_DATA_LAYOUT.decode(accountData);
    return {
      isInitialized: contractData.isInitialized,
      adminPubkey: new PublicKey(contractData.adminPubkey),
      stakeTokenMint: new PublicKey(contractData.stakeTokenMint),
      stakeTokenAccount: new PublicKey(contractData.stakeTokenAccount),
      minimumStakeAmount: contractData.minimumStakeAmount as unknown as bigint,
      minimumLockDuration:
        contractData.minimumLockDuration as unknown as bigint,
      normalStakingApy: contractData.normalStakingApy as unknown as bigint,
      lockedStakingApy: contractData.lockedStakingApy as unknown as bigint,
      earlyWithdrawalFee: contractData.earlyWithdrawalFee as unknown as bigint,
      totalStaked: contractData.totalStaked as unknown as bigint,
      totalEarned: contractData.totalEarned as unknown as bigint,
      feeBasisPoints: contractData.feeBasisPoints as unknown as bigint,
      maxFee: contractData.maxFee as unknown as bigint,
    };
  }
  return null;
};
