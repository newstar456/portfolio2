import React, {useEffect, useRef} from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
// import profilePic from '@/public/images/profile/female-developer.webp';
import Image from 'next/image'
import { useMotionValue, useSpring, useInView } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref=useRef(null)
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000})
    const isInView = useInView(ref)

    useEffect(()=> {
        if(isInView) {
            motionValue.set(value)
        }
    },[isInView, value, motionValue])

    useEffect(()=> {
        springValue.on('change', (latest)=> {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    },[springValue, value])

    return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
    <Head>
        <title>Viktoria Vonsovych | About Page</title>
        <meta name="description" content="Portfolio Viktoria Vonsovych" />
       <link rel="icon" href="/icons/favicon.ico" />
        <link rel="icon" type="image/png" href="/icons/favicon.png" />
        <link rel="apple-touch-icon" href="/icons/favicon.png" />
    </Head>
    <TransitionEffect/>
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Passion Fuels Purpose!" className='mb-16 dark:text-light lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'> About me</h2>
                    <p className='my-4 font-medium'>I am a passionate Frontend developer looking for new challenges. I decided to switch to IT because I enjoy working with numbers and data, I like both - to create solutions via code and seeing how my code works on screen. Every task is something new and as a developer I should find solutions how to implement it - that is what I like a lot at this profession! It has been couple of years since I am learning Frontend development and participating as a volunteer Web Developer in various projects.</p>
                    <p className='font-medium'>My goal is to get involved into projects on a constant basis as Web Developer and to obtain a profound expertise at various technologies. Though I also consider mastering Backend as well, but currently I am more about Frontend.</p>
                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light dark:border-light'/>
                    <Image src={'/images/profile/female-developer.webp'} alt='Viktoria Vonsovych' className='w-full h-auto rounded-2xl' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' width={100} height={100}/>
                </div>
                <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={25}/></span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>technologies in stack</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={7}/></span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={2}/></span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                    </div>
                </div>
            </div>
            <Skills/>
            <Experience/>
            <Education/>
        </Layout>
    </main>
    
    </>
  )
}

export default About