# Convex Pool Helper

Quick helper HH task to fetch all basic infos from Convex
- Fetches all pools name and index in Booster in a human-readable format
- Gets base reward of each pool
- Gets extra rewards of each pool

```shell
npx hardhat compile
npx hardhat convex-pools-list
```

# Example Output

```shell
# export BLOCK_NUMBER=13958675
# export NODE_URL=[YOUR_NODE_URL]
# npx hardhat convex-pools-list
[...] Fetching all pools info, please wait...
[...] Generating list, please wait...
[...] Fetching all pools info, please wait...
[...] Generating list, please wait...
┌─────────┬──────────────────────────────────────────────┬──────────────────────────┬────────────────────────────────────────────────────────────────────────────┬──────────────────────────────────────────────┬──────────────────┬─────────────────────┐
│ (index) │                   crvToken                   │      crvTokenSymbol      │                                  cvxPool                                   │                    gauge                     │   baseRewards    │  extraRewardTokens  │
├─────────┼──────────────────────────────────────────────┼──────────────────────────┼────────────────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────┼──────────────────┼─────────────────────┤
│    0    │ '0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2' │       'cDAI+cUSDC'       │                    'Curve.fi cDAI/cUSDC Convex Deposit'                    │ '0x7ca5b0a2910B33e9759DC7dDB0413949071D7575' │ [ 'CRV', 'CVX' ] │         []          │
│    1    │ '0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23' │    'cDAI+cUSDC+USDT'     │                 'Curve.fi cDAI/cUSDC/USDT Convex Deposit'                  │ '0xBC89cd85491d81C6AD2954E6d0362Ee29fCa8F53' │ [ 'CRV', 'CVX' ] │         []          │
│    2    │ '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8' │ 'yDAI+yUSDC+yUSDT+yTUSD' │              'Curve.fi yDAI/yUSDC/yUSDT/yTUSD Convex Deposit'              │ '0xFA712EE4788C042e2B7BB55E6cb8ec569C4530c1' │ [ 'CRV', 'CVX' ] │         []          │
│    3    │ '0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B' │ 'yDAI+yUSDC+yUSDT+yBUSD' │              'Curve.fi yDAI/yUSDC/yUSDT/yBUSD Convex Deposit'              │ '0x69Fb7c45726cfE2baDeE8317005d3F94bE838840' │ [ 'CRV', 'CVX' ] │         []          │
│    4    │ '0xC25a3A3b969415c80451098fa907EC722572917F' │    'crvPlain3andSUSD'    │                'Curve.fi DAI/USDC/USDT/sUSD Convex Deposit'                │ '0xA90996896660DEcC6E997655E065b23788857849' │ [ 'CRV', 'CVX' ] │      [ 'SNX' ]      │
│    5    │ '0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8' │        'ypaxCrv'         │                'Curve.fi DAI/USDC/USDT/PAX Convex Deposit'                 │ '0x64E3C23bfc40722d3B649844055F1D51c1ac041d' │ [ 'CRV', 'CVX' ] │         []          │
│    6    │ '0x49849C98ae39Fff122806C06791Fa73784FB3675' │       'crvRenWBTC'       │                   'Curve.fi renBTC/wBTC Convex Deposit'                    │ '0xB1F2cdeC61db658F091671F5f199635aEF202CAC' │ [ 'CRV', 'CVX' ] │         []          │
│    7    │ '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3' │      'crvRenWSBTC'       │                 'Curve.fi renBTC/wBTC/sBTC Convex Deposit'                 │ '0x705350c4BcD35c9441419DdD5d2f097d7a55410F' │ [ 'CRV', 'CVX' ] │      [ 'BPT' ]      │
│    8    │ '0xb19059ebb43466C323583928285a49f558E572Fd' │          'hCRV'          │                    'Curve.fi hBTC/wBTC Convex Deposit'                     │ '0x4c18E409Dc8619bFb6a1cB56D114C3f592E0aE79' │ [ 'CRV', 'CVX' ] │         []          │
│    9    │ '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490' │          '3Crv'          │                  'Curve.fi DAI/USDC/USDT Convex Deposit'                   │ '0xbFcF63294aD7105dEa65aA58F8AE5BE2D9d0952A' │ [ 'CRV', 'CVX' ] │         []          │
│   10    │ '0xD2967f45c4f384DEEa880F807Be904762a3DeA07' │        'gusd3CRV'        │                    'Curve.fi GUSD/3Crv Convex Deposit'                     │ '0xC5cfaDA84E902aD92DD40194f0883ad49639b023' │ [ 'CRV', 'CVX' ] │         []          │
│   11    │ '0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858' │        'husd3CRV'        │                    'Curve.fi HUSD/3Crv Convex Deposit'                     │ '0x2db0E83599a91b508Ac268a6197b8B14F5e72840' │ [ 'CRV', 'CVX' ] │         []          │
│   12    │ '0x97E2768e8E73511cA874545DC5Ff8067eB19B787' │        'usdk3CRV'        │                    'Curve.fi USDK/3Crv Convex Deposit'                     │ '0xC2b1DF84112619D190193E48148000e3990Bf627' │ [ 'CRV', 'CVX' ] │         []          │
│   13    │ '0x4f3E8F405CF5aFC05D68142F3783bDfE13811522' │        'usdn3CRV'        │                    'Curve.fi USDN/3Crv Convex Deposit'                     │ '0xF98450B5602fa59CC66e1379DFfB6FDDc724CfC4' │ [ 'CRV', 'CVX' ] │         []          │
│   14    │ '0x1AEf73d49Dedc4b1778d0706583995958Dc862e6' │        'musd3CRV'        │                    'Curve.fi MUSD/3Crv Convex Deposit'                     │ '0x5f626c30EC1215f4EdCc9982265E8b1F411D1352' │ [ 'CRV', 'CVX' ] │      [ 'MTA' ]      │
│   15    │ '0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35' │        'rsv3CRV'         │                     'Curve.fi RSV/3Crv Convex Deposit'                     │ '0x4dC4A289a8E33600D8bD4cf5F6313E43a37adec7' │ [ 'CRV', 'CVX' ] │      [ 'RSR' ]      │
│   16    │ '0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd' │      'tbtc/sbtcCrv'      │                   'Curve.fi tBTC/sbtcCrv Convex Deposit'                   │ '0x6828bcF74279eE32f2723eC536c22c51Eed383C6' │ [ 'CRV', 'CVX' ] │     [ 'KEEP' ]      │
│   17    │ '0x3a664Ab939FD8482048609f652f9a0B0677337B9' │        'dusd3CRV'        │                    'Curve.fi DUSD/3Crv Convex Deposit'                     │ '0xAEA6c312f4b3E04D752946d329693F7293bC2e6D' │ [ 'CRV', 'CVX' ] │      [ 'DFD' ]      │
│   18    │ '0xDE5331AC4B3630f94853Ff322B66407e0D6331E8' │      'pBTC/sbtcCRV'      │                   'Curve.fi pBTC/sbtcCRV Convex Deposit'                   │ '0xd7d147c6Bb90A718c3De8C0568F9B560C79fa416' │ [ 'CRV', 'CVX' ] │      [ 'PNT' ]      │
│   19    │ '0x410e3E86ef427e30B9235497143881f717d93c2A' │      'bBTC/sbtcCRV'      │                   'Curve.fi bBTC/sbtcCRV Convex Deposit'                   │ '0xdFc7AdFa664b08767b735dE28f9E84cd30492aeE' │ [ 'CRV', 'CVX' ] │         []          │
│   20    │ '0x2fE94ea3d5d4a175184081439753DE15AeF9d614' │      'oBTC/sbtcCRV'      │                   'Curve.fi oBTC/sbtcCRV Convex Deposit'                   │ '0x11137B10C210b579405c21A07489e28F3c040AB1' │ [ 'CRV', 'CVX' ] │ [ 'BOR', 'BORING' ] │
│   21    │ '0x94e131324b6054c0D789b190b2dAC504e4361b53' │        'ust3CRV'         │                     'Curve.fi UST/3Crv Convex Deposit'                     │ '0x3B7020743Bc2A4ca9EaF9D0722d42E20d6935855' │ [ 'CRV', 'CVX' ] │         []          │
│   22    │ '0x194eBd173F6cDacE046C53eACcE9B953F28411d1' │        'eursCRV'         │                    'Curve.fi EURS/sEUR Convex Deposit'                     │ '0x90Bb609649E0451E5aD952683D64BD2d1f245840' │ [ 'CRV', 'CVX' ] │         []          │
│   23    │ '0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c' │          'eCRV'          │                     'Curve.fi ETH/sETH Convex Deposit'                     │ '0x3C0FFFF15EA30C35d7A85B85c0782D6c94e1d238' │ [ 'CRV', 'CVX' ] │         []          │
│   24    │ '0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900' │         'a3CRV'          │                 'Curve.fi aDAI/aUSDC/aUSDT Convex Deposit'                 │ '0xd662908ADA2Ea1916B3318327A97eB18aD588b5d' │ [ 'CRV', 'CVX' ] │    [ 'stkAAVE' ]    │
│   25    │ '0x06325440D014e39736583c165C2963BA99fAf14E' │         'steCRV'         │                    'Curve.fi ETH/stETH Convex Deposit'                     │ '0x182B723a58739a9c974cFDB385ceaDb237453c28' │ [ 'CRV', 'CVX' ] │      [ 'LDO' ]      │
│   26    │ '0x02d341CcB60fAaf662bC0554d13778015d1b285C' │         'saCRV'          │                    'Curve.fi aDAI/aSUSD Convex Deposit'                    │ '0x462253b8F74B72304c145DB0e4Eebd326B22ca39' │ [ 'CRV', 'CVX' ] │    [ 'stkAAVE' ]    │
│   27    │ '0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf' │        'ankrCRV'         │                     'Curve.fi ETH/aETH Convex Deposit'                     │ '0x6d10ed2cF043E6fcf51A0e7b4C2Af3Fa06695707' │ [ 'CRV', 'CVX' ] │  [ 'ONX', 'ANKR' ]  │
│   28    │ '0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6' │        'usdp3CRV'        │                    'Curve.fi USDP/3Crv Convex Deposit'                     │ '0x055be5DDB7A925BfEF3417FC157f53CA77cA7222' │ [ 'CRV', 'CVX' ] │     [ 'DUCK' ]      │
│   29    │ '0x5282a4eF67D9C33135340fB3289cc1711c13638C' │         'ib3CRV'         │               'Curve.fi cyDAI/cyUSDC/cyUSDT Convex Deposit'                │ '0xF5194c3325202F456c95c1Cf0cA36f8475C1949F' │ [ 'CRV', 'CVX' ] │         []          │
│   30    │ '0xcee60cFa923170e4f8204AE08B4fA6A3F5656F3a' │        'linkCRV'         │                    'Curve.fi LINK/sLINK Convex Deposit'                    │ '0xFD4D8a17df4C27c1dD245d153ccf4499e806C87D' │ [ 'CRV', 'CVX' ] │         []          │
│   31    │ '0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1' │       'TUSD3CRV-f'       │          'Curve.fi Factory USD Metapool: TrueUSD Convex Deposit'           │ '0x359FD5d6417aE3D8D6497d9B2e7A890798262BA4' │ [ 'CRV', 'CVX' ] │         []          │
│   32    │ '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B' │       'FRAX3CRV-f'       │            'Curve.fi Factory USD Metapool: Frax Convex Deposit'            │ '0x72E158d38dbd50A483501c24f792bDAAA3e7D55C' │ [ 'CRV', 'CVX' ] │      [ 'FXS' ]      │
│   33    │ '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA' │       'LUSD3CRV-f'       │          'Curve.fi Factory USD Metapool: Liquity Convex Deposit'           │ '0x9B8519A9a00100720CCdC8a120fBeD319cA47a14' │ [ 'CRV', 'CVX' ] │     [ 'LQTY' ]      │
│   34    │ '0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a' │       'BUSD3CRV-f'       │        'Curve.fi Factory USD Metapool: Binance USD Convex Deposit'         │ '0xd4B22fEdcA85E684919955061fDf353b9d38389b' │ [ 'CRV', 'CVX' ] │         []          │
│   35    │ '0x53a901d48795C58f485cBB38df08FA96a24669D5' │          'rCRV'          │                     'Curve.fi ETH/rETH Convex Deposit'                     │ '0x824F13f1a2F29cFEEa81154b46C0fc820677A637' │ [ 'CRV', 'CVX' ] │      [ 'FIS' ]      │
│   36    │ '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c' │      'alUSD3CRV-f'       │        'Curve.fi Factory USD Metapool: Alchemix USD Convex Deposit'        │ '0x9582C4ADACB3BCE56Fea3e590F05c3ca2fb9C477' │ [ 'CRV', 'CVX' ] │     [ 'ALCX' ]      │
│   37    │ '0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF' │      'crvTricrypto'      │                   'Curve.fi USD-BTC-ETH Convex Deposit'                    │ '0x6955a55416a06839309018A8B0cB72c4DDC11f15' │ [ 'CRV', 'CVX' ] │         []          │
│   38    │ '0xc4AD29ba4B3c580e6D59105FFf484999997675Ff' │       'crv3crypto'       │                   'Curve.fi USD-BTC-ETH Convex Deposit'                    │ '0xDeFd8FdD20e0f34115C7018CCfb655796F6B2168' │ [ 'CRV', 'CVX' ] │         []          │
│   39    │ '0xFD5dB7463a3aB53fD211b4af195c5BCCC1A03890' │         'EURT-f'         │         'Curve.fi Factory Plain Pool: Euro Tether Convex Deposit'          │ '0xe8060Ad8971450E624d5289A10017dD30F5dA85F' │ [ 'CRV', 'CVX' ] │         []          │
│   40    │ '0x5a6A4D54456819380173272A5E8E9B9904BdF41B' │     'MIM-3LP3CRV-f'      │ 'Curve.fi Factory USD Metapool: Magic Internet Money 3Pool Convex Deposit' │ '0xd8b712d29381748dB89c36BCa0138d7c75866ddF' │ [ 'CRV', 'CVX' ] │     [ 'SPELL' ]     │
│   41    │ '0x9D0464996170c6B9e75eED71c68B99dDEDf279e8' │        'cvxcrv-f'        │            'Curve.fi Factory Plain Pool: cvxCRV Convex Deposit'            │ '0x903dA6213a5A12B61c821598154EfAd98C3B20E4' │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   42    │ '0x8818a9bb44Fbf33502bE7c15c500d0C783B73067' │      'ibJPY+sJPY-f'      │          'Curve.fi Factory Plain Pool: ibJPY/sJPY Convex Deposit'          │ '0xeFF437A56A22D7dD86C1202A308536ED8C7da7c1' │ [ 'CRV', 'CVX' ] │ [ 'rKP3R', 'CVX' ]  │
│   43    │ '0xD6Ac1CB9019137a896343Da59dDE6d097F710538' │      'ibGBP+sGBP-f'      │          'Curve.fi Factory Plain Pool: ibGBP/sGBP Convex Deposit'          │ '0x63d9f3aB7d0c528797A12a0684E50C397E9e79dC' │ [ 'CRV', 'CVX' ] │ [ 'rKP3R', 'CVX' ]  │
│   44    │ '0x3F1B0278A9ee595635B61817630cC19DE792f506' │      'ibAUD+sAUD-f'      │          'Curve.fi Factory Plain Pool: ibAUD/sAUD Convex Deposit'          │ '0x05ca5c01629a8E5845f12ea3A03fF7331932233A' │ [ 'CRV', 'CVX' ] │ [ 'rKP3R', 'CVX' ]  │
│   45    │ '0x19b080FE1ffA0553469D20Ca36219F17Fcf03859' │      'ibEUR+sEUR-f'      │          'Curve.fi Factory Plain Pool: ibEUR/sEUR Convex Deposit'          │ '0x99fb76F75501039089AAC8f20f487bf84E51d76F' │ [ 'CRV', 'CVX' ] │ [ 'rKP3R', 'CVX' ]  │
│   46    │ '0x9c2C8910F113181783c249d8F6Aa41b51Cde0f0c' │      'ibCHF+sCHF-f'      │          'Curve.fi Factory Plain Pool: ibCHF/sCHF Convex Deposit'          │ '0x2fA53e8fa5fAdb81f4332C8EcE39Fe62eA2f919E' │ [ 'CRV', 'CVX' ] │ [ 'rKP3R', 'CVX' ]  │
│   47    │ '0x8461A004b50d321CB22B7d034969cE6803911899' │      'ibKRW+sKRW-f'      │          'Curve.fi Factory Plain Pool: ibKRW/sKRW Convex Deposit'          │ '0x1750a3a3d80A3F5333BBe9c4695B0fAd41061ab1' │ [ 'CRV', 'CVX' ] │ [ 'rKP3R', 'CVX' ]  │
│   48    │ '0xB15fFb543211b558D40160811e5DcBcd7d5aaac9' │         'cvxRT'          │                        'Recue Token Convex Deposit'                        │ '0xB15fFb543211b558D40160811e5DcBcd7d5aaac9' │ [ 'CRV', 'CVX' ] │         []          │
│   49    │ '0xC4C319E2D4d66CcA4464C0c2B32c9Bd23ebe784e' │      'alETH+ETH-f'       │               'Curve.fi Factory Pool: alETH Convex Deposit'                │ '0x12dCD9E8D1577b5E4F066d8e7D404404Ef045342' │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   50    │ '0x3Fb78e61784C9c637D560eDE23Ad57CA1294c14a' │      'EURN/EURT-f'       │         'Curve.fi Factory Plain Pool: Neutrino EUR Convex Deposit'         │ '0xD9277b0D007464eFF133622eC0d42081c93Cef02' │ [ 'CRV', 'CVX' ] │         []          │
│   51    │ '0x5B3b5DF2BF2B6543f78e053bD91C4Bdd820929f1' │       'USDM3CRV-f'       │            'Curve.fi Factory USD Metapool: USDM Convex Deposit'            │ '0x9AF13a7B1f1Bbf1A2B05c6fBF23ac23A9E573b4E' │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   52    │ '0x55A8a39bc9694714E2874c1ce77aa1E599461E18' │       'MIM-UST-f'        │           'Curve.fi Factory Plain Pool: MIM-UST Convex Deposit'            │ '0xB518f5e3242393d4eC792BD3f44946A3b98d0E48' │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   53    │ '0xFbdCA68601f835b27790D98bbb8eC7f05FDEaA9B' │    'ibbtc/sbtcCRV-f'     │           'Curve.fi Factory BTC Metapool: ibBTC Convex Deposit'            │ '0x346C7BB1A7a6A30c8e81c14e90FC2f0FBddc54d8' │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   54    │ '0x3D229E1B4faab62F621eF2F6A610961f7BD7b23B' │      'crvEURSUSDC'       │                      'Curve EURS-USDC Convex Deposit'                      │ '0x65CA7Dc5CB661fC58De57B1E1aF404649a27AD35' │ [ 'CRV', 'CVX' ] │         []          │
│   55    │ '0x3b6831c0077a1e44ED0a21841C3bC4dC11bCE833' │       'crvEURTUSD'       │                      'Curve EURT-3Crv Convex Deposit'                      │ '0x4Fd86Ce7Ecea88F7E0aA78DC12625996Fb3a04bC' │ [ 'CRV', 'CVX' ] │         []          │
│   56    │ '0x87650D7bbfC3A9F10587d7778206671719d9910D' │       'OUSD3CRV-f'       │       'Curve.fi Factory USD Metapool: Origin Dollar Convex Deposit'        │ '0x25f0cE4E2F8dbA112D9b115710AC297F816087CD' │ [ 'CRV', 'CVX' ] │  [ 'CVX', 'OGN' ]   │
│   57    │ '0xc270b3B858c335B6BA5D5b10e2Da8a09976005ad' │     'pax-usdp3CRV-f'     │    'Curve.fi Factory USD Metapool: Paxos Dollar (USDP) Convex Deposit'     │ '0xC95bdf13A08A547E4dD9f29B00aB7fF08C5d093d' │ [ 'CRV', 'CVX' ] │         []          │
│   58    │ '0xBaaa1F5DbA42C3389bDbc2c9D2dE134F5cD0Dc89' │          'D3-f'          │            'Curve.fi Factory Plain Pool: d3pool Convex Deposit'            │ '0x16C2beE6f55dAB7F494dBa643fF52ef2D47FBA36' │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   59    │ '0xCEAF7747579696A2F0bb206a14210e3c9e6fB269' │     'UST_whv23CRV-f'     │   'Curve.fi Factory USD Metapool: wormhole v2 UST-3Pool Convex Deposit'    │ '0xb0f5d00e5916c8b8981e99191A1458704B587b2b' │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   60    │ '0xb9446c4Ef5EBE66268dA6700D26f96273DE3d571' │       '3EURpool-f'       │           'Curve.fi Factory Plain Pool: 3EURpool Convex Deposit'           │ '0x1E212e054d74ed136256fc5a5DDdB4867c6E003F' │ [ 'CRV', 'CVX' ] │ [ 'CVX', 'ANGLE' ]  │
│   61    │ '0xEd4064f376cB8d68F770FB1Ff088a3d0F3FF5c4d' │       'crvCRVETH'        │                       'Curve CRV-ETH Convex Deposit'                       │ '0x1cEBdB0856dd985fAe9b8fEa2262469360B8a3a6' │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   62    │ '0xAA5A67c256e27A5d80712c51971408db3370927D' │    'DOLA3POOL3CRV-f'     │    'Curve.fi Factory USD Metapool: DOLA-3pool Curve LP Convex Deposit'     │ '0x8Fa728F393588E8D8dD1ca397E9a710E53fA553a' │ [ 'CRV', 'CVX' ] │         []          │
│   63    │ '0x6BA5b4e438FA0aAf7C1bD179285aF65d13bD3D90' │        'RAI3CRV'         │                          'RAI3CRV Convex Deposit'                          │ '0x66ec719045bBD62db5eBB11184c18237D3Cc2E62' │ [ 'CRV', 'CVX' ] │         []          │
│   64    │ '0x3A283D9c08E8b55966afb64C515f5143cf907611' │       'crvCVXETH'        │                       'Curve CVX-ETH Convex Deposit'                       │ '0x7E1444BA99dcdFfE8fBdb42C02F0005D14f13BE1' │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   65    │ '0x8484673cA7BfF40F82B041916881aeA15ee84834' │       'crvXAUTUSD'       │                      'Curve XAUT-3Crv Convex Deposit'                      │ '0x1B3E14157ED33F60668f2103bCd5Db39a1573E5B' │ [ 'CRV', 'CVX' ] │         []          │
└─────────┴──────────────────────────────────────────────┴──────────────────────────┴────────────────────────────────────────────────────────────────────────────┴──────────────────────────────────────────────┴──────────────────┴─────────────────────┘
```
