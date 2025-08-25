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
          Click a project to see the live demo or explore the code.
          
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10"
      >
        {workData.map((project, index) => {
          const content = (
            <motion.div
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg group transition-all duration-500 cursor-pointer bg-white border border-gray-100 flex flex-col h-full"
            >
              <div className="relative">
                <div
                  className="aspect-square bg-no-repeat bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                {project.liveLink && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      Live
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2 flex-1">
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.status === 'In Development' && (
                      <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium border border-orange-200">
                        In Development
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 ml-4 flex-shrink-0">
                    {project.liveLink && (
                      <img
                        src={assets.live1}
                        alt="Live Demo"
                        title="Live Demo Available"
                        className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Source Code"
                        onClick={(e) => e.stopPropagation()}
                        className="opacity-70 hover:opacity-100 transition-opacity"
                      >
                        <img src={assets.github_icon} alt="GitHub" className="w-5 h-5 hover:scale-110 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-gray-500 text-xs mb-4 leading-relaxed flex-1">
                  {project.summary}
                </p>

                {(project.duration || project.teamSize || project.impact) && (
                  <div className="mb-4 space-y-1">
                    {project.duration && (
                      <div className="flex items-center text-xs text-gray-500">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {project.duration}
                      </div>
                    )}
                    {project.teamSize && (
                      <div className="flex items-center text-xs text-gray-500">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {project.teamSize}
                      </div>
                    )}
                    {project.impact && (
                      <div className="flex items-center text-xs text-blue-600 font-medium">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        {project.impact}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium border border-gray-200 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Click to view {project.liveLink ? 'live demo' : 'source code'}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
          ) : project.githubLink ? (
            <a
              href={project.githubLink}
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

      <motion.a
        href="https://github.com/chloe-ek"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-max flex items-center justify-center gap-3 bg-black text-white bg-gradient-to-r black cursor-pointer rounded-full py-4 px-8 mx-auto my-20 hover:from-blue-700 hover:to-purple-700 transition-all duration-500 shadow-lg hover:shadow-xl font-medium"
      >
        View All Projects on GitHub
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default Work;
