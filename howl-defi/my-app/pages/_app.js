import "../styles/globals.css";
import type, { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";


function MyApp({ Component, pageProps }) {
  const candleChain = {
  id: 534,
  name: "Candle",
  network: "candle",
  nativeCurrency: {
    decimals: 18,
    name: "Candle",
    symbol: "CNDL",
  },
  rpcUrls: {
    default: "https://candle-rpc.com/",
  },
  blockExplorers: {
    default: {
      name: "CandleExplorer",
      url: "https://candleexplorer.com",
    },
  },
  testnet: true,
};
const { chains, provider } = configureChains(
  [candleChain],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== candleChain.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Malta Market",
  chains,
});
const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});
  const router = useRouter();
  return  (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp;
