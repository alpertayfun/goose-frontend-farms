import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text as UIKitText, ArrowForwardIcon } from 'yieldnyan-uikit'
import useI18n from 'hooks/useI18n'

const StyledHowItWorks = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.textSubtle};
  padding: 24px 0;
`

const Section = styled.div`
  margin-bottom: 24px;
`

const Icon = styled.div`
  text-align: center;
`

const Text = styled(UIKitText)`
  flex: 1;
  padding: 0 8px;
`

const Row = styled.div`
  align-items: start;
  display: flex;
  margin-bottom: 16px;
`

const HowItWorks = () => {
  const TranslateString = useI18n()

  return (
    <StyledHowItWorks>
      <Section>
        <Heading id="how-it-works" color="secondary" size="lg" mb="16px">
          {TranslateString(632, 'How it works')}
        </Heading>
        <Row>
          <Icon>
            <ArrowForwardIcon />
          </Icon>
          <Text>
            {TranslateString(634, 'Winners will be able to claim an NFT on this page once the claiming period starts.')}
          </Text>
        </Row>
        <Row>
          <Icon>
            <ArrowForwardIcon />
          </Icon>
          <Text>
            {TranslateString(636, 'If you’re not selected, you won’t be able to claim. Better luck next time!')}
          </Text>
        </Row>
        <Row>
          <Icon>
            <ArrowForwardIcon />
          </Icon>
          <Text>
            {TranslateString(
              638,
              "Winners can trade in their NFTs for a NYAN value until the expiry date written below. If you don't trade in your NFT by then, don’t worry: you’ll still keep it in your wallet!",
            )}
          </Text>
        </Row>
      </Section>
      <Section>
        <Heading color="secondary" size="lg" mb="16px">
          {TranslateString(640, 'How are winners selected?')}
        </Heading>
        <Row>
          <Icon>
            <ArrowForwardIcon />
          </Icon>
          <Text>{TranslateString(642, 'Winners are selected at random! Good luck!')}</Text>
        </Row>
      </Section>
      <div>
        <Button
          as="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSciX7iE8Z9iFkY_cP6fgpG2j4RdBBuxJPD9MFnDZvA3T2THyQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          {TranslateString(644, 'Register for a chance to win')}
        </Button>
      </div>
    </StyledHowItWorks>
  )
}

export default HowItWorks
