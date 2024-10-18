import {
  getExplorerLink,
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { getOrCreateAssociatedTokenAccount, mintTo } from "@solana/spl-token";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { configDotenv } from "dotenv";

configDotenv();

const connection = new Connection(clusterApiUrl("devnet"));

const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 2);

const user = getKeypairFromEnvironment("SECRET_KEY");

const tokenMintAccount = new PublicKey(
  "Ba8kt1YJKXxXR9Pasi63P9QStEFzbXgR1dNuSZCpPbyC"
);

const destTokenAccount = new PublicKey(
  "9C8d9aKiTFQRK3Wn1Wi9A1mC8Puhv3h9jD6iXEdBr8W3"
);

const sig = await mintTo(
  connection,
  user,
  tokenMintAccount,
  destTokenAccount,
  user,
  10 * MINOR_UNITS_PER_MAJOR_UNITS
);

const link = getExplorerLink("tx", sig, "devnet");

console.log(`Minted 10 tokens: ${link}`);
