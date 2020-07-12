import React from 'react'
import {flowMax, addDisplayName} from 'ad-hok'
import Layout from 'components/Layout'

const Home = flowMax(addDisplayName('Home'), () => (
  <Layout>
    <div>Hello worldz!</div>
  </Layout>
))

export default Home
