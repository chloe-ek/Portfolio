import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "motion/react";


const About = () => {
  return (
    <motion.div id='about' className="w-full px-[12%] py-10 scroll-mt-20"
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}>
        <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo">About Me</motion.h2>

        <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
            <div className="w-64 sm:w-80 rounded-3xl max-w-none">
                <img src={assets.profile_img} alt="user" className="w-full rounded-3xl"/>
            </div>
            <div className="flex-1">
                <p className="mb-10 max-w-2xl font-Ovo">
                I enjoy creating useful applications with clean, maintainable code.  
                I'm always looking to grow, explore new tools, and contribute to meaningful projects.

                </p>
                <motion.ul
                nitial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ delay:1, duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <li
                        className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                         hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-md' 
                            key={index}>
                            <img src={icon} alt={title} className="w-7 mt-3"/>
                            <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                            <p className="text-gray-600 text-sm">{description}</p>
                        </li>
                    ))}
                </motion.ul>

                <h4 className="font-Ovo my-4 text-gray-700">Workflow Tools</h4>

                <motion.ul
                nitial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ delay:1.5, duration: 0.6 }}
                className="flex items-center gap-3 sm:gap-5">
                    {toolsData.map((tool, index) => (
                        
                        <motion.li
                        whileHover={{ scale: 1.05 }}
                        className='flex items-center justify-center
                        w-12 sm:w-14 aspect-square border-[0.5px] border-gray-400 rounded-lg cursor-pointer 
                        hover:-translate-y-1 duration-500' 
                        key={index}>
                            <img src={tool} alt='Tool' className="w-5 sm:w-7"/>
                        </motion.li>
                    ))}
                </motion.ul>
                
                
            </div>
        </motion.div>
    </motion.div>
  )
}

export default About