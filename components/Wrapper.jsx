import React from 'react'
import {LazyMotion, domAnimation, m} from 'framer-motion'
import PAGE_TRANSITION from '../pageTransitions'

const pageMotionProps = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: PAGE_TRANSITION.DURATION,
      ease: PAGE_TRANSITION.EASE
    },
  },
  exit: {
    // opacity: 0,
    y: 50,
    // x: -100,
    transition: {
      duration: PAGE_TRANSITION.DURATION,
      delay: PAGE_TRANSITION.DURATION,
      ease: PAGE_TRANSITION.EASE
    }
  }
}

const Wrapper = ({children}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div {...pageMotionProps}>
        {children}
      </m.div>
    </LazyMotion>
  )
}

export default Wrapper