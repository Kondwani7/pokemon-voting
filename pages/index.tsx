import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-between items-center relative'>
      <Head>Pokemon round vote</Head>
      <div className='text-2xl text-center pt-8'>Which pokemon is rounder</div>
      <div className='p-2'/>
      <div className='border rounded p-8 flex justify-between items-center max-w-2xl anmimate-fade-in'>
        <div className='w-16 h-16 bg-red-200'/>
        <div className='p-8'>Vs</div>
        <div className='w-16 h-16 bg-red-200'/>
      </div>
    </div>
  )
}

export default Home
