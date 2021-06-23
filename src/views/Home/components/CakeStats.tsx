import React from 'react'
import { Card, CardBody, Heading, Text } from 'yieldnyan-uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import TotalValueLockedCard from './TotalValueLockedCard'

const StyledCakeStats = styled(Card)`
margin-top:140px;
margin-left: auto;
margin-right: auto;
overflow: visible;
  box-shadow: -8px 12px 18px 0 rgba(25, 42, 70, 0.13);
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`
const CardImage = styled.img`
float: right;
`
const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0

  return (
    <StyledCakeStats>
      <CardImage  style={{position:"absolute",left:"30px",top:"-95px"}} src="/images/catt1.png" alt="cake logo" width={64} height={108}  />
       <CardImage  style={{position:"absolute",right:"30px",top:"-170px"}} src="/images/catt2.png" alt="cake logo" width={141} height={206}  />
      <CardBody>
        <Heading size="llg" mb="24px">
          {TranslateString(534, 'Token Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total NYAN Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total NYAN Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New NYAN/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={1} />
        </Row>
      </CardBody>
      <TotalValueLockedCard />

    </StyledCakeStats>
  )
}

export default CakeStats
