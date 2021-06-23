import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from 'yieldnyan-uikit'
import useI18n from 'hooks/useI18n'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import { QuoteToken } from 'config/constants/types'
import BigNumber from 'bignumber.js'

const StyledTotalValueLockedCard = styled(Card)`
  padding: 24px;
  align-items: center;
  flex: 1;
  box-shadow:none;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()

  let tvl = new BigNumber(0)
  for (let i = 0; i < farmsLP.length; i++) {
    const farm = farmsLP[i]
    if (!farm.lpTotalInQuoteToken) {
      //
    } else if (farm.quoteTokenSymbol === QuoteToken.BNB) {
      tvl = tvl.plus(new BigNumber(farm.lpTotalInQuoteToken).times(bnbPrice))
    } else if (farm.quoteTokenSymbol === QuoteToken.NYAN) {
      tvl = tvl.plus(cakePrice.times(farm.lpTotalInQuoteToken))
    } else {
      tvl = tvl.plus(farm.lpTotalInQuoteToken)
    }
  }
  const total = (tvl.toNumber()).toLocaleString()
  return (
    <StyledTotalValueLockedCard>
      <Heading size="llg" mb="24px">
        {TranslateString(999, 'Total Value Locked (TVL)')}
      </Heading>
      {total ? (
        <>
          <Heading size="xl" color="primary">{`$${total}`}</Heading>
          <Text color="text">{TranslateString(999, 'Across all LPs and Catnip Pools')}</Text>
        </>
      ) : (
          <>
            <Skeleton height={66} />
          </>
        )}
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
