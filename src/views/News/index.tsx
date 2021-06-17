import React from 'react'
import styled from 'styled-components'
import {
  Heading,
  Card,
  CardBody,
  Tag,
  Button,
  ChevronUpIcon,
  ChevronDownIcon,
  Text,
  CardFooter,
  useModal,
} from 'yieldnyan-uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import NewsJson from "./NewsJson.json"
import NftCard from './components/NftCard'
import NftGrid from './components/NftGrid'
import Image from './components/Image'

const StyledHero = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 32px;
`
const Header = styled.div`
  min-height: 28px;
`
const News = () => {
  const TranslateString = useI18n()
  
  return (
  
      <Page>
        <StyledHero> 
          <Heading as="h1" size="xl" color="secondary" mb="24px">
          YieldNyan Latest News
          </Heading>
          <Heading as="h4" size="lg" color="secondary">
          We bring you the latest news from YieldNyan.
          </Heading>
        </StyledHero>
        <>
        <NftGrid>
        {NewsJson.news.map((item, i) => (
           <Card>
           <Image src={item.image} alt={item.title} originalLink={item.link}  />
           <CardBody>
             <Header>
               <Heading>{item.title}</Heading>
             </Header>
           </CardBody>
         </Card>
        ))}
    </NftGrid>
            </>
      </Page>
   
  )
}

export default News
