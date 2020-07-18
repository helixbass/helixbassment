import React from 'react'
import {flowMax, addDisplayName} from 'ad-hok'
import {artNouveauFontStyles} from 'utils/typography'
import colors from 'utils/colors'
import addSiteMetadata from 'utils/addSiteMetadata'

const LEAF_NATURAL_WIDTH = 359.6
const LEAF_NATURAL_HEIGHT = 227.3
const LEAF_SCALE = 0.065
const LeftLeaf = flowMax(addDisplayName('LeftLeaf'), () => (
  <svg
    width={LEAF_NATURAL_WIDTH * LEAF_SCALE}
    height={LEAF_NATURAL_HEIGHT * LEAF_SCALE}
    viewBox={`0 0 ${LEAF_NATURAL_WIDTH} ${LEAF_NATURAL_HEIGHT}`}
    css={styles.leafContainer}
  >
    <path
      id="leaf_stem_1_"
      d="M10,11.2c-4,5.1-2.5,10.9-1.5,16.3c4.8,26.2,15.9,49.4,33.6,69.4c6.8,7.7,14,15,21.8,21.8 c2.8,2.4,5.4,3.9,9,2.4c0,0-0.1-0.1-0.1-0.1c0.4,0.4,0.7,0.7,1.1,1.1c0,0-0.1-0.1-0.1-0.1c0.5,0.5,1,1,1.5,1.5 c-0.4,0.4-0.8,0.8-1.1,1.3c-1-0.3-1.7-2-3.7-0.7c2,1.2,2.9,3.4,5.5,3l-0.1,0c1.2,4,5.3,4.6,8.1,6.6c16.6,11.5,34.1,21.2,53.9,26.3 c3,0.8,6,1.6,8.9,2.5c3.3,1.1,6.6,2.1,10.1,2.3c4.3,0.8,8.6,1.6,12.9,2.5c10,2.5,20.2,3.3,30.5,4.2c19.5,1.6,39.1,2.5,58.7,2.3 c21.3-0.2,42.4-3.1,63.5-4.9c0.6-0.1,1.2-0.1,1.9-0.2c2.6-0.1,5.3-0.2,7.9-0.2c0.3,0.6,0.6,1.1,1,1.7c-1.1,0.3-2.2,0.6-3.4,0.8 c-14.7,1.8-29.3,3.6-44,5.3c-25.3,3-50.7,3.9-76.2,2c-5.7-0.4-11.5-0.6-17.2-0.9c1.5,1.1,3.1,1.6,4.7,2 c25.2,5.9,50.4,11.8,75.7,17.7c3.2,0.8,6.5,1.4,8.9,4c-12.5-2.2-25-4.6-37.5-6.6c-9.9-1.5-19.6-4.7-29.7-5l-0.3,0.1l0.1,0.3 c-0.4-1.3-1.6-1-2.5-1.3c-23.6-5.4-47-11.6-70.3-18.5c-7.6-2.3-15.1-4.7-22.7-7.1c0,0-0.1-0.2-0.1-0.2l0.1,0.2c3.7,3.1,7.4,6.2,12,8 c0,0,0,0,0,0c4.9,6.1,12.3,9.2,17.8,14.6c0.6,0.6,1.4,0.9,2.2,0.4l0,0c-0.2,0.8,0.1,1.2,1,1c0,0,0,0,0,0c4.2,5.3,8.9,9.9,15.1,13 l-0.1-0.1c1.1,3.8,4.8,5.4,7,8.3c0,0.9,0,1.8,0,2.7c-0.7,0-1.3,0-2-0.1c0,0,0,0,0,0c-0.4-2.4-2.4-3.4-4-4.8 c-12.1-10.7-25.7-19.4-38.7-28.8c-24.2-17.4-49.4-33.6-71.7-53.6c-3-2.6-4.8-6.6-10.2-8.8c3.5,5.9,5.1,11.5,9.7,15.2l0,0 c-0.4,1.9,0.5,3.1,2,4l0,0c1.4,4.4,4.7,7.7,7,11.5c0.1,0.2,0.2,0.4,0.5,0.4c0.7,0.9,1,2.2,2.5,2l0,0c-0.5,1.1,0,1.7,1,2l0,0 c0.4,1.6,0.9,3.1,3,3c0,0,0,0,0,0c0,4.7,5.5,6.2,6.2,10.6c-1.9,0.6-2.7-0.8-3.5-1.6c-9.1-9.9-18.3-19.7-25.8-30.9 c-8.8-13.1-16.5-26.8-23.8-40.8c0-0.7,0.2-1.7-0.1-1.9c-4-3.1-4.8-8.1-7.4-12c-1.3-1.9-1.3-5.6-5.2-5c-1.6-1.4-2-3.4-2.4-5.3 C7.6,50.9,4.4,35.6,1.1,20.3C1.1,15.3,1,10.4,1,5.5C1.5,3.9,2.7,3,4,2.3c0.6,0.3,1.3,0.6,1.9,0.9c0,0-0.1-0.1-0.1-0.1 C4.9,7.1,9.7,8,10,11.2z"
    />
    <g id="leaf_outline_1_">
      <path d="M7.5,32.5c2.9,17.9,5,30.6,5.2,32.4c0.2,1.7,0.6,3.3,1.2,4.7c-0.2,0.6-0.4,1.2-0.5,1.8 c5,12.4,8.3,25.4,13.6,37.8c9.1,21.5,18.2,43,33.2,61.3c0.4,0.4,0.8,0.8,1.1,1.2l0.1,0c2.1,1.6,4.1,3.3,6.4,4.6 c2.8,1.7,5.7,2.4,7.2-1.8c0.9-2.6,2.7-2.2,4.3-1.1c1.3,0.9,2.4,2.2,3.5,3.5c1.5,1.7,2.8,3.7,4.4,5.3c3.8,3.7,9.5,4.6,12.2,2.2 c2.4-2.1,2.2-4.6-1.1-10.1c1.4-0.8,2.2,0.4,2.9,1.2c10.5,11,21,22,33.8,30.6c0.9,0.6,1.5,1.7,2.3,2.6c4.8,1.7,9.3,4.2,13.5,7.1 c10,6.9,21.4,9.8,33.2,11c2.7,0.3,6.4-0.1,5.7-3.7c-1.1-5.4,2.2-8.2,5-11.5c0.2-0.4,0.5-0.7,0.7-1c-0.6-2.4-2.4-3.7-4.6-4.7 c-0.2-2.3-0.9-5.2,1-6.5c2.3-1.6,4,1.5,5.9,2.5c9.2,4.9,17.9,10.9,28.7,12.1c3.5,0.4,7.3,1.5,10.3,3.4c3.8,2.4,6.9,1.6,10.2-0.1 c3.5-1.7,2.7-4.9,2-8.1c4.1,1.3,7.8,2.9,11.6,3.6c11.2,2.1,22.2,0.2,33-2.4c2.8-0.7,5.5-1.3,8.4-1.2c5.9,0.2,7.3-1.7,5-7.3 c-1.1-2.8-2.8-5.4-4.3-8.1c0.5-0.3,0.7-0.5,0.8-0.4c0.6,0,1.3,0.1,1.9,0.2c11.4,1.8,22.2,0.5,31.6-7.1c4.7-3.9,10.1-6.8,14.7-10.9 c4.5-1.7,7.7-3.5,7.5-5.3c-0.2-2.1-12.7-10.3-14.8-12.5c-4.5-4.7-8.6-9.9-13.2-14.6l0-0.1c-1.7,0.1-2.5-1.4-3.8-2.1 c-4.5-2.6-9-5-14.5-3.9c-0.5,0.1-0.9,0.3-1.3,0.4c-2.4,0.1-5,3.4-7,0.2c-1.1-1.8,0.5-3.9,2.6-4.8c0.4-0.2,0.8-0.4,1.3-0.6 c4-2.9,5-6.3,2.1-10.7c-0.9-1.3-1.6-2.9-2.2-4.5c-2.9-8.2-2.9-8.2-11.9-8c-0.3,0-0.7-0.1-1-0.1c-4.7,0-9.3-0.1-14-0.1 c-5.4,0.1-9.9,2.5-13.4,6.5c-1,1.2-2.1,2.4-3.7,1.9c-1.6-0.5-0.9-2.3-0.9-3.4c-0.4-6.7-0.6-6.8-7-4.9c-6.2,1.8-11.9,4.7-17.5,8.5 c4.5,3.8,5.1,9.1,5.3,14.4c0.1,3.3,3.6,6.8,1.2,9.3c-1.9,2.1-5.6-1-8.7-0.5c-3.1,0.5-6.2,0.8-9.2,1.8c-7.1,2.4-14.3,4.3-22,3.4 c-3-0.4-5.4,1.1-7.9,2.4c-5.4,2.8-10.9,4-16.3-0.2c-1.1-1.2-0.5-2.3,0.2-3.4c2.9-4.9,7.7-6.5,15.1-3.6c8.5,3.3,16.8,2.5,25.2,0.2 c5.9-1.6,11.7-3.7,18-3.1c2.1,0.2,2.7-0.7,2-2.7c-1-3-1.2-6.2-1.4-9.3c-0.3-5.1-4.3-7-9.3-9.3c7.5-2.6,14.2-5,17.8-11.6 c4.4-8.2,4.4-17.5,6.1-26.4c0.5-2.9-1-2.7-2.6-2.7c-4.2,0-8.4-0.8-12-2.8c-8.2-4.6-16.5-6.7-25.5-2.3c-2.6,1.3-2.9-0.2-2-2.3 c-0.1-1.3-0.2-2.6-0.2-3.9c-2.8-7.1-3.4-7.4-10.1-4.7c-3.1,1.2-6.4,1.5-9.8,1.5c-8.8,0-17.3,0.8-21,11c-0.7-0.9-1-1.3-1.2-1.7 c-1-2.5-2.5-5.4-5.4-5c-2.7,0.3-2.3,3.5-2.9,5.7c-2,7.6-6.1,13.4-14.1,15.2c-4,0.9-5.3,2-2.5,5.7c0.8,1.1,1,2.9,0.9,4.3 c-0.3,5.3-0.9,10.6-1.3,15.9c-0.2,2.5-2.6,3.2-3.8,3c-9.1-1.4-18.5,0.4-27.5-3.3c-7.2-2.9-11.9-10.3-20.3-10.8 c-7.1-2.2-9.1-6.5-5.1-11.1c6.3-1.7,10.2-0.3,12.9,5.9c3.8,8.7,10.9,12.5,19.5,14.5c4.1,1,8.2,0.8,12.4,1c2.8,0.1,6.3,1.6,8.1,0.3 c2.4-1.6,0.3-5.5,1.1-8.4c2.4-8.1,0-14.2-7.8-17.9c-0.1,0,0-0.6,0.1-0.9c2.8,0,5.6,0.2,8.4,0c7.2-0.5,12.6-3.9,15.3-10.8 c1.6-4,2.4-8.2,4.9-11.9c1.1-1.7,1.9-4.3,0.2-6.5c-8.8,0.3-14.5-4.4-18.9-11.4c-5.4-5.1-11.4-8.8-19.2-8.5 c-3.2,0.1-6.2,0.8-9.1,2.2c-1.1,0.5-2.5,1.5-3.6,0.2c-0.9-1.1-0.5-2.6,0.3-3.7c2.3-3.7,4.1-7.5,4.9-11.8c0.8-4.3,0.4-8.6,0.5-12.8 c-0.7-2.5-1.4-5.1-2.2-7.6c-0.9-2.8-1.8-2.9-3.7-0.4c-5.2,6.8-12.2,10.9-20.8,12.1c-0.6,0.2-1.2,0.6-1.8,0.7 c-11.8,0.4-23.2,3.2-34.6,6.2c-10.6,2.8-21.3,2.1-31.7-1.9c-3.8-1.1-7-3.3-10.1-5.8C10.1,10,8.2,8.3,8.2,8.3c0,0-3.1,0.1-2.2,1.1 c-0.1,3.2,0,6.6,0.2,9.8c0.1,1.7,0.3,3.4,0.4,5.1C6.9,26.9,7,29.9,7.5,32.5z" />
      <path d="M191.2,211c0.1,0.1,0.1,0.2,0.2,0.3c-0.1,0.2-0.2,0.4-0.4,0.5c-0.1-0.1-0.2-0.2-0.2-0.3 C191,211.4,191.1,211.2,191.2,211z" />
    </g>
  </svg>
))
const RightLeaf = flowMax(addDisplayName('RightLeaf'), () => (
  <svg
    width={LEAF_NATURAL_WIDTH * LEAF_SCALE}
    height={LEAF_NATURAL_HEIGHT * LEAF_SCALE}
    viewBox={`0 0 ${LEAF_NATURAL_WIDTH} ${LEAF_NATURAL_HEIGHT}`}
    css={[styles.leafContainer, styles.leafContainerRight]}
  >
    <path
      id="leaf_stem_1_"
      d="M10,11.2c-4,5.1-2.5,10.9-1.5,16.3c4.8,26.2,15.9,49.4,33.6,69.4c6.8,7.7,14,15,21.8,21.8 c2.8,2.4,5.4,3.9,9,2.4c0,0-0.1-0.1-0.1-0.1c0.4,0.4,0.7,0.7,1.1,1.1c0,0-0.1-0.1-0.1-0.1c0.5,0.5,1,1,1.5,1.5 c-0.4,0.4-0.8,0.8-1.1,1.3c-1-0.3-1.7-2-3.7-0.7c2,1.2,2.9,3.4,5.5,3l-0.1,0c1.2,4,5.3,4.6,8.1,6.6c16.6,11.5,34.1,21.2,53.9,26.3 c3,0.8,6,1.6,8.9,2.5c3.3,1.1,6.6,2.1,10.1,2.3c4.3,0.8,8.6,1.6,12.9,2.5c10,2.5,20.2,3.3,30.5,4.2c19.5,1.6,39.1,2.5,58.7,2.3 c21.3-0.2,42.4-3.1,63.5-4.9c0.6-0.1,1.2-0.1,1.9-0.2c2.6-0.1,5.3-0.2,7.9-0.2c0.3,0.6,0.6,1.1,1,1.7c-1.1,0.3-2.2,0.6-3.4,0.8 c-14.7,1.8-29.3,3.6-44,5.3c-25.3,3-50.7,3.9-76.2,2c-5.7-0.4-11.5-0.6-17.2-0.9c1.5,1.1,3.1,1.6,4.7,2 c25.2,5.9,50.4,11.8,75.7,17.7c3.2,0.8,6.5,1.4,8.9,4c-12.5-2.2-25-4.6-37.5-6.6c-9.9-1.5-19.6-4.7-29.7-5l-0.3,0.1l0.1,0.3 c-0.4-1.3-1.6-1-2.5-1.3c-23.6-5.4-47-11.6-70.3-18.5c-7.6-2.3-15.1-4.7-22.7-7.1c0,0-0.1-0.2-0.1-0.2l0.1,0.2c3.7,3.1,7.4,6.2,12,8 c0,0,0,0,0,0c4.9,6.1,12.3,9.2,17.8,14.6c0.6,0.6,1.4,0.9,2.2,0.4l0,0c-0.2,0.8,0.1,1.2,1,1c0,0,0,0,0,0c4.2,5.3,8.9,9.9,15.1,13 l-0.1-0.1c1.1,3.8,4.8,5.4,7,8.3c0,0.9,0,1.8,0,2.7c-0.7,0-1.3,0-2-0.1c0,0,0,0,0,0c-0.4-2.4-2.4-3.4-4-4.8 c-12.1-10.7-25.7-19.4-38.7-28.8c-24.2-17.4-49.4-33.6-71.7-53.6c-3-2.6-4.8-6.6-10.2-8.8c3.5,5.9,5.1,11.5,9.7,15.2l0,0 c-0.4,1.9,0.5,3.1,2,4l0,0c1.4,4.4,4.7,7.7,7,11.5c0.1,0.2,0.2,0.4,0.5,0.4c0.7,0.9,1,2.2,2.5,2l0,0c-0.5,1.1,0,1.7,1,2l0,0 c0.4,1.6,0.9,3.1,3,3c0,0,0,0,0,0c0,4.7,5.5,6.2,6.2,10.6c-1.9,0.6-2.7-0.8-3.5-1.6c-9.1-9.9-18.3-19.7-25.8-30.9 c-8.8-13.1-16.5-26.8-23.8-40.8c0-0.7,0.2-1.7-0.1-1.9c-4-3.1-4.8-8.1-7.4-12c-1.3-1.9-1.3-5.6-5.2-5c-1.6-1.4-2-3.4-2.4-5.3 C7.6,50.9,4.4,35.6,1.1,20.3C1.1,15.3,1,10.4,1,5.5C1.5,3.9,2.7,3,4,2.3c0.6,0.3,1.3,0.6,1.9,0.9c0,0-0.1-0.1-0.1-0.1 C4.9,7.1,9.7,8,10,11.2z"
    />
    <g id="leaf_outline_1_">
      <path d="M7.5,32.5c2.9,17.9,5,30.6,5.2,32.4c0.2,1.7,0.6,3.3,1.2,4.7c-0.2,0.6-0.4,1.2-0.5,1.8 c5,12.4,8.3,25.4,13.6,37.8c9.1,21.5,18.2,43,33.2,61.3c0.4,0.4,0.8,0.8,1.1,1.2l0.1,0c2.1,1.6,4.1,3.3,6.4,4.6 c2.8,1.7,5.7,2.4,7.2-1.8c0.9-2.6,2.7-2.2,4.3-1.1c1.3,0.9,2.4,2.2,3.5,3.5c1.5,1.7,2.8,3.7,4.4,5.3c3.8,3.7,9.5,4.6,12.2,2.2 c2.4-2.1,2.2-4.6-1.1-10.1c1.4-0.8,2.2,0.4,2.9,1.2c10.5,11,21,22,33.8,30.6c0.9,0.6,1.5,1.7,2.3,2.6c4.8,1.7,9.3,4.2,13.5,7.1 c10,6.9,21.4,9.8,33.2,11c2.7,0.3,6.4-0.1,5.7-3.7c-1.1-5.4,2.2-8.2,5-11.5c0.2-0.4,0.5-0.7,0.7-1c-0.6-2.4-2.4-3.7-4.6-4.7 c-0.2-2.3-0.9-5.2,1-6.5c2.3-1.6,4,1.5,5.9,2.5c9.2,4.9,17.9,10.9,28.7,12.1c3.5,0.4,7.3,1.5,10.3,3.4c3.8,2.4,6.9,1.6,10.2-0.1 c3.5-1.7,2.7-4.9,2-8.1c4.1,1.3,7.8,2.9,11.6,3.6c11.2,2.1,22.2,0.2,33-2.4c2.8-0.7,5.5-1.3,8.4-1.2c5.9,0.2,7.3-1.7,5-7.3 c-1.1-2.8-2.8-5.4-4.3-8.1c0.5-0.3,0.7-0.5,0.8-0.4c0.6,0,1.3,0.1,1.9,0.2c11.4,1.8,22.2,0.5,31.6-7.1c4.7-3.9,10.1-6.8,14.7-10.9 c4.5-1.7,7.7-3.5,7.5-5.3c-0.2-2.1-12.7-10.3-14.8-12.5c-4.5-4.7-8.6-9.9-13.2-14.6l0-0.1c-1.7,0.1-2.5-1.4-3.8-2.1 c-4.5-2.6-9-5-14.5-3.9c-0.5,0.1-0.9,0.3-1.3,0.4c-2.4,0.1-5,3.4-7,0.2c-1.1-1.8,0.5-3.9,2.6-4.8c0.4-0.2,0.8-0.4,1.3-0.6 c4-2.9,5-6.3,2.1-10.7c-0.9-1.3-1.6-2.9-2.2-4.5c-2.9-8.2-2.9-8.2-11.9-8c-0.3,0-0.7-0.1-1-0.1c-4.7,0-9.3-0.1-14-0.1 c-5.4,0.1-9.9,2.5-13.4,6.5c-1,1.2-2.1,2.4-3.7,1.9c-1.6-0.5-0.9-2.3-0.9-3.4c-0.4-6.7-0.6-6.8-7-4.9c-6.2,1.8-11.9,4.7-17.5,8.5 c4.5,3.8,5.1,9.1,5.3,14.4c0.1,3.3,3.6,6.8,1.2,9.3c-1.9,2.1-5.6-1-8.7-0.5c-3.1,0.5-6.2,0.8-9.2,1.8c-7.1,2.4-14.3,4.3-22,3.4 c-3-0.4-5.4,1.1-7.9,2.4c-5.4,2.8-10.9,4-16.3-0.2c-1.1-1.2-0.5-2.3,0.2-3.4c2.9-4.9,7.7-6.5,15.1-3.6c8.5,3.3,16.8,2.5,25.2,0.2 c5.9-1.6,11.7-3.7,18-3.1c2.1,0.2,2.7-0.7,2-2.7c-1-3-1.2-6.2-1.4-9.3c-0.3-5.1-4.3-7-9.3-9.3c7.5-2.6,14.2-5,17.8-11.6 c4.4-8.2,4.4-17.5,6.1-26.4c0.5-2.9-1-2.7-2.6-2.7c-4.2,0-8.4-0.8-12-2.8c-8.2-4.6-16.5-6.7-25.5-2.3c-2.6,1.3-2.9-0.2-2-2.3 c-0.1-1.3-0.2-2.6-0.2-3.9c-2.8-7.1-3.4-7.4-10.1-4.7c-3.1,1.2-6.4,1.5-9.8,1.5c-8.8,0-17.3,0.8-21,11c-0.7-0.9-1-1.3-1.2-1.7 c-1-2.5-2.5-5.4-5.4-5c-2.7,0.3-2.3,3.5-2.9,5.7c-2,7.6-6.1,13.4-14.1,15.2c-4,0.9-5.3,2-2.5,5.7c0.8,1.1,1,2.9,0.9,4.3 c-0.3,5.3-0.9,10.6-1.3,15.9c-0.2,2.5-2.6,3.2-3.8,3c-9.1-1.4-18.5,0.4-27.5-3.3c-7.2-2.9-11.9-10.3-20.3-10.8 c-7.1-2.2-9.1-6.5-5.1-11.1c6.3-1.7,10.2-0.3,12.9,5.9c3.8,8.7,10.9,12.5,19.5,14.5c4.1,1,8.2,0.8,12.4,1c2.8,0.1,6.3,1.6,8.1,0.3 c2.4-1.6,0.3-5.5,1.1-8.4c2.4-8.1,0-14.2-7.8-17.9c-0.1,0,0-0.6,0.1-0.9c2.8,0,5.6,0.2,8.4,0c7.2-0.5,12.6-3.9,15.3-10.8 c1.6-4,2.4-8.2,4.9-11.9c1.1-1.7,1.9-4.3,0.2-6.5c-8.8,0.3-14.5-4.4-18.9-11.4c-5.4-5.1-11.4-8.8-19.2-8.5 c-3.2,0.1-6.2,0.8-9.1,2.2c-1.1,0.5-2.5,1.5-3.6,0.2c-0.9-1.1-0.5-2.6,0.3-3.7c2.3-3.7,4.1-7.5,4.9-11.8c0.8-4.3,0.4-8.6,0.5-12.8 c-0.7-2.5-1.4-5.1-2.2-7.6c-0.9-2.8-1.8-2.9-3.7-0.4c-5.2,6.8-12.2,10.9-20.8,12.1c-0.6,0.2-1.2,0.6-1.8,0.7 c-11.8,0.4-23.2,3.2-34.6,6.2c-10.6,2.8-21.3,2.1-31.7-1.9c-3.8-1.1-7-3.3-10.1-5.8C10.1,10,8.2,8.3,8.2,8.3c0,0-3.1,0.1-2.2,1.1 c-0.1,3.2,0,6.6,0.2,9.8c0.1,1.7,0.3,3.4,0.4,5.1C6.9,26.9,7,29.9,7.5,32.5z" />
      <path d="M191.2,211c0.1,0.1,0.1,0.2,0.2,0.3c-0.1,0.2-0.2,0.4-0.4,0.5c-0.1-0.1-0.2-0.2-0.2-0.3 C191,211.4,191.1,211.2,191.2,211z" />
    </g>
  </svg>
))

const BottomBorder = flowMax(addDisplayName('BottomBorder'), () => (
  <svg
    width="100%"
    height="30px"
    viewBox="0 -5 500 90"
    preserveAspectRatio="none"
    css={styles.bottomBorderSvg}
  >
    <path
      d="M249.6,43.2c2.9,15.7-2.2,30.5-9.8,39.2c-17.8,20.3-48.7,19.3-58,18.8c-66.7-3.2-91.5-64.7-147.1-58.8 C20.1,43.9,8.8,49.5,2.8,53c2.7-13.7,2.4-27.6,5.1-41.3c5.7,9.4,19.1,9.3,30.1,8C89.5,13.8,140.9,7.9,192.4,2 c13.5,4.2,27.1,8.4,40.6,12.6C236.4,17.5,246.7,27.1,249.6,43.2z"
      css={styles.bottomBorderFill}
      transform="translate(0, -24)"
    />
    <path
      d="M1,26.7c6-3.5,17.2-9.1,31.9-10.6c55.7-5.9,80.4,55.6,147.1,58.8c9.3,0.5,40.2,1.5,58-18.8 c2.1-2.4,19-22.2,9.8-39.2C241,4.3,222-2.6,207.8,5.5c-12.7,7.2-19.9,25.2-12.3,36.8c4.4,6.6,13.5,12.1,22.9,9.8 c7.6-1.8,15.5-8.8,15.3-17.4c-0.2-5.7-4-14-11.2-14.4c-5.6-0.4-11.4,4.1-13.1,10.9"
      css={styles.bottomBorderPath}
    />
    <path
      d="M249.6,43.2c2.9,15.7-2.2,30.5-9.8,39.2c-17.8,20.3-48.7,19.3-58,18.8c-66.7-3.2-91.5-64.7-147.1-58.8 C20.1,43.9,8.8,49.5,2.8,53c2.7-13.7,2.4-27.6,5.1-41.3c5.7,9.4,19.1,9.3,30.1,8C89.5,13.8,140.9,7.9,192.4,2 c13.5,4.2,27.1,8.4,40.6,12.6C236.4,17.5,246.7,27.1,249.6,43.2z"
      css={styles.bottomBorderFill}
      transform="scale(-1, 1) translate(0, -24)"
      transform-origin="250 0"
    />
    <path
      d="M1,26.7c6-3.5,17.2-9.1,31.9-10.6c55.7-5.9,80.4,55.6,147.1,58.8c9.3,0.5,40.2,1.5,58-18.8 c2.1-2.4,19-22.2,9.8-39.2C241,4.3,222-2.6,207.8,5.5c-12.7,7.2-19.9,25.2-12.3,36.8c4.4,6.6,13.5,12.1,22.9,9.8 c7.6-1.8,15.5-8.8,15.3-17.4c-0.2-5.7-4-14-11.2-14.4c-5.6-0.4-11.4,4.1-13.1,10.9"
      css={styles.bottomBorderPath}
      transform="scale(-1, 1)"
      transform-origin="250 0"
    />
  </svg>
))

const Header = flowMax(
  addDisplayName('Header'),
  addSiteMetadata,
  ({siteMetadata: {title}}) => (
    <h1 css={styles.container}>
      <span css={styles.text}>
        {title}
        <LeftLeaf />
        <RightLeaf />
      </span>
      <BottomBorder />
    </h1>
  )
)

export default Header

export const HEADER_HEIGHT = 40
const styles = {
  container: {
    ...artNouveauFontStyles,
    color: colors.yellowishWhite,
    backgroundColor: colors.green,
    fontSize: 39,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
  },
  bottomBorderSvg: {
    position: 'absolute',
    bottom: -23,
  },
  bottomBorderPath: {
    fill: 'none',
    stroke: colors.black,
    strokeWidth: 8,
  },
  bottomBorderFill: {
    fill: colors.green,
  },
  text: {
    position: 'relative',
    top: -1,
  },
  leafContainer: {
    position: 'absolute',
    top: 13,
    left: -27,
    fill: 'none',
    stroke: colors.yellowishWhite,
    strokeWidth: 10,
    transform: 'rotate(-65deg)',
  },
  leafContainerRight: {
    left: 'auto',
    right: -24,
    transform: 'scale(-1, 1) rotate(-65deg)',
  },
}
