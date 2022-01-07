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
[...] Generating list, please wait...
┌─────────┬──────────────────────────┬────────────────────────────────────────────────────────────────────────────┬──────────────────┬─────────────────────┐
│ (index) │      crvTokenSymbol      │                                  cvxPool                                   │   baseRewards    │  extraRewardTokens  │
├─────────┼──────────────────────────┼────────────────────────────────────────────────────────────────────────────┼──────────────────┼─────────────────────┤
│    0    │       'cDAI+cUSDC'       │                    'Curve.fi cDAI/cUSDC Convex Deposit'                    │ [ 'CRV', 'CVX' ] │         []          │
│    1    │    'cDAI+cUSDC+USDT'     │                 'Curve.fi cDAI/cUSDC/USDT Convex Deposit'                  │ [ 'CRV', 'CVX' ] │         []          │
│    2    │ 'yDAI+yUSDC+yUSDT+yTUSD' │              'Curve.fi yDAI/yUSDC/yUSDT/yTUSD Convex Deposit'              │ [ 'CRV', 'CVX' ] │         []          │
│    3    │ 'yDAI+yUSDC+yUSDT+yBUSD' │              'Curve.fi yDAI/yUSDC/yUSDT/yBUSD Convex Deposit'              │ [ 'CRV', 'CVX' ] │         []          │
│    4    │    'crvPlain3andSUSD'    │                'Curve.fi DAI/USDC/USDT/sUSD Convex Deposit'                │ [ 'CRV', 'CVX' ] │      [ 'SNX' ]      │
│    5    │        'ypaxCrv'         │                'Curve.fi DAI/USDC/USDT/PAX Convex Deposit'                 │ [ 'CRV', 'CVX' ] │         []          │
│    6    │       'crvRenWBTC'       │                   'Curve.fi renBTC/wBTC Convex Deposit'                    │ [ 'CRV', 'CVX' ] │         []          │
│    7    │      'crvRenWSBTC'       │                 'Curve.fi renBTC/wBTC/sBTC Convex Deposit'                 │ [ 'CRV', 'CVX' ] │      [ 'BPT' ]      │
│    8    │          'hCRV'          │                    'Curve.fi hBTC/wBTC Convex Deposit'                     │ [ 'CRV', 'CVX' ] │         []          │
│    9    │          '3Crv'          │                  'Curve.fi DAI/USDC/USDT Convex Deposit'                   │ [ 'CRV', 'CVX' ] │         []          │
│   10    │        'gusd3CRV'        │                    'Curve.fi GUSD/3Crv Convex Deposit'                     │ [ 'CRV', 'CVX' ] │         []          │
│   11    │        'husd3CRV'        │                    'Curve.fi HUSD/3Crv Convex Deposit'                     │ [ 'CRV', 'CVX' ] │         []          │
│   12    │        'usdk3CRV'        │                    'Curve.fi USDK/3Crv Convex Deposit'                     │ [ 'CRV', 'CVX' ] │         []          │
│   13    │        'usdn3CRV'        │                    'Curve.fi USDN/3Crv Convex Deposit'                     │ [ 'CRV', 'CVX' ] │         []          │
│   14    │        'musd3CRV'        │                    'Curve.fi MUSD/3Crv Convex Deposit'                     │ [ 'CRV', 'CVX' ] │      [ 'MTA' ]      │
│   15    │        'rsv3CRV'         │                     'Curve.fi RSV/3Crv Convex Deposit'                     │ [ 'CRV', 'CVX' ] │      [ 'RSR' ]      │
│   16    │      'tbtc/sbtcCrv'      │                   'Curve.fi tBTC/sbtcCrv Convex Deposit'                   │ [ 'CRV', 'CVX' ] │     [ 'KEEP' ]      │
│   17    │        'dusd3CRV'        │                    'Curve.fi DUSD/3Crv Convex Deposit'                     │ [ 'CRV', 'CVX' ] │      [ 'DFD' ]      │
│   18    │      'pBTC/sbtcCRV'      │                   'Curve.fi pBTC/sbtcCRV Convex Deposit'                   │ [ 'CRV', 'CVX' ] │      [ 'PNT' ]      │
│   19    │      'bBTC/sbtcCRV'      │                   'Curve.fi bBTC/sbtcCRV Convex Deposit'                   │ [ 'CRV', 'CVX' ] │         []          │
│   20    │      'oBTC/sbtcCRV'      │                   'Curve.fi oBTC/sbtcCRV Convex Deposit'                   │ [ 'CRV', 'CVX' ] │ [ 'BOR', 'BORING' ] │
│   21    │        'ust3CRV'         │                     'Curve.fi UST/3Crv Convex Deposit'                     │ [ 'CRV', 'CVX' ] │         []          │
│   22    │        'eursCRV'         │                    'Curve.fi EURS/sEUR Convex Deposit'                     │ [ 'CRV', 'CVX' ] │         []          │
│   23    │          'eCRV'          │                     'Curve.fi ETH/sETH Convex Deposit'                     │ [ 'CRV', 'CVX' ] │         []          │
│   24    │         'a3CRV'          │                 'Curve.fi aDAI/aUSDC/aUSDT Convex Deposit'                 │ [ 'CRV', 'CVX' ] │    [ 'stkAAVE' ]    │
│   25    │         'steCRV'         │                    'Curve.fi ETH/stETH Convex Deposit'                     │ [ 'CRV', 'CVX' ] │      [ 'LDO' ]      │
│   26    │         'saCRV'          │                    'Curve.fi aDAI/aSUSD Convex Deposit'                    │ [ 'CRV', 'CVX' ] │    [ 'stkAAVE' ]    │
│   27    │        'ankrCRV'         │                     'Curve.fi ETH/aETH Convex Deposit'                     │ [ 'CRV', 'CVX' ] │  [ 'ONX', 'ANKR' ]  │
│   28    │        'usdp3CRV'        │                    'Curve.fi USDP/3Crv Convex Deposit'                     │ [ 'CRV', 'CVX' ] │     [ 'DUCK' ]      │
│   29    │         'ib3CRV'         │               'Curve.fi cyDAI/cyUSDC/cyUSDT Convex Deposit'                │ [ 'CRV', 'CVX' ] │         []          │
│   30    │        'linkCRV'         │                    'Curve.fi LINK/sLINK Convex Deposit'                    │ [ 'CRV', 'CVX' ] │         []          │
│   31    │       'TUSD3CRV-f'       │          'Curve.fi Factory USD Metapool: TrueUSD Convex Deposit'           │ [ 'CRV', 'CVX' ] │         []          │
│   32    │       'FRAX3CRV-f'       │            'Curve.fi Factory USD Metapool: Frax Convex Deposit'            │ [ 'CRV', 'CVX' ] │      [ 'FXS' ]      │
│   33    │       'LUSD3CRV-f'       │          'Curve.fi Factory USD Metapool: Liquity Convex Deposit'           │ [ 'CRV', 'CVX' ] │     [ 'LQTY' ]      │
│   34    │       'BUSD3CRV-f'       │        'Curve.fi Factory USD Metapool: Binance USD Convex Deposit'         │ [ 'CRV', 'CVX' ] │         []          │
│   35    │          'rCRV'          │                     'Curve.fi ETH/rETH Convex Deposit'                     │ [ 'CRV', 'CVX' ] │      [ 'FIS' ]      │
│   36    │      'alUSD3CRV-f'       │        'Curve.fi Factory USD Metapool: Alchemix USD Convex Deposit'        │ [ 'CRV', 'CVX' ] │     [ 'ALCX' ]      │
│   37    │      'crvTricrypto'      │                   'Curve.fi USD-BTC-ETH Convex Deposit'                    │ [ 'CRV', 'CVX' ] │         []          │
│   38    │       'crv3crypto'       │                   'Curve.fi USD-BTC-ETH Convex Deposit'                    │ [ 'CRV', 'CVX' ] │         []          │
│   39    │         'EURT-f'         │         'Curve.fi Factory Plain Pool: Euro Tether Convex Deposit'          │ [ 'CRV', 'CVX' ] │         []          │
│   40    │     'MIM-3LP3CRV-f'      │ 'Curve.fi Factory USD Metapool: Magic Internet Money 3Pool Convex Deposit' │ [ 'CRV', 'CVX' ] │     [ 'SPELL' ]     │
│   41    │        'cvxcrv-f'        │            'Curve.fi Factory Plain Pool: cvxCRV Convex Deposit'            │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   42    │      'ibJPY+sJPY-f'      │          'Curve.fi Factory Plain Pool: ibJPY/sJPY Convex Deposit'          │ [ 'CRV', 'CVX' ] │ [ 'rKP3R', 'CVX' ]  │
│   43    │      'ibGBP+sGBP-f'      │          'Curve.fi Factory Plain Pool: ibGBP/sGBP Convex Deposit'          │ [ 'CRV', 'CVX' ] │ [ 'rKP3R', 'CVX' ]  │
│   44    │      'ibAUD+sAUD-f'      │          'Curve.fi Factory Plain Pool: ibAUD/sAUD Convex Deposit'          │ [ 'CRV', 'CVX' ] │ [ 'rKP3R', 'CVX' ]  │
│   45    │      'ibEUR+sEUR-f'      │          'Curve.fi Factory Plain Pool: ibEUR/sEUR Convex Deposit'          │ [ 'CRV', 'CVX' ] │ [ 'rKP3R', 'CVX' ]  │
│   46    │      'ibCHF+sCHF-f'      │          'Curve.fi Factory Plain Pool: ibCHF/sCHF Convex Deposit'          │ [ 'CRV', 'CVX' ] │ [ 'rKP3R', 'CVX' ]  │
│   47    │      'ibKRW+sKRW-f'      │          'Curve.fi Factory Plain Pool: ibKRW/sKRW Convex Deposit'          │ [ 'CRV', 'CVX' ] │ [ 'rKP3R', 'CVX' ]  │
│   48    │         'cvxRT'          │                        'Recue Token Convex Deposit'                        │ [ 'CRV', 'CVX' ] │         []          │
│   49    │      'alETH+ETH-f'       │               'Curve.fi Factory Pool: alETH Convex Deposit'                │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   50    │      'EURN/EURT-f'       │         'Curve.fi Factory Plain Pool: Neutrino EUR Convex Deposit'         │ [ 'CRV', 'CVX' ] │         []          │
│   51    │       'USDM3CRV-f'       │            'Curve.fi Factory USD Metapool: USDM Convex Deposit'            │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   52    │       'MIM-UST-f'        │           'Curve.fi Factory Plain Pool: MIM-UST Convex Deposit'            │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   53    │    'ibbtc/sbtcCRV-f'     │           'Curve.fi Factory BTC Metapool: ibBTC Convex Deposit'            │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   54    │      'crvEURSUSDC'       │                      'Curve EURS-USDC Convex Deposit'                      │ [ 'CRV', 'CVX' ] │         []          │
│   55    │       'crvEURTUSD'       │                      'Curve EURT-3Crv Convex Deposit'                      │ [ 'CRV', 'CVX' ] │         []          │
│   56    │       'OUSD3CRV-f'       │       'Curve.fi Factory USD Metapool: Origin Dollar Convex Deposit'        │ [ 'CRV', 'CVX' ] │  [ 'CVX', 'OGN' ]   │
│   57    │     'pax-usdp3CRV-f'     │    'Curve.fi Factory USD Metapool: Paxos Dollar (USDP) Convex Deposit'     │ [ 'CRV', 'CVX' ] │         []          │
│   58    │          'D3-f'          │            'Curve.fi Factory Plain Pool: d3pool Convex Deposit'            │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   59    │     'UST_whv23CRV-f'     │   'Curve.fi Factory USD Metapool: wormhole v2 UST-3Pool Convex Deposit'    │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   60    │       '3EURpool-f'       │           'Curve.fi Factory Plain Pool: 3EURpool Convex Deposit'           │ [ 'CRV', 'CVX' ] │ [ 'CVX', 'ANGLE' ]  │
│   61    │       'crvCRVETH'        │                       'Curve CRV-ETH Convex Deposit'                       │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   62    │    'DOLA3POOL3CRV-f'     │    'Curve.fi Factory USD Metapool: DOLA-3pool Curve LP Convex Deposit'     │ [ 'CRV', 'CVX' ] │         []          │
│   63    │        'RAI3CRV'         │                          'RAI3CRV Convex Deposit'                          │ [ 'CRV', 'CVX' ] │         []          │
│   64    │       'crvCVXETH'        │                       'Curve CVX-ETH Convex Deposit'                       │ [ 'CRV', 'CVX' ] │      [ 'CVX' ]      │
│   65    │       'crvXAUTUSD'       │                      'Curve XAUT-3Crv Convex Deposit'                      │ [ 'CRV', 'CVX' ] │         []          │
└─────────┴──────────────────────────┴────────────────────────────────────────────────────────────────────────────┴──────────────────┴─────────────────────┘
```
