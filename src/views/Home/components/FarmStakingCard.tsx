import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from 'yieldnyan-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const StyledFarmStakingCard = styled(Card)`
margin-top:140px;
overflow: visible;
  padding: 10px;
  box-shadow: -8px 12px 18px 0 rgba(25, 42, 70, 0.13);
  min-height: 376px;
`

const Block = styled.div`
margin-top: 70px;
position: absolute;
`

const CardImage = styled.img`
float: right;
z-index:-99;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  white-space: nowrap!important;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
       <CardImage  style={{position:"absolute",left:"-10px",top:"-180px"}} src="/images/cats_one.png" alt="cake logo" width={314}  />
      <CardBody>
        <Heading size="llg" mb="24px">
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
       

        <Block >
          <CakeHarvestBalance />
          <Label>{TranslateString(544, 'NYAN to Harvest')}</Label>
          <CakeWalletBalance />
          <Label>{TranslateString(546, 'NYAN in Wallet')}</Label>
        </Block>
        <CardImage style={{position:"relative",right:"-100px",top:"-40px",zIndex:"auto"}} src="/images/cat_two.png" alt="cake logo" width={280} height={300} />
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
            >
              {pendingTx
                ? TranslateString(548, 'Collecting NYAN')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
