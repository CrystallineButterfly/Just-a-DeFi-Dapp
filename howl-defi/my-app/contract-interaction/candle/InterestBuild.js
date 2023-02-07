import { useAccount, useContract, useProvider, erc721ABI } from "wagmi";
import { HOWL_CONTRACT_ADDRESS, HOWL_CONTRACT_ABI } from "../../constants/HOWL";
const provider = useProvider()

const HOWLContract = useContract({
  addressOrName: HOWL_CONTRACT_ADDRESS,
  contractInterface: HOWL_CONTRACT_ABI,
  signerOrProvider: provider,
});

const StableDebtHOWLTokenContract = useContract({
  addressOrName: HOWL_CONTRACT_ADDRESS,
  contractInterface: HOWL_CONTRACT_ABI,
  signerOrProvider: provider,
});

const VariableDebtHOWLTokenContract = useContract({
  addressOrName: HOWL_CONTRACT_ADDRESS,
  contractInterface: HOWL_CONTRACT_ABI,
  signerOrProvider: provider,
});

const InterestRateContract = useContract({
  addressOrName: HOWL_CONTRACT_ADDRESS,
  contractInterface: HOWL_CONTRACT_ABI,
  signerOrProvider: provider,
});


export const getHOWLAmountDeposited = async() => {
  const minted = await HOWLContract.totalSupply()
  return minted.toNumber();
}

export const getHOWLAmountStableBorrowed = async() => {
  const minted = await StableDebtHOWLTokenContract.totalSupply();
  return minted.toNumber();
}

export const getHOWLAmountStableAPR = async () => {
  const apr = await StableDebtHOWLTokenContract.getAverageStableRate();
  return apr.toNumber();
};

export const getHOWLAmountVariableBorrowed = async () => {
  const minted = await VariableDebtHOWLTokenContract.totalSupply();
  return minted.toNumber();
};   


export const getHOWLInterestRate = async() => {
  const totalStableDebt = await getHOWLAmountStableBorrowed();
  const totalVariableDebt = await getHOWLAmountVariableBorrowed();
  const reserveAmount = await getHOWLAmountDeposited();
  const availableLiquidity = reserveAmount - totalStableDebt - totalVariableDebt;
  const averageStableRate = await getHOWLAmountStableAPR();
  const reserveFactor = 1000;
  const apy = await InterestRateContract.calculateInterestRates(reserve, );
  return apy.toNumber();
}

