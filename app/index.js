'use client'

import { Canvas,} from '@react-three/fiber'
import Pyramid from './componenets/Box.js'
import {useState } from 'react'

export default function App() {
  const [stateArr, setStateArr]= useState([])
  const array =[]
  function fun(){
    stateArr.push("a");
  
    setStateArr(stateArr,)
    console.log(stateArr)
  }
  function del(){
    array.pop();
    setStateArr(array)
  }
  return (
    <div>
    <Canvas>
      <color attach="background" args={['#fff']} />
      <ambientLight intensity={0.5} />      
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />      
      <pointLight position={[-10, -10, -10]} /> 
       {stateArr.map((item,index)=> {return  <Pyramid key={index} position={[index, 0, 0]} color={'red'} />})}
       <Pyramid position={[-1.2, 0, 0]} color={'red'} />

   
      </Canvas>
    <button onClick={()=>fun()}>add</button>
    <button onClick={()=>del()}>del</button>

    </div>
    
  )
}