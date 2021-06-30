import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'NYAN2',
    stakingTokenName: QuoteToken.NYAN,
    stakingTokenAddress: '0xa7438fc5c3e4c6c476ef2e5de851c2ecaab20883',
    contractAddress: {
      97: "0xE53221fE2A9B4cBa82e53624e789D997E27A6Afc",
      56: "0xE53221fE2A9B4cBa82e53624e789D997E27A6Afc"
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  
]

export default pools
