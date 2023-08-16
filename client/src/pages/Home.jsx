import React from 'react'
import state from '../store'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
import { useSnapshot } from 'valtio'
import {motion, AnimatePresence, FlatTree} from 'framer-motion'
import {CustomButton} from '../components'

const Home = () => {
    const snap = useSnapshot(state)

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.div className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img 
                        src='./threejs.png'
                        alt='logo'
                        className='w-8 h-8 object-contain'
                    />
                </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            LET'S<br className='xl:block hidden' /> DO IT.
                        </h1>
                    </motion.div>
                    <motion.div>
                        <p className='max-w-md font-normal text-grey-1000 text-base'>
                            Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "}and define your own style.
                        </p>
                        <br />
                        <CustomButton 
                            type = "filled"
                            title = "Customize It"
                            handleClick = {() => state.intro = false}
                            customStyles = "w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Home