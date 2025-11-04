import React from 'react'

export const metadata = {
  title: 'Viktoria Vonsovych Portfolio',
  description: 'Skilled full-stack developer, dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.',
}

const Layout = ({children, className=''}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-12 dark:bg-dark xl:p-12 lg:p-12 md:p-12 sm:p-8${className}`}>
      {children}
    </div>
  )
}

export default Layout