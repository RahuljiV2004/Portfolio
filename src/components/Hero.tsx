'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D5635AQGO-6D-43G3hQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1719437536450?e=1745740800&v=beta&t=Xem-H6yJP60zq6XRwS27tRyLGurVWF7I2ztY49OGYMM"
              alt="Rahulji V"
              className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
            />
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi there 👋, I'm{' '}
              <span className="text-indigo-600 dark:text-indigo-400">Rahulji.V</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
              🚀 Final Year Student | Full Stack Developer | MERN Stack Enthusiast
            </h2>
            <div className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
              <span className="inline-block">Web Dev | IoT | ML | Explorer</span>
              <br />
              <span className="inline-block">Always Learning 📚 Always Building 🚧</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <a
              href="https://github.com/RahuljiV2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahulji-v-26948b215/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:rahuljivisu2004@gmail.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaEnvelope className="w-8 h-8" />
            </a>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors cursor-pointer"
            >
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
