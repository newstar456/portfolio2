'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Card, CardContent, CardTitle, CardDescription } from "@components/ui/card";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaFigma, FaSass, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiTailwindcss, SiPostgresql, SiSequelize, SiPrisma, SiBlender, SiStyledcomponents, SiAxios, SiPyup } from "react-icons/si";
import { TbBrandThreejs, TbBrandFramerMotion } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { GiPaintBrush } from "react-icons/gi";
import { MdOutlineApi, MdOutlineDataObject } from "react-icons/md";
import Image from 'next/image';


interface Skill {
  name: string;
  category: string;
  level: number;
  icon?: React.ReactNode;
  image?: string;
}


export const allSkills: Skill[] = [
  { name: 'React', icon: <FaReact className="text-sky-400" size={40} />, category: 'Frontend', level: 70 },
  { name: 'TypeScript', icon: <SiTypescript className="text-sky-600" size={40} />, category: 'Frontend', level: 65 },
  { name: 'ReduxJS', icon: <SiRedux className="text-violet-800" size={40} />, category: 'Frontend', level: 30 },
  { name: 'NextJS', icon: <RiNextjsFill className="text-gray-950" size={40} />, category: 'Frontend', level: 30 },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" size={40} />, category: 'Frontend', level: 85 },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" size={40} />, category: 'Frontend', level: 85 },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" size={40} />, category: 'Frontend', level: 90 },
  { name: 'DOM API', icon: <MdOutlineDataObject className="text-emerald-500" size={40} />, category: 'Frontend', level: 70 },
  { name: 'SASS', icon: <FaSass className="text-pink-400" size={40} />, category: 'Styling', level: 70 },
  { name: 'MaterialUI', image: "/icons/materialui.png", category: 'Styling', level: 70 },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" size={40} />, category: 'Styling', level: 80 },
  { name: 'Framer-motion', icon: <TbBrandFramerMotion className="text-fuchsia-500" size={40} />, category: 'Styling', level: 25 },
  { name: 'styled-components', icon: <SiStyledcomponents className="text-pink-500" size={40} />, category: 'Styling', level: 75 },
  { name: 'Figma', image: "/icons/figma.png", category: 'Design', level: 90 },
  { name: 'PostgreSQL', image: "/icons/postgresql.png", category: 'Databases', level: 25 },
  { name: 'Sequelize', image: "/icons/sequelize.png", category: 'ORMs', level: 40 },
  { name: 'Prisma', icon: <SiPrisma className="text-gray-950" size={40} />, category: 'ORMs', level: 20 },
  { name: 'ThreeJS', icon: <TbBrandThreejs className="text-gray-700" size={40} />, category: '3D', level: 10 },
  { name: 'Blender', icon: <SiBlender className="text-orange-500" size={40} />, category: '3D', level: 40 },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" size={40} />, category: 'Tools', level: 60 },
  { name: 'Zustand', image: "/icons/zustand_icon.png", category: 'State Management', level: 60 },
  { name: 'Axios', icon: <SiAxios className="text-cyan-500" size={40} />, category: 'Data Handling', level: 60 },
  { name: 'REST API', icon: <MdOutlineApi className="text-blue-600" size={40} />, category: 'Data Handling', level: 65 },
  { name: 'Yup', icon: <SiPyup className="text-green-600" size={40} />, category: 'Validation', level: 50 },
  { name: 'Canvas 2D', icon: <GiPaintBrush className="text-rose-500" size={40} />, category: 'Graphics', level: 40 },
];

const categories = [
  'All',
  'Frontend',
  'Styling',
  'Design',
  'State Management',
  'Data Handling',
  'Validation',
  'Graphics',
  'Tools',
  'ORMs',
  'Databases',
  '3D'
];

export default function Skills() {

  const [selected, setSelected] = useState('All');
  const filtered = selected === 'All'
    ? allSkills
    : allSkills.filter(skill => skill.category === selected);

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-10"
        >
          Skills & Tools
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border 
                ${selected === cat
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-muted text-muted-foreground hover:bg-muted'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <AnimatePresence>
            {filtered.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: any }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const backgroundGlow = useTransform(scale, [1, 1.05], ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 25px rgba(56,189,248,0.4)"]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      style={{
        rotateX,
        rotateY,
        scale,
        boxShadow: backgroundGlow as any,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        rotateX.set(-y / 20);
        rotateY.set(x / 20);
        scale.set(1.05);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
        scale.set(1);
      }}
      className="transition-transform perspective-1000"
    >
      <Card className="backdrop-blur-md bg-card/70 hover:shadow-xl border border-border transition-all rounded-2xl">
        <CardContent className="flex flex-col items-center gap-3 py-6">
          {skill.icon ? (
            skill.icon
          ) : (
            <Image
              src={skill.image ?? ""}
              alt={skill.name}
              width={40}
              height={40}
              className="object-contain"
            />
          )}
          <CardTitle>{skill.name}</CardTitle>
          <CardDescription>{skill.category}</CardDescription>

          <div className="w-full mt-3">
            <div className="relative h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute h-full bg-sky-400/80 dark:bg-sky-500/80 rounded-full"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">{skill.level}% Expertise</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}