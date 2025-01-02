import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest'],
  },
];

export function SkillsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Technical Skills</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="space-y-3"
          >
            <h3 className="font-medium text-gray-900 dark:text-white">{category.title}</h3>
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-8 rounded-md px-3 flex items-center"
                >
                  <span className="text-white text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}