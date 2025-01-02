import { motion } from 'framer-motion';

export function BioSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-center space-y-4"
    >
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h1>
        <p className="text-gray-600 dark:text-gray-300 font-medium">Senior Software Developer</p>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md">
        Passionate about creating elegant solutions to complex problems. 
        Specialized in full-stack development with 4 years of experience 
        building scalable applications.
      </p>
      
      <div className="flex flex-wrap justify-center gap-2">
        {['React', 'TypeScript', 'Node.js', 'AWS'].map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}