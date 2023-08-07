'use client'

import { Canvas,} from '@react-three/fiber'
import Pyramid from './componenets/Box.jsx'

export default function App() {
  return (
    <Canvas>
      <color attach="background" args={['#fff']} />
      <ambientLight intensity={0.5} />      
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />      
      <pointLight position={[-10, -10, -10]} />      
      <Pyramid position={[-1.2, 0, 0]} color={'red'} />
    </Canvas>
  )
}