import {
  getExplorerLink,
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { configDotenv } from "dotenv";

configDotenv();

const connection = new Connection(clusterApiUrl("devnet"));

const user = getKeypairFromEnvironment("SECRET_KEY");

const tokenMintAccount = new PublicKey(
  "Ba8kt1YJKXxXR9Pasi63P9QStEFzbXgR1dNuSZCpPbyC"
);

const recipient = new PublicKey("4pm34mHLrjrb9EuYCoPahTF61UZszpK5Kx6FZkFAbC2L");

const tokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  user,
  tokenMintAccount,
  recipient
);

console.log(`Token Account: ${tokenAccount.address.toBase58()}`);

const link = getExplorerLink(
  "address",
  tokenAccount.address.toBase58(),
  "devnet"
);

console.log(`Created token account: ${link}`);
