import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
// import profilePic from '@/public/images/profile/female-developer.webp';
import AnimatedText from '@/components/AnimatedText';
import {LinkArrow} from '../components/Icons';
// import HireMe from '@/components/HireMe';
import TransitionEffect from '@/components/TransitionEffect';
import LightBulbContact from '@/components/LightBulbContact';


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio Viktoria Vonsovych" />
        <link rel="icon" href="/icons/favicon.ico" />
<link rel="icon" type="image/png" href="/icons/favicon.png" />
<link rel="apple-touch-icon" href="/icons/favicon.png" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={'/images/profile/female-developer.webp'} alt='CodeBucks' className='w-full h-auto lg:hidden md:inline-block md:w-full' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' width={100} height={100}/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text='Turning Vision Into Reality With Code' className='!text-6xl !text-left dark:text-light xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm!text-3xl'/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>As a motivated starting Frontend developer, I am dedicated to turn ideas into innovative web applications. Explore my latest projects which showcase my expertise in ReactJS and web development.</p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href='/V.Vonsovych_CV.pdf' target={'_blank'} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base' download={true}>
                  Resume <LinkArrow className={'w-6 ml-1'}/>
                  </Link>
                  <Link href='mailto:vikvons@gmail.com' target={'_blank'} className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>Contact</Link>

                </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe/> */}
        {/* <LightBulbContact /> */}
      </main>
    </>
  )
}
