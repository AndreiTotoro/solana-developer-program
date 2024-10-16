import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { createMemoInstruction } from "@solana/spl-memo";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { configDotenv } from "dotenv";

configDotenv();

const sender = getKeypairFromEnvironment("SECRET_KEY");

const receiver = new PublicKey("CVGA4ZihB33aNNAMqq9qWT2gyadgADr9sHQYiqWbwkSC");

const connection = new Connection(clusterApiUrl("devnet"));

const transaction = new Transaction();

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: sender.publicKey,
  toPubkey: receiver,
  lamports: 0.01 * LAMPORTS_PER_SOL,
});

transaction.add(sendSolInstruction);

const addMemoInstruction = createMemoInstruction("Hello from Solana!");

transaction.add(addMemoInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  sender,
]);

console.log(`Transaction successfully executedm, signature: ${signature}`);
