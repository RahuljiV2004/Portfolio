'use client';
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Heritopia',
    description: 'Explore historical landmarks across India with interactive maps, reviews, and cultural insights.',
    features: [
      'IPFS-based face encoding storage',
      'On-site identity verification',
    ],
    tech: ['Ejs', 'Node.js', 'MongoDB', 'IPFS','Express.js','REST API','Jwt tokens','bcrypt','cloudinary','joi','MapBox API','OpenWeather API'],
    git:'https://github.com/RahuljiV2004/Heretopia-RAHULJI-Modified'
  },
  {
    title: 'Resume Enhancer',
    description: 'AI-powered tool to critique and enhance resumes based on job descriptions.',
    features: [
      'Mock interview simulations',
      'Real-time confidence detection',
    ],
    tech: ['React','Node.js', 'MongoDB','Express.js','REST API','Python', 'TensorFlow',  'MediaPipe','OpenAI API','cloudinary'],
    git:'https://github.com/RahuljiV2004/G-RESUME'
  },
  {
    title: 'Pentest Toolkit',
    description: 'Lightweight toolkit for practicing web vulnerability assessments locally.',
    features: [
      'Backend API integration',
      'Clean, intuitive dashboard',
    ],
    tech: ['Python', 'React', 'Flask','REST API','OWASP ZAP','nmap','other CyberSecurity tools'],
    git:'https://github.com/RahuljiV2004/FossHack'
   
  },
  {
    title: 'Financial Fraud Detector',
    description: 'ML-based system to flag fraudulent financial transactions using real-world datasets.',
    features: [
      'Risk scoring',
      'Money laundering detection',
      'ML-based anomaly analysis',
    ],
    tech: ['React','Node.js','Express.js','MongoDB','Machine Learning','Python', 'Scikit-learn', 'TensorFlow'],
    git:'https://github.com/RahuljiV2004/Project-X-Financial-Fraud-detection'
  },
  {
    title: 'Accident Alert System',
    description: 'IoT-based system for accident detection with automatic vehicle stopping and real-time location alerts.',
    features: [
      'Vibration sensors',
      'Alcohol detection',
      'GPS modules',
      'Machine learning',
    ],
    tech: ['Arduino', 'Openstreet API', 'HTML','Machine Learning'],
    git:'https://github.com/RahuljiV2004/accident-alert'
  },
];
  const handleRedirect = (s) => {
    window.open(s, '_blank')
  }

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-white-800 mb-2">Key Features:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
          
        </div>

        <div>
        <button
         onClick={() =>
          handleRedirect(project.git)
        }
        className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-gray text-white rounded-full hover:bg-gray-800 transition duration-300 shadow-lg hover:scale-105 transform"
      >
        <FaGithub size={18} />
        View on GitHub
      </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Projects I'm Proud Of
          </h2>
          <p className="text-xl text-gray-600">
            Here are some of my favorite projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))
          }
          
        </div>
      </div>
    </section>
  );
};

export default Projects; 