import { AppBar } from "./components/AppBar";
import { PingButton } from "./components/PingButton";
import WalletContextProvider from "./components/WalletContextProvider";

export default function Home() {
  return (
    <WalletContextProvider>
      <AppBar />
      <PingButton />
    </WalletContextProvider>
  );
}
