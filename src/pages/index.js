import React from 'react'
import {flowMax, addDisplayName} from 'ad-hok'

const Home = flowMax(addDisplayName('Home'), () => <div>Hello worldz!</div>)

export default Home
