import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { FC } from "react";
import styles from "../styles/PingButton.module.css";

const PROGRAM_ID = "";
const DATA_ACCOUNT_PUBKEY = "";

export const PingButton: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = async () => {
    if (!connection || !publicKey) {
      console.log("Please connect your wallet first!");
      return;
    }

    try {
      const programId = new web3.PublicKey(PROGRAM_ID);
      const programDataAccount = new web3.PublicKey(DATA_ACCOUNT_PUBKEY);

      const transaction = new web3.Transaction();

      const instruction = new web3.TransactionInstruction({
        keys: [
          {
            pubkey: programDataAccount,
            isSigner: false,
            isWritable: true,
          },
        ],
        programId,
      });

      transaction.add(instruction);

      const signature = await sendTransaction(transaction, connection);
      console.log("Transaction sent! Signature:", signature);

      // Wait for transaction confirmation
      const confirmation = await connection.confirmTransaction(signature);
      console.log("Transaction confirmed!", confirmation);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className={styles.buttonContainer}
      onClick={onClick}
    >
      <button className={styles.button}>Ping!</button>
    </div>
  );
};
