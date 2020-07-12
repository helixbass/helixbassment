import React from 'react'
import {flowMax, addDisplayName} from 'ad-hok'
import {artNouveauFontStyles} from 'utils/typography'
import colors from 'utils/colors'

const Home = flowMax(addDisplayName('Home'), () => (
  <div
    style={{
      ...artNouveauFontStyles,
      color: colors.white,
      backgroundColor: colors.green,
    }}
  >
    Hello worldz!
  </div>
))

export default Home
