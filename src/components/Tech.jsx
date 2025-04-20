'use client';

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress, SiCplusplus } from 'react-icons/si';



const techStack = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-600 dark:text-gray-200" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'SQL', icon: <FaDatabase className="text-purple-500" /> },
  
  // Added logos
  { 
    name: 'NumPy', 
    icon: <img src="https://numfocus.org/wp-content/uploads/2017/10/Numpypng.png" alt="NumPy Logo" className="w-14 h-14 object-contain" /> 
  },
  { 
    name: 'Pandas', 
    icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEDicm2YpQCw-jDOAGdWldUWS0mU6LF4Iqw&s" alt="Pandas Logo" className="w-14 h-14 object-contain" /> 
  },
  { 
    name: 'TensorFlow', 
    icon: <img src="https://avatars.githubusercontent.com/u/15658638?s=280&v=4" alt="TensorFlow Logo" className="w-12 h-12 object-contain" /> 
  },
  { 
    name: 'FastAPI', 
    icon: <img src="https://styles.redditmedia.com/t5_22y58b/styles/communityIcon_r5ax236rfw961.png" alt="FastAPI Logo" className="w-12 h-12 object-contain" /> 
  },
  { 
    name: 'Flask', 
    icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUFAZYGGk0Vun20mSoTVCKpnruyk5mUTO7g&s" alt="Flask Logo" className="w-12 h-12 object-contain" /> 
  },
  { 
    name: 'Java', 
    icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghdWGl00O5hS7sDlc98yJT_gszgNh1wwUlQ&s" alt="Java Logo" className="w-12 h-12 object-contain" /> 
  },
];


const TechStack = () => {
  return (
    <section id="techstack" className="py-24 bg-gray-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-12">
          🚀 My Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ rotate: 1, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-2">{tech.icon}</div>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
