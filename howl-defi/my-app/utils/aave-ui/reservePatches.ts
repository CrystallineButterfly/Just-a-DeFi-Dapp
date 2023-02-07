export const SYMBOL_MAP: { [key: string]: string } = {
  CNDLUSDCCNDL: "CNDL_USDC_CNDL",
  CNDLWCNDLCNDL: "CNDL_WCNDL_CNDL",
  UNIAAVEWETH: "UNI_AAVE_WETH",
  UNIDAIUSDC: "UNI_CNDL_USDC",
  UNIDAIWETH: "UNI_CNDL_WETH",
  UNIUSDCWETH: "UNI_USDC_WETH",
  // CANDLE
  "1USDC": "USDC",
  "1COIL": "COIL",
  "1CNDL": "CNDL",
  "1WCNDL": "WCNDL",
  "1CEUR": "CEUR",
  "1AAVE": "AAVE",
  "1CAUD": "CAUD",
  "1CWHEAT": "CWHEAT",
  "1ETH": "ETH",
  "1WETH": "WETH",
  // polygon
  miMATIC: "MAI",
};

export const SYMBOL_NAME_MAP: { [key: string]: string } = {
  CNDL: "Candle",
  ETH: "Ethereum",
  MAI: "MAI (mimatic)",
  CAUD: "cAUD",
  CEUR: "cEUR",
  CWHEAT: "cWHEAT",
  COIL: "cOIL",
  UNICNDLWETH: "UNI CNDL/WETH",
  UNICNDLUSDC: "UNI CNDL/USDC",
  USDC: "USD Coin",
  WCNDL: "Wrapped Candle",
  WETH: "Wrapped ETH",
  WMATIC: "Wrapped Matic",
};

export function fetchIconSymbolAndName({
  underlyingAsset,
  symbol,
}: {
  underlyingAsset: string,
  symbol: string,
}) {
  // guni symbols are just broken (G-UNI for all tokens)
  if (
    underlyingAsset.toLowerCase() ===
    "0x50379f632ca68d36e50cfbc8f78fe16bd1499d1e".toLowerCase() // Address change
  ) {
    return { iconSymbol: "GUNI_CNDL_USDC", name: "G-UNI CNDL/USDC", symbol };
  }
  if (
    underlyingAsset.toLowerCase() ===
    "0xd2eec91055f07fe24c9ccb25828ecfefd4be0c41".toLowerCase() // Address change
  ) {
    return { iconSymbol: "GUNI_CNDL_WETH", name: "G-UNI CNDL/WETH", symbol };
  }
  if (
    underlyingAsset.toLowerCase() ===
    "0xa693B19d2931d498c5B318dF961919BB4aee87a5".toLowerCase() // Address change
  ) {
    return { iconSymbol: "CUSD", name: "CUSD", symbol };
  }

  const unifiedSymbol = SYMBOL_MAP[symbol] || symbol;
  return {
    iconSymbol: unifiedSymbol,
    name: SYMBOL_NAME_MAP[unifiedSymbol.toUpperCase()] || unifiedSymbol,
    symbol,
  };
}

// tokens flagged stable will be sorted on top when no other sorting is selected
export const STABLE_ASSETS = [
  "CUSD",
  "CNDL",
  "WCNDL",
  "USDC",
  "CWHEAT",
  "CAUD",
  "CEUR",
];
