import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base p-8 flex items-center justify-between lg:flex-col lg:p-6'>
        {/* <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'> */}
          <span>{new Date().getFullYear()} &copy; All Rigths Reserved</span>
          <div className='flex items-center lg:py-2'>Built With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
          by&nbsp;<Link href='https://www.linkedin.com/in/viktoria-v-5a0634129/' className='underline underline-offset-2'>Viktoria V.</Link>
          </div>
          <Link href='https://www.linkedin.com/in/viktoria-v-5a0634129/' target={'_blank'}>Say Hello</Link>
        {/* </Layout> */}
    </footer>
  )
}

export default Footer