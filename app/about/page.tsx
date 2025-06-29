import type { Metadata } from 'next';
import { User, Award, Heart, Target, Users, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Mahbub E Waduzzaman - Full Stack Developer | My Story & Experience',
  description: 'Learn about Mahbub E Waduzzaman, a passionate full-stack developer with 5+ years of experience in React, Next.js, and modern web technologies. Discover my journey and values.',
  keywords: 'about Mahbub E Waduzzaman, full stack developer story, web developer experience, react developer background',
};

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'I believe in writing clean, maintainable code that stands the test of time.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Great products are built by great teams. I thrive in collaborative environments.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'I stay curious and constantly explore new technologies and methodologies.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'I genuinely love what I do and bring enthusiasm to every project.'
    }
  ];

  const timeline = [
    {
      year: '2023-Present',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp',
      description: 'Leading development of enterprise-scale applications using React, Next.js, and Node.js.'
    },
    {
      year: '2021-2023',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      description: 'Built and maintained multiple web applications from concept to deployment.'
    },
    {
      year: '2019-2021',
      title: 'Frontend Developer',
      company: 'DigitalAgency',
      description: 'Specialized in creating responsive, user-friendly interfaces for diverse clients.'
    },
    {
      year: '2018-2019',
      title: 'Junior Developer',
      company: 'WebSolutions',
      description: 'Started my professional journey, learning modern web development practices.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-base-100 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-base-content mb-6">
                  About Me
                </h1>
                <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
                <p className="text-xl text-base-content/70 leading-relaxed">
                  I am Mahbub E Waduzzaman, a passionate full-stack developer dedicated to creating 
                  exceptional digital experiences that make a real impact.
                </p>
              </div>
              
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-base-content/60">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-base-content/60">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">30+</div>
                  <div className="text-sm text-base-content/60">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="Mahbub E Waduzzaman"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-base-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">My Story</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none text-base-content/80">
            <p className="text-xl leading-relaxed mb-8">
              My journey into web development began during my computer science studies, 
              where I discovered the perfect blend of creativity and logic that programming offers. 
              What started as curiosity about how websites work evolved into a deep passion 
              for creating digital solutions that solve real-world problems.
            </p>
            
            <p className="leading-relaxed mb-8">
              Over the years, I have had the privilege of working with startups, established 
              companies, and individual clients, each project teaching me something new. 
              I have seen firsthand how the right technology can transform businesses and 
              improve people lives, which continues to motivate me every day.
            </p>
            
            <p className="leading-relaxed mb-8">
              Today, I specialize in full-stack development with a focus on React ecosystem, 
              Node.js, and cloud technologies. I believe in writing clean, maintainable code 
              and creating user experiences that are both beautiful and functional. When I am 
              not coding, I enjoy contributing to open-source projects, mentoring junior 
              developers, and staying up-to-date with the latest industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">My Values</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              These core values guide my approach to development and collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-1"
                >
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-base-content mb-3">
                    {value.title}
                  </h3>
                  <p className="text-base-content/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-base-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">My Journey</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-base-content/70">
              A timeline of my professional growth and key milestones
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-base-100 shadow-lg"></div>
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-base-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-primary font-semibold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-base-content mb-1">{item.title}</h3>
                    <div className="text-secondary font-medium mb-3">{item.company}</div>
                    <p className="text-base-content/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;