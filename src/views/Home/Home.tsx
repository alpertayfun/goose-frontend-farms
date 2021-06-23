import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'yieldnyan-uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import PageHome from 'components/layout/PageHome'

const Hero = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 90%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <PageHome>
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'YieldNyan')}
        </Heading>
        <Text>{TranslateString(578, 'Yield Farming on Binance Smart Chain with Lovely Nyan Cats.')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          {/* <LotteryCard /> */}
          <CakeStats />
        </Cards>
        {/* <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards> */}
      </div>
    </Page>
    </PageHome>
  )
}

export default Home
