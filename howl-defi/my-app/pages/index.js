/* eslint-disable @next/next/no-sync-scripts */
import { BigNumber, providers, utils } from "ethers";
import type, { NextPage } from "next";  
import Head from "next/head";
import {useState} from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/Home.module.css";

// To be Refactorize and abstracted..
import 'bootstrap/dist/css/bootstrap.css'; 

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSackDollar, faDriversLicense,
faBars, faPeopleGroup, faNetworkWired,
faBoxDollar, faEuroSign, faBrazilianRealSign, faCoins, faCow } from "@fortawesome/free-solid-svg-icons";

// Lending, staking, borrowing: Add interaction via JS for lending mechanics, staking, borrowing, etc: Main components.

// Lending = contracts to be interacted with:  config lendingPool files. 
// Staking = contracts to be interacted with: config stakingPool files.

export default function Home() {

  /**** Price Oracle FUNCTIONS ****/

 // asset display via price oracle
 const [assetPrice, setassetPrice] = useState(0);
 const [assetAPY, setassetAPY] = useState(0)
 const [assetDeposited, setassetDeposited] = useState(0);
//  const [availableasset, setAvailableasset] = useState(assetDeposited - assetBorrowed)
 const [assetStableBorrowed, setassetStableBorrowed] = useState(0);
 const [assetStableAPR, setassetStableAPR] = useState(0);
 const [assetVariableAPR, setassetVariableAPR] = useState(0);
 const [assetVariableBorrowed, setassetVariableBorrowed] = useState(0);
 const [assetBorrowed, setCandldeBorrowed] = useState(assetStableBorrowed + assetVariableBorrowed);
 const [assetUTILRate, setassetUTILRate] = useState(0);
 const [assetTotalSupply, setassetTotalSupply] = useState(0)
 const [assetCurrentSupply, setassetCurrentSupply] = useState(0)
 const [assetMarketCap, setassetMarketCap] = useState(0)

 //asset User Stats
const [assetBalance, setassetBalance] = useState(0)

  // usdc display via price oracle

  const [usdcAPY, setusdcAPY] = useState(0)
  const [usdcDeposited, setusdcDeposited] = useState(0);
  const [usdcBorrowed, setusdcBorrowed] = useState(0);
  const [usdcBdorrowed, setusdcBdorrowed] = useState(0);
  const [availableusdc, setAvailableusdc] = useState(usdcDeposited - usdcBorrowed)
  const [usdcStableBorrowed, setusdcStableBorrowed] = useState(0);
  const [usdcStableAPR, setusdcStableAPR] = useState(0);
  const [usdcVariableAPR, setusdcVariableAPR] = useState(0);
  const [usdcVariableBorrowed, setusdcVariableBorrowed] = useState(0);
  const [usdcUTILRate, setusdcUTILRate] = useState(0);
  const [usdcTotalSupply, setusdcTotalSupply] = useState(0)
  const [usdcCurrentSupply, setusdcCurrentSupply] = useState(0)
  const [usdcMarketCap, setusdcMarketCap] = useState(0)
  const [usdcPrice, setusdcPrice] = useState(0)

  //usdc User Stats
const [usdcBalance, setusdcBalance] = useState(0)

  
  // Display via col-6 (class for UI)

  // wasset display via price oracle

  const [wassetAPY, setwassetAPY] = useState(false)
  const [wassetDeposited, setwassetDeposited] = useState(false);
  const [wassetBorrowed, setwassetBorrowed] = useState(false);
  const [wassetBdorrowed, setwassetBdorrowed] = useState(false);
  const [availablewasset, setAvailablewasset] = useState(wassetDeposited - wassetBorrowed)
  const [wassetStableBorrowed, setwassetStableBorrowed] = useState(0);
  const [wassetStableAPR, setwassetStableAPR] = useState(0);
  const [wassetVariableAPR, setwassetVariableAPR] = useState(0);
  const [wassetVariableBorrowed, setwassetVariableBorrowed] = useState(0);
  const [wassetUTILRate, setwassetUTILRate] = useState(0);
  const [wassetTotalSupply, setwassetTotalSupply] = useState(0)
  const [wassetCurrentSupply, setwassetCurrentSupply] = useState(0)
  const [wassetMarketCap, setwassetMarketCap] = useState(0)

  //wasset User Stats
const [wassetBalance, setwassetBalance] = useState(0)

  
  // btc display via price oracle

  const [btcAPY, setbtcAPY] = useState(false)
  const [btcDeposited, setbtcDeposited] = useState(false);
  const [btcBorrowed, setbtcBorrowed] = useState(false);
  const [btcBdorrowed, setbtcBdorrowed] = useState(false);
  const [availablebtc, setAvailablebtc] = useState(btcDeposited - btcBorrowed)
  const [btcStableBorrowed, setbtcStableBorrowed] = useState(0);
  const [btcStableAPR, setbtcStableAPR] = useState(0);
  const [btcVariableAPR, setbtcVariableAPR] = useState(0);
  const [btcVariableBorrowed, setbtcVariableBorrowed] = useState(0);
  const [btcUTILRate, setbtcUTILRate] = useState(0);
  const [btcTotalSupply, setbtcTotalSupply] = useState(0)
  const [btcCurrentSupply, setbtcCurrentSupply] = useState(0)
  const [btcMarketCap, setbtcMarketCap] = useState(0)

  //btc User Stats
const [btcBalance, setbtcBalance] = useState(0)

  
  // wETH display via price oracle (not yet)
  
  const [wETHAPY, setwETHAPY] = useState(false)
  const [wETHDeposited, setwETHDeposited] = useState(false);
  const [wETHBorrowed, setwETHBorrowed] = useState(false);
  const [wETHBdorrowed, setwETHBdorrowed] = useState(false);
  const [availablewETH, setAvailablewETH] = useState(wETHDeposited - wETHBorrowed)
  const [wETHStableBorrowed, setwETHStableBorrowed] = useState(0);
  const [wETHStableAPR, setwETHStableAPR] = useState(0);
  const [wETHVariableAPR, setwETHVariableAPR] = useState(0);
  const [wETHVariableBorrowed, setwETHVariableBorrowed] = useState(0);
  const [wETHUTILRate, setwETHUTILRate] = useState(0);
  const [wETHTotalSupply, setwETHTotalSupply] = useState(0)
  const [wETHCurrentSupply, setwETHCurrentSupply] = useState(0)
  const [wETHMarketCap, setwETHMarketCap] = useState(0)

  //wETH User Stats
const [wETHBalance, setwETHBalance] = useState(0)


  // ETH display via price oracle (not yet)

  const [ETHAPY, setETHAPY] = useState(false)
  const [ETHDeposited, setETHDeposited] = useState(false);
  const [ETHBorrowed, setETHBorrowed] = useState(false);
  const [ETHBdorrowed, setETHBdorrowed] = useState(false);
  const [availableETH, setAvailableETH] = useState(ETHDeposited - ETHBorrowed)
  const [ETHStableBorrowed, setETHStableBorrowed] = useState(0);
  const [ETHStableAPR, setETHStableAPR] = useState(0);
  const [ETHVariableAPR, setETHVariableAPR] = useState(0);
  const [ETHVariableBorrowed, setETHVariableBorrowed] = useState(0);
  const [ETHUTILRate, setETHUTILRate] = useState(0);
  const [ETHTotalSupply, setETHTotalSupply] = useState(0)
  const [ETHCurrentSupply, setETHCurrentSupply] = useState(0)
  const [ETHMarketCap, setETHMarketCap] = useState(0)

  //ETH User Stats
const [ETHBalance, setETHBalance] = useState(0)

 // bnb display via price oracle (not yet)

  const [bnbAPY, setbnbAPY] = useState(false)
  const [bnbDeposited, setbnbDeposited] = useState(false);
  const [bnbBorrowed, setbnbBorrowed] = useState(false);
  const [bnbBdorrowed, setbnbBdorrowed] = useState(false);
  const [availablebnb, setAvailablebnb] = useState(bnbDeposited - bnbBorrowed)
  const [bnbStableBorrowed, setbnbStableBorrowed] = useState(0);
  const [bnbStableAPR, setbnbStableAPR] = useState(0);
  const [bnbVariableAPR, setbnbVariableAPR] = useState(0);
  const [bnbVariableBorrowed, setbnbVariableBorrowed] = useState(0);
  const [bnbUTILRate, setbnbUTILRate] = useState(0);
  const [bnbTotalSupply, setbnbTotalSupply] = useState(0)
  const [bnbCurrentSupply, setbnbCurrentSupply] = useState(0)
  const [bnbMarketCap, setbnbMarketCap] = useState(0)

  //bnb User Stats
const [bnbBalance, setbnbBalance] = useState(0)

  /*** END ***/

  /**** ADD LIQUIDITY FUNCTIONS ****/

  /**** END ****/

  /**** REMOVE LIQUIDITY FUNCTIONS ****/


  return (
    // Styling for howl market homepage (basic before complex) =

    <div>
      <Head>
        <title>InterestDex</title>
        <meta name="description" content="to-be-added" />
        <link rel="logo" href="diamond.jpg" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={styles.body}>
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        ></script>

        <nav className={styles.navbar}>
          <a href="#">
            <FontAwesomeIcon
              className={styles.bar}
              icon={faBars}
            ></FontAwesomeIcon>
          </a>
          <div className={styles.navbar2}>
          <a href="#">
            <img className={styles.image} src="knowledge.png" />
          </a>
            <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted;
             const connected =
               ready &&
               account &&
               chain 
            {if(!connected) {
              return (
                <button className={styles.connectButton}  onClick={openConnectModal} type="button">Connect</button>
              )
            } else {
              return (
                 <button className={styles.connectButton}  onClick={openAccountModal} type="button">Disconnect</button>
              )
            }}
      }}
          </ConnectButton.Custom>
          </div>
  
        </nav>
        <main className="row">
          <aside className="col-1">
            <ul className={styles.aside}>
              <li>
                <FontAwesomeIcon
                  style={{ fontSize: "25px", color: "white" }}
                  icon={faSackDollar}
                ></FontAwesomeIcon>
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ fontSize: "25px", color: "white" }}
                  icon={faPeopleGroup}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ fontSize: "25px", color: "white" }}
                  icon={faNetworkWired}
                />
              </li>
            </ul>
          </aside>
          <div className="col-7">
            <article className={styles.article}>
              <h1 className={styles.title}>Howl-DeFi</h1>
              <div className={styles.cards}>
                <div className="row">
                  {/*USD*/}
                  <div className="col-6">
                    <div className={styles.card}>
                      <b className={styles.bold}>$</b>{" "}
                      <FontAwesomeIcon
                        style={{ fontSize: "25px", color: "white" }}
                        icon={faBoxDollar}
                      />
                      <span>usdc Up to 2.88% APY</span>
                      <table>
                        <tr>
                          <td>
                            <b>Total Deposited</b>
                          </td>
                          <td>3,577,614 usdc</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Available Liquidity</b>
                          </td>
                          <td>718,726 usdc</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Total Borrowed</b>
                          </td>
                          <td>2,858,888 usdc</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Total Borrowed - Stable</b>
                          </td>
                          <td>16,767 usdc</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Total Borrowed - Variable</b>
                          </td>
                          <td>2,842,121 usdc</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Stable Borrow APR</b>
                          </td>
                          <td>5.90%</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Variable Borrow APR</b>
                          </td>
                          <td>4.00%</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Utilization Rate</b>
                          </td>
                          <td>79.91%</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  {/*asset/////*/}
                  <div className="col-6">
                    <div className={styles.card}>
                      <b className={styles.bold}>
                        <FontAwesomeIcon
                          style={{ fontSize: "25px", color: "white" }}
                          icon={faEuroSign}
                        />
                      </b>
                      <span> asset Up to 0.08% APY</span>
                      <table>
                        <tr>
                          <td className={styles.p}>
                            <b>Total Deposited</b>
                          </td>
                          <td>1,267,732 asset</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Available Liquidity</b>
                          </td>
                          <td>1,098,623 asset</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Total Borrowed</b>
                          </td>
                          <td>169,109 asset</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Total Borrowed - Stable</b>
                          </td>
                          <td>910 asset</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Total Borrowed - Variable</b>
                          </td>
                          <td>168,199 asset</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Stable Borrow APR</b>
                          </td>
                          <td>4.23%</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Variable Borrow APR</b>
                          </td>
                          <td>0.67%</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Utilization Rate</b>
                          </td>
                          <td>13.34%</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  {/*ERU/////*/}
                  <div className="col-6">
                    <div className={styles.card}>
                      <b className={styles.bold}>
                        <FontAwesomeIcon
                          style={{ fontSize: "25px", color: "white" }}
                          icon={faEuroSign}
                        />
                      </b>
                      <span> btc Up to 2.88% APY</span>
                      <table>
                        <tr>
                          <td>Total Deposited</td>
                          <td>3,577,614 btc</td>
                        </tr>
                        <tr>
                          <td>Available Liquidity</td>
                          <td>718,726 btc</td>
                        </tr>
                        <tr>
                          <td>Total Borrowed</td>
                          <td>2,858,888 btc</td>
                        </tr>
                        <tr>
                          <td>Total Borrowed - Stable</td>
                          <td>16,767 btc</td>
                        </tr>
                        <tr>
                          <td>Total Borrowed - Variable</td>
                          <td>2,842,121 btc</td>
                        </tr>
                        <tr>
                          <td>Stable Borrow APR</td>
                          <td>5.90%</td>
                        </tr>
                        <tr>
                          <td>Variable Borrow APR</td>
                          <td>4.00%</td>
                        </tr>
                        <tr>
                          <td>Utilization Rate</td>
                          <td>79.91%</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  {/*Strenge 2////*/}
                  <div className="col-6">
                    <div className={styles.card}>
                      <b className={styles.bold}></b>{" "}
                      <FontAwesomeIcon
                        style={{ fontSize: "25px", color: "white" }}
                        icon={faEuroSign}
                      />
                      <span> ETH Up to 2.88% APY</span>
                      <table>
                        <tr>
                          <td>Total Deposited</td>
                          <td>3,577,614 wasset</td>
                        </tr>
                        <tr>
                          <td>Available Liquidity</td>
                          <td>718,726 ETH</td>
                        </tr>
                        <tr>
                          <td>Total Borrowed</td>
                          <td>2,858,888 ETH</td>
                        </tr>
                        <tr>
                          <td>Total Borrowed - Stable</td>
                          <td>16,767 ETH</td>
                        </tr>
                        <tr>
                          <td>Total Borrowed - Variable</td>
                          <td>2,842,121 ETH</td>
                        </tr>
                        <tr>
                          <td>Stable Borrow APR</td>
                          <td>3.06%</td>
                        </tr>
                        <tr>
                          <td>Variable Borrow APR</td>
                          <td>0.05%</td>
                        </tr>
                        <tr>
                          <td>Utilization Rate</td>
                          <td>0.40%</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  {/*Strenge 3 ////*/}
                  <div className="col-6">
                    <div className={styles.card}>
                      <b className={styles.bold}>
                        <FontAwesomeIcon
                          style={{ fontSize: "25px", color: "white" }}
                          icon={faEuroSign}
                        />
                      </b>
                      <span> wETH Up to 2.88% APY</span>
                      <table>
                        <tr>
                          <td>Total Deposited</td>
                          <td>3,577,614 wETH</td>
                        </tr>
                        <tr>
                          <td>Available Liquidity</td>
                          <td>718,726 wETH</td>
                        </tr>
                        <tr>
                          <td>Total Borrowed</td>
                          <td>2,858,888 wETH</td>
                        </tr>
                        <tr>
                          <td>Total Borrowed - Stable</td>
                          <td>16,767 wETH</td>
                        </tr>
                        <tr>
                          <td>Total Borrowed - Variable</td>
                          <td>2,842,121 wETH</td>
                        </tr>
                        <tr>
                          <td>Stable Borrow APR</td>
                          <td>5.90%</td>
                        </tr>
                        <tr>
                          <td>Variable Borrow APR</td>
                          <td>4.00%</td>
                        </tr>
                        <tr>
                          <td>Utilization Rate</td>
                          <td>79.91%</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  {/*MOO///*/}
                  <div className="col-6">
                    <div className={styles.card}>
                      <b className={styles.bold}>
                        {" "}
                        <FontAwesomeIcon
                          style={{ fontSize: "25px", color: "white" }}
                          icon={faCow}
                        />
                      </b>
                      <span> wasset 0.01% APY</span>
                      <table>
                        <tr>
                          <td>Total Deposited</td>
                          <td>5, 979, 715 wasset</td>
                        </tr>
                        <tr>
                          <td>Available Liquidity</td>
                          <td>5, 955, 536 wasset</td>
                        </tr>
                        <tr>
                          <td>Total Borrowed</td>
                          <td>24, 178 wasset</td>
                        </tr>
                        <tr>
                          <td>Total Borrowed - Stable</td>
                          <td>8 wasset</td>
                        </tr>
                        <tr>
                          <td>Total Borrowed - Variable</td>
                          <td>24, 171 wasset</td>
                        </tr>
                        <tr>
                          <td>Stable Borrow APR</td>
                          <td>5.90%</td>
                        </tr>
                        <tr>
                          <td>Variable Borrow APR</td>
                          <td>4.00%</td>
                        </tr>
                        <tr>
                          <td>Utilization Rate</td>
                          <td>79.91%</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/*Strenge////*/}

          <div className="col-4 mt-3">
            <article className={styles.article}>
              <h1 className={styles.title}>Account</h1>

              <div className="dropdown">
                <button
                  className="btn btn-primary btn-lg form-group m-4 col-11 dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <div
                  className="dropdown-menu col-11"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-primary btn-lg form-group m-4 col-11 dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <div
                  className="dropdown-menu col-11"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-primary btn-lg form-group m-4 col-11 dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <div
                  className="dropdown-menu col-11"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-primary btn-lg form-group m-4 col-11 dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <div
                  className="dropdown-menu col-11"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-primary btn-lg form-group m-4 col-11 dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <div
                  className="dropdown-menu col-11"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </article>
          </div>
        </main>
        <div>
          <div>
            <h1 className={styles.title}>Howl-DeFi</h1>
            <div>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          Howl-DeFI DAPP by K42, Larry Cutts, Sahar-saba-amiri = Created{" "}
          {new Date().getFullYear()}
        </footer>
      </body>
    </div>
  );
}

