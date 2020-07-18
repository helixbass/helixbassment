import React from 'react'
import {flowMax, addDisplayName} from 'ad-hok'
import colors from 'utils/colors'

const Footer = flowMax(addDisplayName('Footer'), () => (
  <footer css={styles.container} />
))

export default Footer

const styles = {
  container: {
    minHeight: 140,
    backgroundColor: colors.black,
    alignSelf: 'stretch',
  },
}
