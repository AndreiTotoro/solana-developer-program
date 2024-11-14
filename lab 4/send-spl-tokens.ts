import {
  getExplorerLink,
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { configDotenv } from "dotenv";

configDotenv();

const connection = new Connection(clusterApiUrl("devnet"));

const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 2);

const source = new PublicKey("4pm34mHLrjrb9EuYCoPahTF61UZszpK5Kx6FZkFAbC2L");
const receipent = new PublicKey("CVGA4ZihB33aNNAMqq9qWT2gyadgADr9sHQYiqWbwkSC");

const user = getKeypairFromEnvironment("SECRET_KEY");

const tokenMintAccount = new PublicKey(
  "Ba8kt1YJKXxXR9Pasi63P9QStEFzbXgR1dNuSZCpPbyC"
);

const sourceTokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  user,
  tokenMintAccount,
  source
);

const receipentTokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  user,
  tokenMintAccount,
  receipent
);

const signature = await transfer(
  connection,
  user,
  sourceTokenAccount.address,
  receipentTokenAccount.address,
  user,
  1 * MINOR_UNITS_PER_MAJOR_UNITS
);

const explorerLink = getExplorerLink("transaction", signature, "devnet");

console.log(explorerLink);
