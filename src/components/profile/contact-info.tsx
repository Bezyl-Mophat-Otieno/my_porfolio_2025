import { Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/johndoe',
    label: 'LinkedIn Profile',
  },
  {
    icon: Github,
    href: 'https://github.com/johndoe',
    label: 'GitHub Profile',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/johndoe',
    label: 'Twitter Profile',
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-gray-600 dark:text-gray-300 flex items-center gap-1">
          <MapPin className="w-4 h-4" /> San Francisco, CA
        </p>
        <a
          href="mailto:john@example.com"
          className="text-gray-600 dark:text-gray-300 flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Mail className="w-4 h-4" />
          john@example.com
        </a>
      </div>

      <div className="flex justify-center gap-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}