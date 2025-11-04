"use client";

import React from "react";
import { motion } from "framer-motion";

const Step = ({ year, position, company, companyLink, time, address, work }) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      viewport={{ once: true }}
      className="relative mb-12 pl-16 md:pl-12"
    >
      <span className="absolute left-0 top-2 w-4 h-4 rounded-full bg-background_pink"></span>

      <div className="bg-light dark:bg-dark p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-xl sm:text-lg xs:text-base">{position}</h3>
          <span className="text-sm font-medium text-dark/70 dark:text-light/70">{year}</span>
        </div>
        {company && (
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primaryDark underline"
          >
            @{company}
          </a>
        )}
        <p className="text-sm text-dark/70 dark:text-light/70 mt-1">
          {time} {address && `| ${address}`}
        </p>
        <p className="mt-2 text-base md:text-sm">{work}</p>
      </div>
    </motion.li>
  );
};

const ExperienceStepper = () => {
  return (
    <section className="my-48 w-[80%] mx-auto lg:w-[90%] md:w-full">
      <h2 className="font-bold text-8xl mb-24 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <ul className="relative border-l-[1px] border-dark dark:border-light pl-6 md:pl-4">
        <Step
          year="2025"
          position="Junior Frontend Developer"
          company="European University (CRM platform)"
          companyLink=""
          time="Aug’25 – Present"
          address="Remote"
          work="Working on internal platform for students & tutors using React, TypeScript, Redux, Axios, and SASS."
        />
        <Step
          year="2025"
          position="Frontend Developer"
          company="Jewelry Shop CRM"
          companyLink="https://jewelry-test-site.netlify.app"
          time="Apr’25 – Present"
          address="Remote"
          work="Built an online platform for jewelry wholesalers with React, TypeScript, Redux, Axios, and styled-components."
        />
        <Step
          year="2024"
          position="Junior Frontend Developer"
          company="Baza Trainee Ukraine"
          companyLink="https://baza-everything-can-move.vercel.app/"
          time="Aug’24 – Feb’25"
          address="Remote"
          work="Created IT volunteer organization site using Next.js, TypeScript, Tailwind, and interactive 2D/3D animations."
        />
        <Step
          year="2013"
          position="Financial & Accounting Work Experience"
          time="Jan’13 – Present"
          address="Ukraine, Poland"
          work="Held various finance roles, currently working as a Financial Analyst."
        />
      </ul>
    </section>
  );
};

export default ExperienceStepper;
