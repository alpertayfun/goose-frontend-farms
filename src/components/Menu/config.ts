import { MenuEntry } from 'yieldnyan-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.yieldnyan.com',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.yieldnyan.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'News',
    icon: 'NftIcon',
    href: '/news',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Gitbook',
        href: 'https://yieldnyan-1.gitbook.io/yieldnyan/',
      },
    ],
  },
   {
     label: 'Audit',
     icon: 'MoreIcon',
     items: [
       {
         label: 'Audit by Haechi.io',
         href: 'https://docs.google.com/document/d/1y7BdquMpnKC_-aPR54xEOXUUpen1DENjbIlxRiIi2Ps/edit#',
       },
    ],
   },
]

export default config
