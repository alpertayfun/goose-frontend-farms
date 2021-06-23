import React from 'react'
import { Text } from 'yieldnyan-uikit'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

const CakeWinnings = () => {
  const { claimAmount } = useTotalClaim()

  return <CardValue fontSize="45px" value={getBalanceNumber(claimAmount)} />
}

export default CakeWinnings
