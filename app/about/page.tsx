'use client';

import MainLayout from '@/components/MainLayout';
import Hero from '@/components/Hero';
import Section from '@/components/Section';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Dr. Elena Ivanova',
      title: 'Lead Environmental Consultant',
      specialties: ['Environmental Impact Assessment', 'OVOS Procedures', 'Regulatory Compliance'],
      icon: '👩‍🔬',
    },
    {
      name: 'Prof. Ivan Petrov',
      title: 'Agricultural Specialist',
      specialties: ['Soil Analysis', 'Crop Advisory', 'Land Management'],
      icon: '👨‍🌾',
    },
    {
      name: 'Eng. Maria Georgieva',
      title: 'Environmental Engineer',
      specialties: ['Water Management', 'Pollution Control', 'Sustainability'],
      icon: '👩‍💼',
    },
    {
      name: 'Dr. Nikolay Dimitrov',
      title: 'Project Manager',
      specialties: ['Permitting', 'Project Coordination', 'Stakeholder Management'],
      icon: '👨‍💼',
    },
  ];

  const values = [
    {
      title: 'Expertise',
      description: 'Decades of combined experience in environmental consulting and agriculture',
      icon: '🎓',
    },
    {
      title: 'Integrity',
      description: 'Honest, transparent communication and adherence to all regulations',
      icon: '🤝',
    },
    {
      title: 'Sustainability',
      description: 'Committed to balancing business needs with environmental protection',
      icon: '🌱',
    },
    {
      title: 'Excellence',
      description: 'High-quality deliverables and meticulous attention to detail',
      icon: '⭐',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero
        title="About Agronom"
        subtitle="Our Story"
        description="Dedicated to providing exceptional environmental consulting and agricultural services with integrity and expertise"
        backgroundImage="linear-gradient(135deg, rgba(45, 106, 79, 0.8), rgba(64, 145, 108, 0.8))"
      />

      {/* Mission Statement */}
      <Section
        title="Our Mission"
        subtitle="Why We Do What We Do"
        bgColor="light"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Agronom, we believe that agricultural success and environmental responsibility go hand in hand. Our mission is to provide expert guidance and innovative solutions that help our clients achieve their goals while protecting the natural resources we all depend on.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We partner with farmers, developers, and organizations to navigate complex environmental regulations, optimize land management, and implement sustainable practices that create long-term value.
          </p>
        </div>
      </Section>

      {/* Company Values */}
      <Section
        title="Our Values"
        subtitle="What Guides Our Work"
        bgColor="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-xl shadow-md border-t-4 border-agro-primary hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-agro-dark mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section
        title="Our Team"
        subtitle="Meet the Experts Behind Our Success"
        bgColor="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl mb-4">{member.icon}</div>
              <h3 className="text-2xl font-bold text-agro-dark mb-1">{member.name}</h3>
              <p className="text-agro-primary font-semibold mb-4">{member.title}</p>
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                  Specialties:
                </h4>
                <ul className="space-y-1">
                  {member.specialties.map((specialty, sidx) => (
                    <li key={sidx} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-agro-primary">•</span>
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Track Record */}
      <Section
        title="Our Track Record"
        subtitle="Years of Proven Excellence"
        bgColor="white"
        className="text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { stat: '25+', label: 'Years in Business' },
            { stat: '500+', label: 'Completed Projects' },
            { stat: '50+', label: 'Active Clients' },
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-xl bg-gradient-agro text-white">
              <div className="text-5xl font-bold mb-2">{item.stat}</div>
              <p className="text-lg font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Working With Us */}
      <Section
        title="Why Work With Us"
        subtitle="What Sets Us Apart"
        bgColor="light"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Local Expertise, National Reach',
              description:
                'We understand regional variations while operating effectively across the entire country. Our on-the-ground knowledge helps us navigate local challenges and opportunities.',
            },
            {
              title: 'Integrated Approach',
              description:
                'We combine environmental compliance with agricultural optimization. Our holistic perspective ensures sustainable solutions that work for your bottom line.',
            },
            {
              title: 'Regulatory Navigation',
              description:
                'Complex environmental regulations are our specialty. We keep you compliant while minimizing bureaucratic delays and additional costs.',
            },
            {
              title: 'Client Partnership',
              description:
                'You are not just another project. We build long-term partnerships, learning your operation and providing customized guidance over time.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 border-l-4 border-agro-primary bg-white rounded-lg">
              <h3 className="text-xl font-bold text-agro-dark mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="gradient" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-gray-100 mb-8 text-lg">
            Let's discuss how our expertise can help you achieve your agricultural and environmental goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-agro-primary hover:bg-gray-100 font-bold rounded-lg transition-colors">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 bg-agro-accent text-agro-dark hover:bg-white font-bold rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}
