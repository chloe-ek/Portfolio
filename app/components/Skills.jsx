import { serviceData } from "@/assets/assets";
import { motion } from "motion/react";


const Skills = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='skills' className="w-full px-[12%] py-10 scroll-mt-20">
        <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-Ovo">What I use</motion.h4>
        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo">My Toolbox </motion.h2>

        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-3xl mx-auto mt-5 mb-20 font-Ovo">
          These are the tools I've used in personal and team projects throughout my development journey.

        </motion.p>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-auto gap-6 my-10">
            {serviceData.map(({icon, title, description, link}, index)=>(
                 <motion.div
                 whileHover={{scale : 1.05}} 
                 key={index} className="border border-gray-400 rounded-lg px-8 py-12
                 hover:shadow-md  cursor-pointer hover:bg-lightHover hover:-translate-y-1
                 duration-500">
                    <img src={icon} alt='' className="w-10"/>
                    <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                    <p className="text-sm leading-5 text-gray-600">{description}</p>
                    
                 </motion.div>
            ))}

        </motion.div>
    </motion.div>
  )
}

export default Skills