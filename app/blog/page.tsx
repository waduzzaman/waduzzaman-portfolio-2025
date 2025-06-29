import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Mahbub E Waduzzaman | Web Development Tips, Tutorials & Industry Insights',
  description: 'Read the latest web development articles, tutorials, and industry insights from Mahbub E Waduzzaman. Topics include React, Next.js, TypeScript, and modern web development practices.',
  keywords: 'web development blog, react tutorials, next.js tips, javascript articles, programming insights, tech blog',
};

const BlogPage = () => {
  const categories = ['All', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'UI/UX', 'Career'];
  
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications: Best Practices for 2024',
      slug: 'scalable-react-applications-2024',
      excerpt: 'Learn the latest best practices for building maintainable and scalable React applications, including modern patterns, performance optimization, and architecture decisions.',
      content: `Building scalable React applications requires careful consideration of architecture, performance, and maintainability. In this comprehensive guide, we'll explore the best practices that have emerged in 2024...`,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
      category: 'React',
      tags: ['React', 'JavaScript', 'Architecture', 'Performance'],
      author: 'Mahbub E Waduzzaman',
      publishedAt: '2024-01-15',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Next.js 14: New Features and Performance Improvements',
      slug: 'nextjs-14-features-performance',
      excerpt: 'Explore the exciting new features in Next.js 14, including improved performance, better developer experience, and enhanced server components.',
      content: `Next.js 14 brings significant improvements to the React framework, with enhanced performance optimizations and new features that make development even more enjoyable...`,
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
      category: 'Next.js',
      tags: ['Next.js', 'React', 'Performance', 'Framework'],
      author: 'Mahbub E Waduzzaman',
      publishedAt: '2024-01-10',
      readTime: '6 min read',
      featured: true
    },
    {
      id: 3,
      title: 'TypeScript Tips: Advanced Types for Better Code Quality',
      slug: 'typescript-advanced-types-code-quality',
      excerpt: 'Discover advanced TypeScript features and patterns that will help you write more robust and maintainable code with better type safety.',
      content: `TypeScript's advanced type system offers powerful features that can significantly improve your code quality and developer experience...`,
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
      category: 'TypeScript',
      tags: ['TypeScript', 'Code Quality', 'Development'],
      author: 'Mahbub E Waduzzaman',
      publishedAt: '2024-01-05',
      readTime: '10 min read',
      featured: false
    },
    {
      id: 4,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      slug: 'web-development-trends-2024',
      excerpt: 'An in-depth look at the emerging trends and technologies that are shaping the future of web development in 2024 and beyond.',
      content: `The web development landscape continues to evolve rapidly, with new technologies and methodologies emerging constantly...`,
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
      category: 'Career',
      tags: ['Trends', 'Web Development', 'Future', 'Technology'],
      author: 'Mahbub E Waduzzaman',
      publishedAt: '2023-12-28',
      readTime: '12 min read',
      featured: true
    },
    {
      id: 5,
      title: 'Modern CSS Techniques for Better UI Design',
      slug: 'modern-css-techniques-ui-design',
      excerpt: 'Learn modern CSS techniques including Grid, Flexbox, custom properties, and container queries to create beautiful and responsive user interfaces.',
      content: `Modern CSS offers powerful tools for creating sophisticated user interfaces without relying heavily on JavaScript...`,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      category: 'UI/UX',
      tags: ['CSS', 'UI Design', 'Frontend', 'Responsive'],
      author: 'Mahbub E Waduzzaman',
      publishedAt: '2023-12-20',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 6,
      title: 'JavaScript Performance Optimization: Tips and Techniques',
      slug: 'javascript-performance-optimization',
      excerpt: 'Essential techniques for optimizing JavaScript performance, including code splitting, lazy loading, and memory management best practices.',
      content: `Performance optimization is crucial for delivering fast and responsive web applications. Here are the key techniques every developer should know...`,
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      category: 'JavaScript',
      tags: ['JavaScript', 'Performance', 'Optimization', 'Best Practices'],
      author: 'Mahbub E Waduzzaman',
      publishedAt: '2023-12-15',
      readTime: '9 min read',
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-base-100 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-base-content mb-6">
              Development Blog
            </h1>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
              Sharing insights, tutorials, and best practices from my journey as a full-stack developer. 
              Learn about modern web technologies, development workflows, and industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-base-content">Featured Articles</h2>
            <div className="hidden md:flex space-x-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`btn btn-sm ${index === 0 ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-content px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-base-100/90 text-base-content px-2 py-1 rounded-md text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-base-content/60 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-base-content/70 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary-focus font-medium text-sm group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-base-content mb-12">Recent Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-base-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-base-100/90 text-base-content px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-base-content/60 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-base-content mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-base-content/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary-focus text-sm font-medium"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-base-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to get notified about new articles, tutorials, and web development insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered flex-1"
              />
              <button className="btn btn-white text-primary hover:bg-white/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;