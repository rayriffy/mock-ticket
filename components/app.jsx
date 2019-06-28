import React from 'react'
import Helmet from 'react-helmet'

import {createGlobalStyle} from 'styled-components'

import {TypographyStyle} from 'react-typography'
import typography from '../utils/typography'

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #edf2f6;
  }
`

const App = props => {
  const {children} = props

  return (
    <>
      <GlobalStyle />
      <Helmet
        title={`Mock`}
        link={[
          {
            href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700&display=swap',
            rel: 'stylesheet',
          }
        ]}
      />
      <TypographyStyle typography={typography} />
      {children}
    </>
  )
}

export default App
