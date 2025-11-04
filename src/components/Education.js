import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null)

  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {type}
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {place}
        </span>
        <p className='font-medium w-full md:text-sm'>{info}</p>
      </motion.div>
    </li>
  )
}

const Education = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.2'],
    layoutEffect: false,
  })

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Education
      </h2>

      <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <div ref={ref} className='relative pb-16'> 
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
          />
          <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details
              type='Course “Fullstack Web Developer”'
              time="Dec’21 – May’22"
              place='ZeroToMastery Academy'
              info='The course included Frontend, Backend technologies and databases.'
            />
            <Details
              type='Course “Frontend Developer”'
              time="Jun’20 – Dec’21"
              place='CyberBionic Systematics School'
              info='Deep knowledge on Web Development technologies.'
            />
            <Details
              type='Economic education'
              time="2007–2012"
              place='Zhytomyr State Technological University'
              info='Obtained knowledge on financial instruments, corporate accounting, banking and insurance.'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Education
