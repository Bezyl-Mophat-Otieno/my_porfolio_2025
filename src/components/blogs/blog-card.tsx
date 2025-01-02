import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from './blog-link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  slug: string;
}

export function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  category,
  imageUrl,
  slug,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="aspect-[16/9] overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex flex-wrap items-center gap-y-2 -mx-1">
            <div className="px-1">
              <span className="inline-flex px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                {category}
              </span>
            </div>
            <div className="px-1">
              <span className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                {date}
              </span>
            </div>
            <div className="px-1">
              <span className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4 flex-shrink-0" />
                {readTime}
              </span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300">
            {excerpt}
          </p>

          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <span>Read more</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}