'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import { services, serviceCategories } from '@/lib/services-data';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredServices = activeCategory
    ? services.filter((service) => {
        const category = serviceCategories.find((cat) => cat.id === activeCategory);
        return category?.services.includes(service.id);
      })
    : services;

  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Comprehensive Solutions"
        description="Discover our full range of agricultural and environmental consulting services designed to support your success"
        backgroundImage="linear-gradient(135deg, rgba(45, 106, 79, 0.8), rgba(64, 145, 108, 0.8))"
      />

      {/* Services Overview */}
      <Section
        title="Why Our Services"
        subtitle="Expert Solutions Tailored to Your Needs"
        bgColor="light"
        className="text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: '50+', label: 'Years of Experience' },
            { number: '500+', label: 'Projects Completed' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold text-agro-primary mb-2">
                {stat.number}
              </div>
              <p className="text-gray-700 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services by Category */}
      <Section
        title="Our Services"
        subtitle="Comprehensive Offerings Across All Agricultural Sectors"
        bgColor="white"
      >
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeCategory === null
                ? 'bg-agro-primary text-white shadow-lg'
                : 'bg-gray-200 text-agro-dark hover:bg-gray-300'
            }`}
          >
            All Services
          </button>
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-agro-primary text-white shadow-lg'
                  : 'bg-gray-200 text-agro-dark hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} {...service} variant="compact" />
          ))}
        </div>
      </Section>

      {/* Detailed Services */}
      <Section
        title="Service Details"
        subtitle="In-Depth Look at Our Offerings"
        bgColor="light"
      >
        <div className="space-y-8">
          {services.slice(0, 5).map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              {/* Alternate layout for visual interest */}
              {idx % 2 === 0 ? (
                <>
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-agro-dark mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    {service.details && (
                      <p className="text-gray-600 leading-relaxed">
                        {service.details}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-7 bg-gradient-agro rounded-xl p-8 text-white">
                    <h4 className="text-xl font-bold mb-4">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {[
                        'Expert analysis and recommendations',
                        'Improved crop yields and quality',
                        'Reduced input costs',
                        'Environmental compliance',
                        'Sustainable practices',
                      ].map((benefit, bidx) => (
                        <li key={bidx} className="flex items-start gap-3">
                          <span className="text-agro-accent">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:col-span-7 bg-gradient-to-br from-agro-accent/20 to-agro-light/20 rounded-xl p-8">
                    <h4 className="text-xl font-bold text-agro-dark mb-4">
                      Why Choose This Service:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      {[
                        'Experienced professionals on staff',
                        'State-of-the-art equipment',
                        'Proven track record',
                        'Personalized approach',
                        'Follow-up support included',
                      ].map((reason, ridx) => (
                        <li key={ridx} className="flex items-start gap-3">
                          <span className="text-agro-primary font-bold">•</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-5">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-agro-dark mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    {service.details && (
                      <p className="text-gray-600 leading-relaxed">
                        {service.details}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Service Process */}
      <Section title="Our Service Process" bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-agro-primary to-agro-light -translate-x-1/2" />

            {/* Steps */}
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Initial Consultation',
                  description:
                    'We meet with you to understand your needs, challenges, and goals',
                },
                {
                  step: '2',
                  title: 'Assessment & Analysis',
                  description:
                    'Our team conducts thorough assessment and collects necessary data',
                },
                {
                  step: '3',
                  title: 'Planning & Strategy',
                  description:
                    'We develop a customized plan tailored to your specific situation',
                },
                {
                  step: '4',
                  title: 'Implementation & Support',
                  description:
                    'We guide you through implementation and provide ongoing support',
                },
              ].map((process, idx) => (
                <div
                  key={idx}
                  className={`flex gap-6 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="hidden md:flex flex-col items-center flex-1">
                    <div className="w-12 h-12 bg-agro-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                      {process.step}
                    </div>
                  </div>
                  <div
                    className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} md:pr-6 md:pl-0`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-agro-primary md:border-l-0 md:border-r-4">
                      <h4 className="text-xl font-bold text-agro-dark mb-2">
                        {process.title}
                      </h4>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        bgColor="gradient"
        className="text-center"
        title="Ready to Get Started?"
      >
        <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
          Contact us today to discuss which services are right for your agricultural
          or environmental needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-agro-primary hover:bg-gray-100 font-bold rounded-lg transition-colors">
            Schedule Consultation
          </button>
          <button className="px-8 py-4 bg-agro-accent text-agro-dark hover:bg-white font-bold rounded-lg transition-colors">
            Request Quote
          </button>
        </div>
      </Section>
    </MainLayout>
  );
}
