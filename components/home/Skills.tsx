'use client';

import { useEffect, useRef } from 'react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 75 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 82 },
        { name: 'GraphQL', level: 78 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Figma', level: 85 },
        { name: 'Linux', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-base-content mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-base-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-base-content mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-base-content">{skill.name}</span>
                      <span className="text-sm text-base-content/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-base-100 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-base-content mb-8">
            Certifications & Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'AWS Certified Developer',
              'React Professional',
              'Node.js Certified',
              'Google Cloud Platform',
              'MongoDB University'
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;