import { assets, workData } from "@/assets/assets";
import { motion } from "motion/react";


const Work = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='work' className="w-full px-[12%] py-10 scroll-mt-20">
        <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-Ovo">My portfolio</motion.h4>
        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
         className="text-center text-5xl font-Ovo">My latest work</motion.h2>

        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.5, delay: 0.7 }} 
        className="text-center max-w-3xl mx-auto mt-5 mb-20 font-Ovo">
        A collection of projects where I applied what I’ve learned — from full-stack web apps to mobile prototypes.
        </motion.p>


        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="grid grid-cols-auto gap-6 my-10"
            >
            {workData.map((project, index) => (
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    key={index}
                    className="rounded-lg overflow-hidden shadow-sm group transition duration-300"
                    >
                    <div
                        className="aspect-square bg-no-repeat bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    ></div>

                    <div className="bg-white px-5 py-3 group-hover:bg-neutral-100">
                        <div className="flex justify-between items-start">
                            <div>
                            <h2 className="font-semibold text-base">{project.title}</h2>
                            <p className="text-sm text-gray-700">{project.description}</p>
                            </div>
                            <div>
                            {project.githubLink && (<a href={project.githubLink}>
                            <img src={assets.github_icon} alt="" className="w-6 items-center translate-y-2"/></a>)}
                            </div>
                        </div>
                    </div>

            
                </motion.div>
            ))}
        </motion.div>

        <a
            href="https://github.com/chloe-ek"
            className="w-max flex items-center justify-center gap-2 text-gray-700 cursor-pointer
            border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
            >
            Show more <img src={assets.right_arrow_bold} alt="Right Arrow" className="w-4" />
        </a>


    </motion.div>
  )
}

export default Work