import styled from 'styled-components'

const ContainerHome = styled.div`
background: url('/images/patty1.png') #ffffff;
z-index:0;
position:relative;
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

export default ContainerHome
