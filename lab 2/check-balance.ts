import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

console.log("Connected to devnet");

const publicKey = new PublicKey("4pm34mHLrjrb9EuYCoPahTF61UZszpK5Kx6FZkFAbC2L");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`Balance for ${publicKey} is ${balanceInSOL}`);
