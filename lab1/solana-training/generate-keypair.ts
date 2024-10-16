import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";
import "dotenv/config";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log("Public key loaded from a private key stored in the env file!");
console.log(keypair.publicKey.toBase58());
