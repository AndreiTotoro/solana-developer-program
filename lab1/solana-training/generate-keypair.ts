import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";
import "dotenv/config";
import bs58 from "bs58";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log("Public key loaded from a private key stored in the env file!");
console.log(keypair.publicKey.toBase58());
console.log(bs58.encode(keypair.secretKey));
