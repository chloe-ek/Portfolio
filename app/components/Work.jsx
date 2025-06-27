import { assets, workData } from "@/assets/assets";
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Featured Projects
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        What I've built
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-3xl mx-auto mt-5 mb-20 font-Ovo"
      >
          Click on any project to view the live demo.
          
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {workData.map((project, index) => {
          const content = (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="rounded-lg overflow-hidden shadow-sm group transition duration-300 cursor-pointer"
            >
              <div
                className="aspect-square bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              ></div>

              <div className="bg-white px-5 py-3 group-hover:bg-neutral-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-semibold text-base">{project.title}
                        {project.liveLink && (
                        <img
                          src={assets.live1}
                          alt="Live"
                          title="Live Demo"
                          className="ml-1 w-5 h-5 opacity-100 inline-block hover:scale-110 transition"
                        />
                      )}
                    </h2>
                    <p className="text-sm text-gray-700 flex items-center gap-2">
                      {project.description}
                      {project.githubLink && ( 
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub Repo"
                        >
                          <img src={assets.github_icon} alt="GitHub" className="w-4 hover:scale-110 transition" />
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );

          return project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="block"
            >
              {content}
            </a>
          ) : (
            content
          );
        })}
      </motion.div>

      <a
        href="https://github.com/chloe-ek"
        className="w-max flex items-center justify-center gap-2 text-gray-700 cursor-pointer
        border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
      >
        Show more <img src={assets.right_arrow_bold} alt="Right Arrow" className="w-4" />
      </a>
    </motion.div>
  );
};

export default Work;
