import { motion } from 'framer-motion';
import { BlogCard } from './blog-card';

const blogs = [
  {
    title: 'Building Scalable Web Applications with React and TypeScript',
    excerpt: 'Learn how to create maintainable and type-safe React applications using TypeScript, best practices, and modern development tools.',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    category: 'Development',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    slug: 'building-scalable-web-applications',
  },
  {
    title: 'The Future of AI in Software Development',
    excerpt: 'Explore how artificial intelligence is transforming the software development landscape and what it means for developers.',
    date: 'Mar 10, 2024',
    readTime: '6 min read',
    category: 'AI & ML',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    slug: 'future-of-ai-in-software-development',
  },
  {
    title: 'Optimizing React Performance: A Deep Dive',
    excerpt: 'Discover advanced techniques for improving React application performance, from code splitting to memoization.',
    date: 'Mar 5, 2024',
    readTime: '10 min read',
    category: 'Performance',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    slug: 'optimizing-react-performance',
  },
];

export function BlogsSection() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Latest Articles
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Thoughts, tutorials, and insights about web development and technology.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <BlogCard {...blog} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}