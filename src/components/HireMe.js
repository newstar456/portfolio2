import React from 'react'
import {RainbowText} from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    //move to right top corner for small screen
    <div className='fixed -left-10 bottom-40 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <RainbowText className={'fill-dark animate-spin dark:fill-light'}/>
            <Link href='mailto:vikvons@gmail.com' className='flex items-center justify-center absolute left-[130px] top-[287px] -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'> Hire Me</Link>
        </div>
    
    </div>
  )
}

export default HireMe