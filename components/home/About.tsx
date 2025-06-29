'use client';

import { useEffect, useRef } from 'react';
import { User, Award, Coffee, Code } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Code, value: '50+', label: 'Projects Completed' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: User, value: '30+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="About Mahbub E Waduzzaman"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-content p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm opacity-90">Years</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-base-content mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience 
                  creating digital solutions that make a difference. I specialize in 
                  modern web technologies and love turning complex problems into 
                  simple, beautiful designs.
                </p>
                <p>
                  My journey in web development started with a curiosity about how 
                  things work on the internet. Today, I work with cutting-edge 
                  technologies like React, Next.js, Node.js, and cloud platforms 
                  to build scalable applications.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-base-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <div className="text-2xl font-bold text-base-content">{stat.value}</div>
                    <div className="text-sm text-base-content/60">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;