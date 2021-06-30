import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'NYAN2',
    stakingTokenName: QuoteToken.NYAN,
    stakingTokenAddress: '0xa7438fc5c3e4c6c476ef2e5de851c2ecaab20883',
    contractAddress: {
      97: "0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a",
      56: "0xC885b97220ad6a8dfE4AC7aF7C7A4776c7A21f06"
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
