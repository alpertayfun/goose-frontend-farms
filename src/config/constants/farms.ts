import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'
//0xc970d43d330d8d591796bd93d42af9d65c271313
const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'NYAN2',
    lpAddresses: {
      97: '0xA7438fC5c3E4C6C476Ef2E5de851c2ECAAb20883',
      56: '0xA7438fC5c3E4C6C476Ef2E5de851c2ECAAb20883',
    },
    tokenSymbol: 'CATNIP',
    tokenAddresses: {
      97: '0xA7438fC5c3E4C6C476Ef2E5de851c2ECAAb20883',
      56: '0xA7438fC5c3E4C6C476Ef2E5de851c2ECAAb20883',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'NYAN2-BNB LP',
    lpAddresses: {
      97: '0xC970D43d330d8d591796Bd93d42af9D65c271313',
      56: '0xC970D43d330d8d591796Bd93d42af9D65c271313',
    },
    tokenSymbol: 'NYAN2',
    tokenAddresses: {
      97: '0xA7438fC5c3E4C6C476Ef2E5de851c2ECAAb20883',
      56: '0xA7438fC5c3E4C6C476Ef2E5de851c2ECAAb20883',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    lpSymbol: 'NYAN2-BUSD LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0xf8be3eaa26866995258892b277f4979991909884',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xD7A340Be68e5d115a871727F9189cca1886E811F',
      56: '0xd909840613fCb0fADC6ee7E5eCF30cDEf4281a68',
    },
    quoteTokenSymbol: QuoteToken.NYAN,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 3,
    lpSymbol: 'NYAN2-BTCB LP',
    lpAddresses: {
      97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
      56: '0x5e8237e06735de1e71f2af84740f6356ec010a4d',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0xd909840613fCb0fADC6ee7E5eCF30cDEf4281a68',
    },
    quoteTokenSymbol: QuoteToken.NYAN,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 4,
    lpSymbol: 'NYAN2-DAI LP',
    lpAddresses: {
      97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
      56: '0x1693aa9d8df267e0aec3ed9b7dfead6395a564e3',
    },
    tokenSymbol: 'BAND',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0xd909840613fCb0fADC6ee7E5eCF30cDEf4281a68',
    },
    quoteTokenSymbol: QuoteToken.NYAN,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 5,
    lpSymbol: 'NYAN2-ETH LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xff2282addf0a04b949806d23ea3c992addcda750',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0xd909840613fCb0fADC6ee7E5eCF30cDEf4281a68',
    },
    quoteTokenSymbol: QuoteToken.NYAN,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 6,
    lpSymbol: 'NYAN2-DOT LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x4c19ab28864fe673a407f299dff19f72b4d9a156',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0xd909840613fCb0fADC6ee7E5eCF30cDEf4281a68',
    },
    quoteTokenSymbol: QuoteToken.NYAN,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 7,
    lpSymbol: 'NYAN2-EOS LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x4916eb3c7e0199bbda8f899eb4f927722d645e3a',
    },
    tokenSymbol: 'EOS',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0xd909840613fCb0fADC6ee7E5eCF30cDEf4281a68',
    },
    quoteTokenSymbol: QuoteToken.NYAN,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 8,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'DAI-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x56c77d59e82f33c712f919d09fceddf49660a829',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 10,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }
]

export default farms
