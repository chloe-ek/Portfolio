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
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.9, delay: 0.3 }} 
        className="grid grid-cols-auto gap-6 my-10">
            {workData.map((project, index) => (
                <motion.div
                whileHover={{scale : 1.05}} 
                    key={index}
                    className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                    style={{ backgroundImage: `url(${project.bgImage})` }}>
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
                    py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">{project.title}</h2>
                            <p className="text-sm text-gray-700">{project.description}</p>
                        </div>
                        <div className="border rounded-full border-black w-9 aspect-square flex
                        items-center justify-center shawdow-[2px_2px_0_#000] group-hover:bg-red-200">
                            <img src={assets.send_icon} alt="Send Icon" className="w-5" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>

        <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.5, delay: 0.8 }}
        href="" className="w-max flex items-center justify-center gap-2 text-gray-700 cursor-pointer
        border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500">
            Show more <img src={assets.right_arrow_bold} alt="Right Arrow" className="w-4" />
        </motion.a>

    </motion.div>
  )
}

export default Work