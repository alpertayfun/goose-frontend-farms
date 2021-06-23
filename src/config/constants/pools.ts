import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'NYAN2',
    stakingTokenName: QuoteToken.NYAN,
    stakingTokenAddress: '0x45b07DF4FE00202dd31F2D95f6C06f3A029625D5',
    contractAddress: {
      97: '0xA7438fC5c3E4C6C476Ef2E5de851c2ECAAb20883',
      56: '0xA7438fC5c3E4C6C476Ef2E5de851c2ECAAb20883',
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
