import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 1,
    lpSymbol: 'EGG-BNB LP',
    lpAddresses: {
      97: '0x913e27519b26bBA541cA3CCc649D60Aafb22385E',
      56: '0x913e27519b26bBA541cA3CCc649D60Aafb22385E',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '0x8558c62178C9f79caF2b3c8167d6495Ae90de4C1',
      56: '0x8558c62178C9f79caF2b3c8167d6495Ae90de4C1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 1,
    lpSymbol: 'NYAN2-ETH LP',
    lpAddresses: {
      97: '0x8558c62178C9f79caF2b3c8167d6495Ae90de4C1',
      56: '0x8558c62178C9f79caF2b3c8167d6495Ae90de4C1',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '0x8558c62178C9f79caF2b3c8167d6495Ae90de4C1',
      56: '0x8558c62178C9f79caF2b3c8167d6495Ae90de4C1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0x1AB3cA39fD5ADFb373bD5d5f05De10C2C8236d85',
      56: '0x1AB3cA39fD5ADFb373bD5d5f05De10C2C8236d85',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0x8558c62178C9f79caF2b3c8167d6495Ae90de4C1',
      56: '0x8558c62178C9f79caF2b3c8167d6495Ae90de4C1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
