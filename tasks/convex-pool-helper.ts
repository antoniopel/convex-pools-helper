import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Contract, Provider } from 'ethers-multicall';
import { FormatTypes } from "ethers/lib/utils";

const BOOSTER = "0xF403C135812408BFbE8713b5A23a04b3D48AAE31";

task(
  "convex-pools-list",
  "Prints a detailed list of Convex Pools",
  async (taskArgs, hre: HardhatRuntimeEnvironment) => {

    const { ethers } = hre;

    const ethcallProvider = new Provider(hre.ethers.provider, 1);

    let IBooster = await ethers.getContractAt('IBooster', BOOSTER);
    

    const MulticallBooster = new Contract(BOOSTER, JSON.parse(<string>IBooster.interface.format(FormatTypes.json)));

    let poolLength = (await IBooster.poolLength()).toNumber();

    let poolsInfo = [];
    for (let i = 0; i < poolLength; i++) {
        poolsInfo.push(MulticallBooster.poolInfo(i));
    }

    console.log("[...] Fetching all pools info, please wait...");

    poolsInfo = await ethcallProvider.all(poolsInfo);

    console.log("[...] Generating list, please wait...");

    let poolsDetailedInfo = await Promise.all(poolsInfo.map(async poolInfo => {

        //console.log(`[+] Fetching Convex Pool data (${poolInfo[1]})`);
        let crvToken = await ethers.getContractAt('IERC20', poolInfo[0]);
        let cvxPool = await ethers.getContractAt('IERC20', poolInfo[1]);
        let rewardsContract = await ethers.getContractAt('IReward', poolInfo[3]);
        let baseRewardToken = await ethers.getContractAt('IERC20', await rewardsContract.rewardToken());

        let crvTokenSymbol = await crvToken.symbol();
        let cvxPoolName = await cvxPool.name();
        let baseRewardTokenSymbol = await baseRewardToken.symbol();

        let extraRewardsCount = await rewardsContract.extraRewardsLength();

        let extraRewardTokens = [];
        for (let i = 0; i < extraRewardsCount.toNumber(); i++) {

            let extraRewardContract = await ethers.getContractAt('IReward', await rewardsContract.extraRewards(i));
            let extraRewardToken = await ethers.getContractAt('IERC20', await extraRewardContract.rewardToken());

            extraRewardTokens.push(await extraRewardToken.symbol());
        }

        return {
            crvToken: poolInfo[0],
            crvTokenSymbol: crvTokenSymbol,
            cvxPool: cvxPoolName,
            gauge: poolInfo[2],
            baseRewards: [ baseRewardTokenSymbol, "CVX" ],
            extraRewardTokens
        }
    }));

    console.table(poolsDetailedInfo)

  }
);
