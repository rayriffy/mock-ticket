import React from 'react'

import {Box, Card, Text, Heading, Flex} from 'rebass'
import styled from 'styled-components'

import Barcode from 'react-barcode'

import App from '../components/app'

const Airline = styled(Box)`
  letter-spacing: 3.5px;
  border-radius: 8px 8px 0 0;
`

const AirportIATA = styled(Text)`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  letter-spacing: 9px;
  text-align: center;
`

const AirportCity = styled(Text)`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.45);
  letter-spacing: .2px;
  text-align: center;
`

const Container = styled(Box)`
  border-radius: 0 0 8px 8px;
`

const InfoTitle = styled(Text)`
  font-weight: 500;
  letter-spacing: .2px;
`

const InfoValue = styled(Text)`
  font-weight: 700;
  letter-spacing: 2.5px;
`

const Info = props => {
  const {name, value} = props
  return (
  <Box>
    <InfoTitle fontSize={13}>{name}</InfoTitle>
    <InfoValue fontWeight={700} fontSize={24}>{value}</InfoValue>
  </Box>
  )
}

const Index = props => {
  return (
    <App>
      <Flex mt={5} justifyContent={`center`}>
        <Box width={[20/24, 16/24, 12/24, 7/24]}>
          <Card boxShadow={`0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`}>
            <Airline backgroundColor={`#4885ff`}>
              <Text color={`white`} textAlign={`center`} py={2} fontSize={16} fontWeight={500}>THAI AIRWAYS</Text>
            </Airline>
            <Container px={3} backgroundColor={`white`}>
              <Box>
                <Heading py={3} fontSize={14} color={`rgba(0, 0, 0, 0.6)`}>BANGKOK RFE</Heading>
              </Box>
              <Flex alignItems={`center`} px={5}>
                <Box>
                  <AirportIATA fontSize={44}>BKK</AirportIATA>
                  <AirportCity>Bangkok</AirportCity>
                </Box>
                <Box mx={`auto`}>
                  >
                </Box>
                <Box>
                  <AirportIATA fontSize={44}>HND</AirportIATA>
                  <AirportCity>Tokyo</AirportCity>
                </Box>
              </Flex>
              <Box p={3}>
                <Card p={3} backgroundColor={`#f3f7ff`} borderRadius={6}>
                  <Flex>
                    <Box px={3}>
                      <Info name={`Flight`} value={`TG513`} />
                    </Box>
                    <Box mx={`auto`} />
                    <Box px={3}>
                      <Info name={`ACFT`} value={`B787`} />
                    </Box>
                    <Box px={3}>
                      <Info name={`Gate`} value={`A5`} />
                    </Box>
                  </Flex>
                </Card>
              </Box>
              <Flex px={4} py={3}>
                <Box>
                  <Info name={`Date`} value={`30 JUL`} />
                </Box>
                <Box mx={`auto`} />
                <Box>
                  <Info name={`Departure`} value={`22:09z`} />
                </Box>
              </Flex>
              <Box px={4} py={3}>
                <Info name={`Captain`} value={`PHUMRAPEE LIMPIANCHOP`} />
              </Box>
              <Flex pt={3} justifyContent={`center`}>
                <Barcode value={`TG513`} displayValue={false} margin={0} height={60} />
              </Flex>
            </Container>
          </Card>
        </Box>
      </Flex>
    </App>
  )
}

export default Index
