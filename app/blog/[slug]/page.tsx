import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, MessageCircle, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications: Best Practices for 2024',
      slug: 'scalable-react-applications-2024',
      excerpt: 'Learn the latest best practices for building maintainable and scalable React applications, including modern patterns, performance optimization, and architecture decisions.',
      content: `
        <h2>Introduction</h2>
        <p>Building scalable React applications requires careful consideration of architecture, performance, and maintainability. In this comprehensive guide, we'll explore the best practices that have emerged in 2024.</p>
        
        <h3>1. Component Architecture</h3>
        <p>The foundation of any scalable React application lies in its component architecture. Here are the key principles to follow:</p>
        <ul>
          <li><strong>Single Responsibility Principle:</strong> Each component should have one clear purpose</li>
          <li><strong>Composition over Inheritance:</strong> Use composition patterns to build complex UIs</li>
          <li><strong>Container vs Presentational:</strong> Separate logic from presentation</li>
        </ul>
        
        <h3>2. State Management</h3>
        <p>Effective state management is crucial for scalable applications. Consider these approaches:</p>
        <ul>
          <li><strong>Local State:</strong> Use useState for component-specific data</li>
          <li><strong>Context API:</strong> For sharing state across component trees</li>
          <li><strong>External Libraries:</strong> Redux, Zustand, or Jotai for complex state needs</li>
        </ul>
        
        <h3>3. Performance Optimization</h3>
        <p>Performance should be built into your application from the start:</p>
        <ul>
          <li><strong>React.memo:</strong> Prevent unnecessary re-renders</li>
          <li><strong>useMemo and useCallback:</strong> Optimize expensive computations</li>
          <li><strong>Code Splitting:</strong> Lazy load components and routes</li>
          <li><strong>Virtual Scrolling:</strong> Handle large lists efficiently</li>
        </ul>
        
        <h3>4. Testing Strategy</h3>
        <p>A robust testing strategy ensures your application remains reliable as it grows:</p>
        <ul>
          <li><strong>Unit Tests:</strong> Test individual components and functions</li>
          <li><strong>Integration Tests:</strong> Test component interactions</li>
          <li><strong>E2E Tests:</strong> Test complete user workflows</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Building scalable React applications is an ongoing process that requires attention to architecture, performance, and maintainability. By following these best practices, you'll be well-equipped to handle growing complexity and team size.</p>
      `,
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
      content: `
        <h2>What's New in Next.js 14</h2>
        <p>Next.js 14 brings significant improvements to the React framework, with enhanced performance optimizations and new features that make development even more enjoyable.</p>
        
        <h3>1. Turbopack Improvements</h3>
        <p>The new Rust-based bundler continues to evolve:</p>
        <ul>
          <li>Faster local development server startup</li>
          <li>Improved Hot Module Replacement (HMR)</li>
          <li>Better error handling and debugging</li>
        </ul>
        
        <h3>2. Server Actions Enhancements</h3>
        <p>Server Actions have been stabilized and improved:</p>
        <ul>
          <li>Better TypeScript support</li>
          <li>Improved error handling</li>
          <li>Enhanced security features</li>
        </ul>
        
        <h3>3. Partial Prerendering</h3>
        <p>A new experimental feature that combines static and dynamic rendering:</p>
        <ul>
          <li>Instant static shell loading</li>
          <li>Dynamic content streaming</li>
          <li>Improved Core Web Vitals</li>
        </ul>
        
        <h3>Migration Guide</h3>
        <p>Upgrading to Next.js 14 is straightforward for most applications. Here's what you need to know:</p>
        <ul>
          <li>Update your package.json dependencies</li>
          <li>Review breaking changes in the migration guide</li>
          <li>Test your application thoroughly</li>
        </ul>
      `,
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
      category: 'Next.js',
      tags: ['Next.js', 'React', 'Performance', 'Framework'],
      author: 'Mahbub E Waduzzaman',
      publishedAt: '2024-01-10',
      readTime: '6 min read',
      featured: true
    }
  ];

  return blogPosts.find(post => post.slug === slug);
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Mahbub E Waduzzaman Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = [
    {
      title: 'TypeScript Tips: Advanced Types for Better Code Quality',
      slug: 'typescript-advanced-types-code-quality',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
      readTime: '10 min read'
    },
    {
      title: 'Modern CSS Techniques for Better UI Design',
      slug: 'modern-css-techniques-ui-design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      readTime: '7 min read'
    }
  ];

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary hover:text-primary-focus font-medium group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-base-content/60 mb-8">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            className="text-base-content/80 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Article Footer */}
        <footer className="border-t border-base-300 pt-8 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="btn btn-ghost btn-sm">
                <Heart className="w-4 h-4 mr-2" />
                Like (24)
              </button>
              <button className="btn btn-ghost btn-sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Comment
              </button>
            </div>
            <button className="btn btn-ghost btn-sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </footer>

        {/* Author Bio */}
        <div className="bg-base-200 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <img
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
              alt="Mahbub E Waduzzaman"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-base-content mb-2">Mahbub E Waduzzaman</h3>
              <p className="text-base-content/70 mb-4">
                Full-stack developer with 5+ years of experience building scalable web applications. 
                Passionate about React, TypeScript, and modern web technologies.
              </p>
              <div className="flex space-x-4">
                <Link href="/about" className="text-primary hover:text-primary-focus font-medium">
                  View Profile
                </Link>
                <Link href="/contact" className="text-primary hover:text-primary-focus font-medium">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-base-content mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <Link
                key={index}
                href={`/blog/${relatedPost.slug}`}
                className="group bg-base-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-base-content group-hover:text-primary transition-colors mb-2">
                    {relatedPost.title}
                  </h3>
                  <div className="flex items-center text-sm text-base-content/60">
                    <Clock className="w-3 h-3 mr-1" />
                    {relatedPost.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}