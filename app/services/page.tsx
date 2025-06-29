import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Search, 
  Cloud, 
  Users, 
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Headphones
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services - Mahbub E Waduzzaman | Web Development, Mobile Apps, UI/UX Design',
  description: 'Professional web development services including React development, mobile apps, UI/UX design, SEO optimization, and cloud solutions. Get a custom quote today.',
  keywords: 'web development services, react development, mobile app development, ui ux design, seo optimization, cloud solutions',
};

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web applications built with modern technologies like React, Next.js, and Node.js.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'Database Integration',
        'API Development',
        'Third-party Integrations'
      ],
      price: 'Starting at $2,500',
      popular: true
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications using React Native and modern mobile development practices.',
      features: [
        'iOS & Android Apps',
        'Native Performance',
        'Push Notifications',
        'Offline Functionality',
        'App Store Deployment'
      ],
      price: 'Starting at $5,000',
      popular: false
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that convert visitors into customers and enhance user experience.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems'
      ],
      price: 'Starting at $1,500',
      popular: false
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to improve your website\'s visibility and organic search rankings.',
      features: [
        'Technical SEO Audit',
        'Keyword Research',
        'On-page Optimization',
        'Performance Optimization',
        'Analytics Setup'
      ],
      price: 'Starting at $800',
      popular: false
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure setup and deployment using AWS, Vercel, and other modern platforms.',
      features: [
        'Cloud Migration',
        'CI/CD Pipelines',
        'Database Setup',
        'Performance Monitoring',
        'Security Implementation'
      ],
      price: 'Starting at $1,200',
      popular: false
    },
    {
      icon: Users,
      title: 'Consulting & Training',
      description: 'Technical consulting and team training to help your organization adopt modern development practices.',
      features: [
        'Technical Architecture',
        'Code Reviews',
        'Team Training',
        'Best Practices',
        'Technology Selection'
      ],
      price: '$150/hour',
      popular: false
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your goals, requirements, and target audience.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Create a detailed project plan with timelines, milestones, and deliverables.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Develop wireframes, mockups, and prototypes for your approval.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Build your solution using best practices and modern technologies.'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Comprehensive testing to ensure quality and performance.'
    },
    {
      step: '06',
      title: 'Launch',
      description: 'Deploy your project and provide ongoing support and maintenance.'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and reliable infrastructure'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Ongoing support and maintenance for peace of mind'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-base-100 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-base-content mb-6">
            Professional Development Services
          </h1>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into powerful digital solutions with expert development services 
            tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    service.popular ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-content px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-base-content mb-2">
                      {service.title}
                    </h3>
                    <p className="text-base-content/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-base-content/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-base-300 pt-6">
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                    </div>
                    <Link
                      href="/contact"
                      className={`btn w-full ${
                        service.popular ? 'btn-primary' : 'btn-outline'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              My Development Process
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              A proven process that ensures successful project delivery from concept to launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((process, index) => (
              <div
                key={index}
                className="bg-base-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-primary-content w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-base-content">
                    {process.title}
                  </h3>
                </div>
                <p className="text-base-content/70 text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              Why Choose My Services?
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-base-content mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-base-content/70">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Let's discuss your project requirements and create something amazing together.
              </p>
              <Link href="/contact" className="btn btn-white text-primary hover:bg-white/90">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;