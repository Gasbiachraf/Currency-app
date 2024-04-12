
import { useEffect, useState } from 'react';
import './firstSection.sass'
import axios from 'axios';

import Bitcoin from '../../../assets/img/Bitcoin.svg.png'
import Logo from '../../../assets/img/logo.png'
import Logo2 from '../../../assets/img/logo2.png'
import Logo3 from '../../../assets/img/logo3.png'


import { FaUser } from "react-icons/fa";
import { LuKanbanSquareDashed } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { RxBackpack } from "react-icons/rx";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

import { motion } from "framer-motion"


export const FirstSectionHome = () => {
    const navigate = useNavigate()

    const [crypto, setCrypto] = useState([])
    const [cryptoSave, setCryptoSave] = useState([])

    // const [achraf, setAchraf] = useState(

    //     [
    //         {
    //             "id": "bitcoin",
    //             "symbol": "btc",
    //             "name": "Bitcoin",
    //             "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    //             "current_price": 50077,
    //             "market_cap": 982889810165,
    //             "market_cap_rank": 1,
    //             "fully_diluted_valuation": 1051689054491,
    //             "total_volume": 37474187624,
    //             "high_24h": 50260,
    //             "low_24h": 47729,
    //             "price_change_24h": 1905.03,
    //             "price_change_percentage_24h": 3.95465,
    //             "market_cap_change_24h": 37213753733,
    //             "market_cap_change_percentage_24h": 3.93515,
    //             "circulating_supply": 19626225,
    //             "total_supply": 21000000,
    //             "max_supply": 21000000,
    //             "ath": 69045,
    //             "ath_change_percentage": -27.62876,
    //             "ath_date": "2021-11-10T14:24:11.849Z",
    //             "atl": 67.81,
    //             "atl_change_percentage": 73590.15054,
    //             "atl_date": "2013-07-06T00:00:00.000Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:47.038Z"
    //         },
    //         {
    //             "id": "ethereum",
    //             "symbol": "eth",
    //             "name": "Ethereum",
    //             "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    //             "current_price": 2662.89,
    //             "market_cap": 318358702446,
    //             "market_cap_rank": 2,
    //             "fully_diluted_valuation": 318358702446,
    //             "total_volume": 13896756962,
    //             "high_24h": 2663.2,
    //             "low_24h": 2472.23,
    //             "price_change_24h": 156.8,
    //             "price_change_percentage_24h": 6.25684,
    //             "market_cap_change_24h": 17229185786,
    //             "market_cap_change_percentage_24h": 5.72152,
    //             "circulating_supply": 120169997.442938,
    //             "total_supply": 120169997.442938,
    //             "max_supply": null,
    //             "ath": 4878.26,
    //             "ath_change_percentage": -45.71939,
    //             "ath_date": "2021-11-10T14:24:19.604Z",
    //             "atl": 0.432979,
    //             "atl_change_percentage": 611465.5934,
    //             "atl_date": "2015-10-20T00:00:00.000Z",
    //             "roi": {
    //                 "times": 70.10243840362233,
    //                 "currency": "btc",
    //                 "percentage": 7010.243840362234
    //             },
    //             "last_updated": "2024-02-12T22:50:19.910Z"
    //         },
    //         {
    //             "id": "tether",
    //             "symbol": "usdt",
    //             "name": "Tether",
    //             "image": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    //             "current_price": 1.001,
    //             "market_cap": 96474907729,
    //             "market_cap_rank": 3,
    //             "fully_diluted_valuation": 96474907729,
    //             "total_volume": 41199147732,
    //             "high_24h": 1.006,
    //             "low_24h": 0.997961,
    //             "price_change_24h": 0.00066959,
    //             "price_change_percentage_24h": 0.06696,
    //             "market_cap_change_24h": 151759411,
    //             "market_cap_change_percentage_24h": 0.15755,
    //             "circulating_supply": 96475135177.5782,
    //             "total_supply": 96475135177.5782,
    //             "max_supply": null,
    //             "ath": 1.32,
    //             "ath_change_percentage": -24.41983,
    //             "ath_date": "2018-07-24T00:00:00.000Z",
    //             "atl": 0.572521,
    //             "atl_change_percentage": 74.66567,
    //             "atl_date": "2015-03-02T00:00:00.000Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:17.144Z"
    //         },
    //         {
    //             "id": "binancecoin",
    //             "symbol": "bnb",
    //             "name": "BNB",
    //             "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    //             "current_price": 328.89,
    //             "market_cap": 50604106366,
    //             "market_cap_rank": 4,
    //             "fully_diluted_valuation": 50604106366,
    //             "total_volume": 729910876,
    //             "high_24h": 330.82,
    //             "low_24h": 315.62,
    //             "price_change_24h": 7.7,
    //             "price_change_percentage_24h": 2.39758,
    //             "market_cap_change_24h": 1156442024,
    //             "market_cap_change_percentage_24h": 2.33872,
    //             "circulating_supply": 153856150,
    //             "total_supply": 153856150,
    //             "max_supply": 200000000,
    //             "ath": 686.31,
    //             "ath_change_percentage": -52.16202,
    //             "ath_date": "2021-05-10T07:24:17.097Z",
    //             "atl": 0.0398177,
    //             "atl_change_percentage": 824445.92119,
    //             "atl_date": "2017-10-19T00:00:00.000Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:37.227Z"
    //         },
    //         {
    //             "id": "solana",
    //             "symbol": "sol",
    //             "name": "Solana",
    //             "image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
    //             "current_price": 111.33,
    //             "market_cap": 48556741856,
    //             "market_cap_rank": 5,
    //             "fully_diluted_valuation": 63220754477,
    //             "total_volume": 3024524646,
    //             "high_24h": 111.52,
    //             "low_24h": 103.73,
    //             "price_change_24h": 3.73,
    //             "price_change_percentage_24h": 3.46543,
    //             "market_cap_change_24h": 1475782729,
    //             "market_cap_change_percentage_24h": 3.13456,
    //             "circulating_supply": 437308922.907138,
    //             "total_supply": 569374976.734145,
    //             "max_supply": null,
    //             "ath": 259.96,
    //             "ath_change_percentage": -57.28737,
    //             "ath_date": "2021-11-06T21:54:35.825Z",
    //             "atl": 0.500801,
    //             "atl_change_percentage": 22071.55966,
    //             "atl_date": "2020-05-11T19:35:23.449Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:35.776Z"
    //         },
    //         {
    //             "id": "ripple",
    //             "symbol": "xrp",
    //             "name": "XRP",
    //             "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    //             "current_price": 0.531797,
    //             "market_cap": 28970381001,
    //             "market_cap_rank": 6,
    //             "fully_diluted_valuation": 53143441423,
    //             "total_volume": 1134369742,
    //             "high_24h": 0.536293,
    //             "low_24h": 0.514927,
    //             "price_change_24h": 0.00635978,
    //             "price_change_percentage_24h": 1.21038,
    //             "market_cap_change_24h": 317403275,
    //             "market_cap_change_percentage_24h": 1.10775,
    //             "circulating_supply": 54506969135,
    //             "total_supply": 99987912526,
    //             "max_supply": 100000000000,
    //             "ath": 3.4,
    //             "ath_change_percentage": -84.37762,
    //             "ath_date": "2018-01-07T00:00:00.000Z",
    //             "atl": 0.00268621,
    //             "atl_change_percentage": 19664.63237,
    //             "atl_date": "2014-05-22T00:00:00.000Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:26.785Z"
    //         },
    //         {
    //             "id": "usd-coin",
    //             "symbol": "usdc",
    //             "name": "USDC",
    //             "image": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    //             "current_price": 1,
    //             "market_cap": 27813924440,
    //             "market_cap_rank": 7,
    //             "fully_diluted_valuation": 25483198997,
    //             "total_volume": 6387216595,
    //             "high_24h": 1.008,
    //             "low_24h": 0.997124,
    //             "price_change_24h": 0.00066332,
    //             "price_change_percentage_24h": 0.06635,
    //             "market_cap_change_24h": -108878874.00551224,
    //             "market_cap_change_percentage_24h": -0.38993,
    //             "circulating_supply": 27800376117.1423,
    //             "total_supply": 25470785983.8999,
    //             "max_supply": null,
    //             "ath": 1.17,
    //             "ath_change_percentage": -14.75405,
    //             "ath_date": "2019-05-08T00:40:28.300Z",
    //             "atl": 0.877647,
    //             "atl_change_percentage": 13.90513,
    //             "atl_date": "2023-03-11T08:02:13.981Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:31.163Z"
    //         },
    //         {
    //             "id": "staked-ether",
    //             "symbol": "steth",
    //             "name": "Lido Staked Ether",
    //             "image": "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
    //             "current_price": 2660.32,
    //             "market_cap": 25560384915,
    //             "market_cap_rank": 8,
    //             "fully_diluted_valuation": 25560384915,
    //             "total_volume": 10789183,
    //             "high_24h": 2651.92,
    //             "low_24h": 2472.08,
    //             "price_change_24h": 155.01,
    //             "price_change_percentage_24h": 6.18743,
    //             "market_cap_change_24h": 1452551815,
    //             "market_cap_change_percentage_24h": 6.02523,
    //             "circulating_supply": 9639995.85373288,
    //             "total_supply": 9639995.85373288,
    //             "max_supply": null,
    //             "ath": 4829.57,
    //             "ath_change_percentage": -45.09876,
    //             "ath_date": "2021-11-10T14:40:47.256Z",
    //             "atl": 482.9,
    //             "atl_change_percentage": 449.0816,
    //             "atl_date": "2020-12-22T04:08:21.854Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:07.129Z"
    //         },
    //         {
    //             "id": "cardano",
    //             "symbol": "ada",
    //             "name": "Cardano",
    //             "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
    //             "current_price": 0.561546,
    //             "market_cap": 19726146815,
    //             "market_cap_rank": 9,
    //             "fully_diluted_valuation": 25269563252,
    //             "total_volume": 487757684,
    //             "high_24h": 0.564289,
    //             "low_24h": 0.531133,
    //             "price_change_24h": 0.02181503,
    //             "price_change_percentage_24h": 4.04184,
    //             "market_cap_change_24h": 768921776,
    //             "market_cap_change_percentage_24h": 4.05609,
    //             "circulating_supply": 35128292397.3343,
    //             "total_supply": 45000000000,
    //             "max_supply": 45000000000,
    //             "ath": 3.09,
    //             "ath_change_percentage": -81.88344,
    //             "ath_date": "2021-09-02T06:00:10.474Z",
    //             "atl": 0.01925275,
    //             "atl_change_percentage": 2804.7389,
    //             "atl_date": "2020-03-13T02:22:55.044Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:40.678Z"
    //         },
    //         {
    //             "id": "avalanche-2",
    //             "symbol": "avax",
    //             "name": "Avalanche",
    //             "image": "https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369",
    //             "current_price": 40.75,
    //             "market_cap": 14979966211,
    //             "market_cap_rank": 10,
    //             "fully_diluted_valuation": 17753251978,
    //             "total_volume": 832860557,
    //             "high_24h": 41.04,
    //             "low_24h": 38.48,
    //             "price_change_24h": 1.11,
    //             "price_change_percentage_24h": 2.80204,
    //             "market_cap_change_24h": 406913502,
    //             "market_cap_change_percentage_24h": 2.79223,
    //             "circulating_supply": 367481491.945069,
    //             "total_supply": 435514435.204961,
    //             "max_supply": 720000000,
    //             "ath": 144.96,
    //             "ath_change_percentage": -71.884,
    //             "ath_date": "2021-11-21T14:18:56.538Z",
    //             "atl": 2.8,
    //             "atl_change_percentage": 1355.06448,
    //             "atl_date": "2020-12-31T13:15:21.540Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:45.420Z"
    //         },
    //         {
    //             "id": "chainlink",
    //             "symbol": "link",
    //             "name": "Chainlink",
    //             "image": "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
    //             "current_price": 20.69,
    //             "market_cap": 12146642708,
    //             "market_cap_rank": 11,
    //             "fully_diluted_valuation": 20689223815,
    //             "total_volume": 975671306,
    //             "high_24h": 20.82,
    //             "low_24h": 19.8,
    //             "price_change_24h": 0.550132,
    //             "price_change_percentage_24h": 2.73172,
    //             "market_cap_change_24h": 308343286,
    //             "market_cap_change_percentage_24h": 2.60462,
    //             "circulating_supply": 587099971.3083414,
    //             "total_supply": 1000000000,
    //             "max_supply": 1000000000,
    //             "ath": 52.7,
    //             "ath_change_percentage": -60.86469,
    //             "ath_date": "2021-05-10T00:13:57.214Z",
    //             "atl": 0.148183,
    //             "atl_change_percentage": 13817.21838,
    //             "atl_date": "2017-11-29T00:00:00.000Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:45.210Z"
    //         },
    //         {
    //             "id": "dogecoin",
    //             "symbol": "doge",
    //             "name": "Dogecoin",
    //             "image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
    //             "current_price": 0.082421,
    //             "market_cap": 11758958253,
    //             "market_cap_rank": 12,
    //             "fully_diluted_valuation": 11758925372,
    //             "total_volume": 430866769,
    //             "high_24h": 0.082762,
    //             "low_24h": 0.079539,
    //             "price_change_24h": 0.0012081,
    //             "price_change_percentage_24h": 1.48758,
    //             "market_cap_change_24h": 134737155,
    //             "market_cap_change_percentage_24h": 1.15911,
    //             "circulating_supply": 143047636383.705,
    //             "total_supply": 143047776383.705,
    //             "max_supply": null,
    //             "ath": 0.731578,
    //             "ath_change_percentage": -88.76421,
    //             "ath_date": "2021-05-08T05:08:23.458Z",
    //             "atl": 0.0000869,
    //             "atl_change_percentage": 94485.73331,
    //             "atl_date": "2015-05-06T00:00:00.000Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:37.761Z"
    //         },
    //         {
    //             "id": "tron",
    //             "symbol": "trx",
    //             "name": "TRON",
    //             "image": "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1696502193",
    //             "current_price": 0.125349,
    //             "market_cap": 11046900520,
    //             "market_cap_rank": 13,
    //             "fully_diluted_valuation": 11046900520,
    //             "total_volume": 305633314,
    //             "high_24h": 0.126203,
    //             "low_24h": 0.123515,
    //             "price_change_24h": 0.00108026,
    //             "price_change_percentage_24h": 0.86929,
    //             "market_cap_change_24h": 92514589,
    //             "market_cap_change_percentage_24h": 0.84454,
    //             "circulating_supply": 88076912825.0573,
    //             "total_supply": 88076912825.0573,
    //             "max_supply": null,
    //             "ath": 0.231673,
    //             "ath_change_percentage": -45.91368,
    //             "ath_date": "2018-01-05T00:00:00.000Z",
    //             "atl": 0.00180434,
    //             "atl_change_percentage": 6844.542,
    //             "atl_date": "2017-11-12T00:00:00.000Z",
    //             "roi": {
    //                 "times": 64.9731979526752,
    //                 "currency": "usd",
    //                 "percentage": 6497.319795267521
    //             },
    //             "last_updated": "2024-02-12T22:50:41.662Z"
    //         },
    //         {
    //             "id": "polkadot",
    //             "symbol": "dot",
    //             "name": "Polkadot",
    //             "image": "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1696512008",
    //             "current_price": 7.32,
    //             "market_cap": 9718152282,
    //             "market_cap_rank": 14,
    //             "fully_diluted_valuation": 10309863402,
    //             "total_volume": 251243943,
    //             "high_24h": 7.37,
    //             "low_24h": 6.99,
    //             "price_change_24h": 0.216332,
    //             "price_change_percentage_24h": 3.04653,
    //             "market_cap_change_24h": 279201728,
    //             "market_cap_change_percentage_24h": 2.95797,
    //             "circulating_supply": 1329493352.95064,
    //             "total_supply": 1410442485.78239,
    //             "max_supply": null,
    //             "ath": 54.98,
    //             "ath_change_percentage": -86.70293,
    //             "ath_date": "2021-11-04T14:10:09.301Z",
    //             "atl": 2.7,
    //             "atl_change_percentage": 171.02759,
    //             "atl_date": "2020-08-20T05:48:11.359Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:35.973Z"
    //         },
    //         {
    //             "id": "matic-network",
    //             "symbol": "matic",
    //             "name": "Polygon",
    //             "image": "https://assets.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
    //             "current_price": 0.883928,
    //             "market_cap": 8183590381,
    //             "market_cap_rank": 15,
    //             "fully_diluted_valuation": 8815727816,
    //             "total_volume": 397383884,
    //             "high_24h": 0.883956,
    //             "low_24h": 0.819135,
    //             "price_change_24h": 0.050202,
    //             "price_change_percentage_24h": 6.02143,
    //             "market_cap_change_24h": 429936595,
    //             "market_cap_change_percentage_24h": 5.54495,
    //             "circulating_supply": 9282943566.203985,
    //             "total_supply": 10000000000,
    //             "max_supply": 10000000000,
    //             "ath": 2.92,
    //             "ath_change_percentage": -69.77283,
    //             "ath_date": "2021-12-27T02:08:34.307Z",
    //             "atl": 0.00314376,
    //             "atl_change_percentage": 27939.78729,
    //             "atl_date": "2019-05-10T00:00:00.000Z",
    //             "roi": {
    //                 "times": 335.0944722895368,
    //                 "currency": "usd",
    //                 "percentage": 33509.44722895368
    //             },
    //             "last_updated": "2024-02-12T22:50:41.130Z"
    //         },
    //         {
    //             "id": "wrapped-bitcoin",
    //             "symbol": "wbtc",
    //             "name": "Wrapped Bitcoin",
    //             "image": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857",
    //             "current_price": 50033,
    //             "market_cap": 7857372212,
    //             "market_cap_rank": 16,
    //             "fully_diluted_valuation": 7857372212,
    //             "total_volume": 331309868,
    //             "high_24h": 50249,
    //             "low_24h": 47683,
    //             "price_change_24h": 1936.31,
    //             "price_change_percentage_24h": 4.02584,
    //             "market_cap_change_24h": 270675078,
    //             "market_cap_change_percentage_24h": 3.56776,
    //             "circulating_supply": 156932.05371727,
    //             "total_supply": 156932.05371727,
    //             "max_supply": 156932.05371727,
    //             "ath": 70643,
    //             "ath_change_percentage": -29.2751,
    //             "ath_date": "2021-11-10T14:40:19.650Z",
    //             "atl": 3139.17,
    //             "atl_change_percentage": 1491.58066,
    //             "atl_date": "2019-04-02T00:00:00.000Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:34.324Z"
    //         },
    //         {
    //             "id": "the-open-network",
    //             "symbol": "ton",
    //             "name": "Toncoin",
    //             "image": "https://assets.coingecko.com/coins/images/17980/large/ton_symbol.png?1696517498",
    //             "current_price": 2.24,
    //             "market_cap": 7750948164,
    //             "market_cap_rank": 17,
    //             "fully_diluted_valuation": 11436200885,
    //             "total_volume": 53392829,
    //             "high_24h": 2.24,
    //             "low_24h": 2.08,
    //             "price_change_24h": 0.139447,
    //             "price_change_percentage_24h": 6.64707,
    //             "market_cap_change_24h": 489541569,
    //             "market_cap_change_percentage_24h": 6.74169,
    //             "circulating_supply": 3458320614.70169,
    //             "total_supply": 5102607892.27507,
    //             "max_supply": null,
    //             "ath": 5.29,
    //             "ath_change_percentage": -57.63323,
    //             "ath_date": "2021-11-12T06:50:02.476Z",
    //             "atl": 0.519364,
    //             "atl_change_percentage": 331.59328,
    //             "atl_date": "2021-09-21T00:33:11.092Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:37.873Z"
    //         },
    //         {
    //             "id": "internet-computer",
    //             "symbol": "icp",
    //             "name": "Internet Computer",
    //             "image": "https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png?1696514180",
    //             "current_price": 13.34,
    //             "market_cap": 6110339236,
    //             "market_cap_rank": 18,
    //             "fully_diluted_valuation": 6862014167,
    //             "total_volume": 128132556,
    //             "high_24h": 13.48,
    //             "low_24h": 12.57,
    //             "price_change_24h": 0.376948,
    //             "price_change_percentage_24h": 2.90862,
    //             "market_cap_change_24h": 168033790,
    //             "market_cap_change_percentage_24h": 2.82775,
    //             "circulating_supply": 457882995.57438,
    //             "total_supply": 514210337.778457,
    //             "max_supply": null,
    //             "ath": 700.65,
    //             "ath_change_percentage": -98.09341,
    //             "ath_date": "2021-05-10T16:05:53.653Z",
    //             "atl": 2.87,
    //             "atl_change_percentage": 366.26108,
    //             "atl_date": "2023-09-22T00:29:57.369Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:20.342Z"
    //         },
    //         {
    //             "id": "shiba-inu",
    //             "symbol": "shib",
    //             "name": "Shiba Inu",
    //             "image": "https://assets.coingecko.com/coins/images/11939/large/shiba.png?1696511800",
    //             "current_price": 0.00000966,
    //             "market_cap": 5689829378,
    //             "market_cap_rank": 19,
    //             "fully_diluted_valuation": 9655374499,
    //             "total_volume": 162038994,
    //             "high_24h": 0.00000967,
    //             "low_24h": 0.00000923,
    //             "price_change_24h": 2.49782e-7,
    //             "price_change_percentage_24h": 2.65543,
    //             "market_cap_change_24h": 151039875,
    //             "market_cap_change_percentage_24h": 2.72695,
    //             "circulating_supply": 589281034377959.9,
    //             "total_supply": 999982370928478,
    //             "max_supply": null,
    //             "ath": 0.00008616,
    //             "ath_change_percentage": -88.79171,
    //             "ath_date": "2021-10-28T03:54:55.568Z",
    //             "atl": 5.6366e-11,
    //             "atl_change_percentage": 17132327.19764,
    //             "atl_date": "2020-11-28T11:26:25.838Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:42.310Z"
    //         },
    //         {
    //             "id": "bitcoin-cash",
    //             "symbol": "bch",
    //             "name": "Bitcoin Cash",
    //             "image": "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932",
    //             "current_price": 282.66,
    //             "market_cap": 5551426773,
    //             "market_cap_rank": 20,
    //             "fully_diluted_valuation": 5935771542,
    //             "total_volume": 485178822,
    //             "high_24h": 287.67,
    //             "low_24h": 267.58,
    //             "price_change_24h": 4.98,
    //             "price_change_percentage_24h": 1.793,
    //             "market_cap_change_24h": 98011273,
    //             "market_cap_change_percentage_24h": 1.79725,
    //             "circulating_supply": 19640237.3966508,
    //             "total_supply": 21000000,
    //             "max_supply": 21000000,
    //             "ath": 3785.82,
    //             "ath_change_percentage": -92.54327,
    //             "ath_date": "2017-12-20T00:00:00.000Z",
    //             "atl": 76.93,
    //             "atl_change_percentage": 266.93182,
    //             "atl_date": "2018-12-16T00:00:00.000Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:24.516Z"
    //         },
    //         {
    //             "id": "bittensor",
    //             "symbol": "tao",
    //             "name": "Bittensor",
    //             "image": "https://assets.coingecko.com/coins/images/28452/large/ARUsPeNQ_400x400.jpeg?1696527447",
    //             "current_price": 537.53,
    //             "market_cap": 3350409296,
    //             "market_cap_rank": 30,
    //             "fully_diluted_valuation": 3350594746,
    //             "total_volume": 23698597,
    //             "high_24h": 585.3,
    //             "low_24h": 534.19,
    //             "price_change_24h": -4.415775153525601,
    //             "price_change_percentage_24h": -0.81479,
    //             "market_cap_change_24h": -26814431.36196947,
    //             "market_cap_change_percentage_24h": -0.79398,
    //             "circulating_supply": 6232915,
    //             "total_supply": 6233260,
    //             "max_supply": 21000000,
    //             "ath": 613.69,
    //             "ath_change_percentage": -11.69633,
    //             "ath_date": "2024-02-10T19:03:54.794Z",
    //             "atl": 30.83,
    //             "atl_change_percentage": 1657.73873,
    //             "atl_date": "2023-05-14T08:57:53.732Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:49:51.134Z"
    //         },
    //         {
    //             "id": "filecoin",
    //             "symbol": "fil",
    //             "name": "Filecoin",
    //             "image": "https://assets.coingecko.com/coins/images/12817/large/filecoin.png?1696512609",
    //             "current_price": 5.45,
    //             "market_cap": 2762152316,
    //             "market_cap_rank": 40,
    //             "fully_diluted_valuation": 10662284408,
    //             "total_volume": 140952664,
    //             "high_24h": 5.49,
    //             "low_24h": 5.22,
    //             "price_change_24h": 0.151855,
    //             "price_change_percentage_24h": 2.86396,
    //             "market_cap_change_24h": 74588923,
    //             "market_cap_change_percentage_24h": 2.77534,
    //             "circulating_supply": 507995790,
    //             "total_supply": 1960932962,
    //             "max_supply": 1960932962,
    //             "ath": 236.84,
    //             "ath_change_percentage": -97.70003,
    //             "ath_date": "2021-04-01T13:29:41.564Z",
    //             "atl": 2.64,
    //             "atl_change_percentage": 106.26001,
    //             "atl_date": "2022-12-16T22:45:28.552Z",
    //             "roi": null,
    //             "last_updated": "2024-02-12T22:50:35.881Z"
    //         }
    //     ])

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline-false")
            .then((res) => {
                console.table(res.data)
                setCrypto(res.data)
                setCryptoSave(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(crypto);
    console.log(cryptoSave);

    // ^^ average currency :
    function Average(high, low) {
        let calcul = (high + low) / 2
        return (calcul.toFixed(11))
    }
    // ^^ flesh currency up/down (%) :
    function Icone(params) {
        if (params > 0) {
            return (<GoArrowUpRight className='text-xl' />)
        } else {
            return (<GoArrowDownRight className='text-xl' />)
        }
    }



    return (
        <>
            <div className=' h-screen w-100 flex justify-center items-center'>
                <div className='h-[100%] w-[100%] colorContainer  p-4 flex gap-1'>
                    {/* left div */}
                    <div className='w-[15%] h-[100%]  rounded-2xl text-gray-400 pr-6 flex flex-col justify-between'>
                        <div className=' pl-2 h-[50%] w-[100%]'>
                            <img onClick={() => { navigate('/') }} src={Logo3} alt="" />
                            <div className=' h-[60%] w-[100%] flex flex-col justify-between'>

                                <div className='flex items-center  hover:bg-slate-500 py-1 rounded-full px-3'>
                                    <LuKanbanSquareDashed className='text-2xl' />
                                    <p className='text-xl pl-3'>Dashboard</p>
                                </div>
                                <div className='items-center w-[100%] flex justify-between hover:bg-slate-500 py-1 rounded-full px-3'>
                                    <CiWallet className='text-2xl' />
                                    <select className='w-[86%] text-xl bg-transparent outline-none' name="" id="">
                                        <option className='' value="">Wallets</option>
                                    </select>
                                </div>
                                <div className='flex items-center  hover:bg-slate-500 py-1 rounded-full px-3'>
                                    <RxBackpack className='text-2xl' />
                                    <p className='text-xl pl-3'>trade</p>
                                </div>
                                <div className='flex items-center  hover:bg-slate-500 py-1 rounded-full px-3'>
                                    <MdOutlineCurrencyExchange className='text-2xl' />
                                    <p className='text-xl pl-3'>Exchange</p>
                                </div>
                            </div>
                        </div>
                        <div className=' h-[8%] flex flex-col justify-between'>
                            <div className='flex items-center py-1  hover:bg-slate-500  rounded-full px-3'>
                                <MdOutlineContactSupport className='text-2xl' />
                                <p onClick={() => { navigate('/contact') }} className='text-xl pl-3'>Contact </p>
                            </div>
                            {/* <div className='flex items-center py-1  hover:bg-slate-500  rounded-full px-3'>
                                <IoSettingsOutline className='text-2xl' />
                                <p className='text-xl pl-3'>Settings</p>
                            </div> */}
                        </div>
                    </div>
                    {/* right div */}
                    <div className='w-[85%] h-[100%]  rounded-2xl gap-2 flex flex-col'>
                        <div className='w-100 h-[40%] colorContainerChild rounded-xl'>
                        </div>
                        <div className='w-100 h-[60%] colorContainerChild rounded-xl p-3  '>
                            <div>
                                <table className='w-[100%]  '>
                                    <thead className='w-[100%]'>
                                        <tr className='text-green-500 text-left h-[8vh] '>
                                            <th className='w-[3%]'>#</th>
                                            <th className='w-[14%]'>Name</th>
                                            <th className='w-[11%]'>Price </th>
                                            <th className='w-[12%]'>Price change (%)</th>
                                            <th className='w-[12%]'>Market cap</th>
                                            <th className='w-[12%]'>Volume</th>
                                            <th className='w-[12%]'>high Price (24h)</th>
                                            <th className='w-[12%]'>low Price (24h)</th>
                                            <th className='w-[12%]'>Average (24h)</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className='overflow-y-auto w-100 h-[40vh] scroll'>
                                <table className='w-[100%]  '>
                                    <tbody className='w-[100%] '>
                                        {
                                            crypto.map((element, index) =>
                                                <>
                                                    <tr key={index} className=' text-left text-white h-[8vh]   '>
                                                        <td className='w-[3%]   '>{element.market_cap_rank}</td>
                                                        <td className='w-[13.8%]  '><div className='flex'><img className='w-[2vw] p-1 items-center' src={element.image} alt="" /> <p className='pl-2 pt-1'>{element.name}</p></div></td>
                                                        <td className='w-[11%]  '>${element.current_price}</td>
                                                        <td className={`w-[12%]    ${element.price_change_percentage_24h > 0 ? "text-green-500 " : "text-red-600"} `}> <div className='flex items-center'> {Icone(element.price_change_percentage_24h)} {element.price_change_percentage_24h}</div> </td>
                                                        <td className='w-[12%]   '>{element.market_cap}</td>
                                                        <td className='w-[12%]   '>{element.total_volume}</td>
                                                        <td className='w-[12%]   '>${element.high_24h}</td>
                                                        <td className='w-[12%]   '>${element.low_24h}</td>
                                                        <td className='w-[12%]   '>${Average(element.high_24h, element.low_24h)}</td>
                                                    </tr>
                                                </>
                                            )
                                        } 
                                        {
                                            // achraf.map((element, index) =>
                                            //     <>
                                            //         <tr key={index} className=' text-left text-white h-[8vh]   '>
                                            //             <td className=' w-[3%]'>{element.market_cap_rank}</td>
                                            //             <td className=' w-[14%]'><div className='flex items-center '><img className='w-[2vw] h-[4.5vh] p-1 items-center' src={element.image} alt="" /> <p className='pl-2 '>{element.name}</p></div></td>
                                            //             <td className=' w-[11%]'>${element.current_price}</td>
                                            //             <td className={`w-[12%] ${element.price_change_percentage_24h > 0 ? "text-green-500 " : "text-red-600"} `}><div className='flex items-center'> {Icone(element.price_change_percentage_24h)} {element.price_change_percentage_24h}</div> </td>
                                            //             <td className=' w-[12%]'>{element.market_cap}</td>
                                            //             <td className=' w-[12%]'>{element.total_volume}</td>
                                            //             <td className=' w-[12%]'>${element.high_24h}</td>
                                            //             <td className=' w-[12%]'>${element.low_24h}</td>
                                            //             <td className=' w-[12%] text-blue-600'>${Average(element.high_24h, element.low_24h)}</td>
                                            //         </tr>
                                            //     </>
                                            // )
                                        }
                                    </tbody>
                                </table>
                            </div>








                        </div>


                    </div>



                </div>
            </div>
            {/* {
                currency.map((element , index)=>
                <>
                <p>{element.id}</p>
                </>)
            } */}
        </>

    );
}
