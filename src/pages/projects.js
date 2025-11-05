import {motion} from 'framer-motion';
import Head from 'next/head';
import TransitionEffect from '@/components/TransitionEffect'
import { SectionWrapper } from '../hoc'
import {fadeIn} from '../lib/motion'

const tagColors = {
  react: "text-sky-500",
  nextjs: "text-gray-800 dark:text-gray-200",
  typescript: "text-green-500",
  dom_api: "text-emerald-500",
  three_js: "text-blue-400",
  tailwind: "text-cyan-400",
  framer_motion: "text-pink-400",
  rest_api: "text-orange-400",
  zustand: "text-red-400",
  redux: "text-violet-400",
  axios: "text-amber-950",
  styled_components: "text-orange-400",
  yup: "text-indigo-400",
  sass: "text-lime-600",
  canvas_rendering_context_2D: "text-yellow-600",
  default: "text-gray-400",
};

const projects = [
  {
    name: "Everything Can Move",
    description:
      "Website for #BazaTraineeUkraine developed in two different variants, with different designs, the switch between two is performed via button. Website makes representation about the organisation, its goals, projects, future and past.",
    tags: [
      { name: "react" },
      { name: "typescript" },
      { name: "tailwind" },
      { name: "nextjs" },
      { name: "dom_api" },
      { name: "three_js" },
      { name: "framer_motion" },
    ],
    image: "/images/projects/baza.png",
    source_code_link: "https://github.com/baza-trainee/baza-everything-can-move",
    website_link: "https://baza-everything-can-move.vercel.app/",
  },
  {
    name: "Web Store with CRM for a jewelry wholesaler",
    description:
      "Platform where jewelry wholesalers can create accounts and purchase jewelry from the supplier (site owner).",
    tags: [
      { name: "react" },
      { name: "redux" },
      { name: "axios" },
      { name: "styled_components" },
      { name: "typescript" },
      { name: "yup" },
    ],
    image: "/images/projects/jewelry.png",
    // source_code_link: "/",
    website_link: "https://jewelry-test-site.netlify.app/",
  },
  {
    name: "Online Platform for University",
    description:
      "A comprehensive platform that allows users to book services, manage data, and provides a custom UI for university operations. * add into cookies in DevTools: key - ACCESS_TOKEN; value - stable-token",
    tags: [
      { name: "react" },
      { name: "typescript" },
      { name: "redux" },
      { name: "axios" },
      { name: "yup" },
      { name: "sass" },
    ],
    image: "/images/projects/eu.svg",
    // source_code_link: "https://github.com/",
    website_link: 'https://dev.eu-crm.pp.ua:1000/main'
  },
  {
    name: "Watch ME E-commerce online platform",
    description:
      "A fullstack application (web store) with ability to make fetch/post request to mock API.",
    tags: [
      { name: "react" },
      { name: "typescript" },
      { name: "tailwind" },
      { name: "framer_motion" },
      { name: "rest_api" },
      { name: "zustand" },
    ],
    image: "/images/projects/watch.png",
    source_code_link: "https://github.com/newstar456/watch_me_shop",
    website_link: "https://newstar456.github.io/watch_me_shop/",
  },
  {
    name: "Snake Game",
    description:
      "A fun classic snake game built with React and JS logic with smooth animation and dynamic difficulty.",
    tags: [
      { name: "nextjs" },
      { name: "react" },
      { name: "typescript" },
      { name: "tailwind" },
      { name: "canvas_rendering_context_2D" },
    ],
    image: "/images/projects/snake.png",
    source_code_link: "https://github.com/newstar456/Snake-Game",
    website_link: "https://newstar456.github.io/Snake-Game/",
  },
];


const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full sm:w-[360px] flex-grow"
    >
<div className="flex flex-col justify-between h-[520px] bg-white/10 backdrop-blur-md border border-gray-300/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-5">
        <div className="relative w-full h-[220px] rounded-xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
          />
          {source_code_link && (
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-2 rounded-full transition"
            >
              <img src="/icons/github.png" alt="GitHub" className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="flex flex-col justify-between flex-grow mt-5">
          <div>
            <h3 className="text-lg font-semibold dark:text-white">{name}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-sm font-medium ${
                  tagColors[tag.name] || tagColors.default
                }`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {website_link && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => window.open(website_link, "_blank")}
                className="flex items-center bg-dark text-light p-2 px-4 rounded-lg text-md font-normal hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
              >
                visit website →
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Head>
        <title>Projects | My Portfolio</title>
        <meta name="description" content="Projects portfolio" />
        <link rel="icon" href="/icons/favicon.png" />
      </Head>
      <TransitionEffect />

        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 p-5'> About me</h2>
        <p className='my-4 font-medium p-5'> Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and/or live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>

      <div className="my-16 grid grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1  gap-8 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");