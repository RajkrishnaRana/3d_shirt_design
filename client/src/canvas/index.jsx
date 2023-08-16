import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei'

import Shirt from './Shirt'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'

const index = () => {
  return (
    <Canvas
      shadows
      camera={{position: [0, 0, 0], fov : 25}}
      gl = {{ preserveDrawingBuffer: true }}
      className='w-full max-w-full h-full transition-all ease-in'
    >
      <ambientLight intensity={1.5}/>

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default index

