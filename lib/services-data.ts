import { Service } from './types';

export const services: Service[] = [
  {
    id: 'soil-analysis',
    title: 'Soil Analysis & Testing',
    description:
      'Comprehensive soil composition, fertility, and contamination testing using advanced laboratory techniques',
    icon: '🔬',
    details:
      'We perform detailed soil analysis including pH levels, nutrient content, organic matter, heavy metals, and microbial activity. Our lab tests help identify soil health and recommend appropriate amendments for optimal crop growth.',
  },
  {
    id: 'environmental-impact',
    title: 'Environmental Impact Assessment',
    description:
      'Comprehensive environmental studies and mitigation strategies for agricultural and development projects',
    icon: '🌍',
    details:
      'Our team conducts full environmental impact assessments (EIA) to evaluate potential effects of projects on the environment. We provide detailed reports with recommendations for sustainable practices and regulatory compliance.',
  },
  {
    id: 'land-management',
    title: 'Land Management Consulting',
    description:
      'Strategic land use planning and sustainable management practices for agricultural properties',
    icon: '🏞️',
    details:
      'We help landowners and farmers develop comprehensive management plans that balance productivity with environmental stewardship. Services include crop rotation planning, soil conservation, and biodiversity enhancement.',
  },
  {
    id: 'crop-advisory',
    title: 'Crop Selection & Advisory',
    description:
      'Personalized crop selection and cultivation recommendations based on local conditions and market demand',
    icon: '🌾',
    details:
      'Our agronomists assess your land conditions, climate, and resources to recommend the most suitable crops. We provide guidance on planting techniques, irrigation, pest management, and harvesting strategies.',
  },
  {
    id: 'water-management',
    title: 'Water Management Solutions',
    description:
      'Irrigation planning, water quality testing, and conservation strategies for efficient water use',
    icon: '💧',
    details:
      'We design irrigation systems optimized for your specific crops and soil conditions. Our water quality testing ensures safe irrigation and our conservation strategies help reduce water waste while maintaining yields.',
  },
  {
    id: 'pest-management',
    title: 'Integrated Pest Management',
    description:
      'Sustainable pest control strategies that minimize pesticide use and protect beneficial organisms',
    icon: '🦗',
    details:
      'We develop customized pest management programs using biological controls, cultural practices, and targeted treatments. Regular monitoring helps prevent infestations while maintaining ecological balance.',
  },
  {
    id: 'organic-certification',
    title: 'Organic Certification Support',
    description:
      'Expert guidance for transitioning to organic farming and maintaining organic certification',
    icon: '🥬',
    details:
      'Our specialists provide step-by-step guidance for organic certification, including soil preparation, approved practices, record-keeping, and audit preparation. We ensure compliance with all certification standards.',
  },
  {
    id: 'field-monitoring',
    title: 'Field Monitoring & Diagnostics',
    description:
      'Regular field visits for crop monitoring, disease diagnosis, and real-time recommendations',
    icon: '📊',
    details:
      'We conduct regular field inspections to monitor crop health, identify diseases and nutrient deficiencies early, and provide timely recommendations. Our diagnostic reports help optimize yield and prevent crop losses.',
  },
  {
    id: 'climate-adaptation',
    title: 'Climate Adaptation Planning',
    description:
      'Strategies to adapt your farm operations to changing climate conditions and weather patterns',
    icon: '🌤️',
    details:
      'We assess climate risks to your operation and develop adaptation strategies including crop variety changes, revised planting schedules, and drought/flood preparedness. Our plans help ensure long-term farm viability.',
  },
  {
    id: 'training-workshops',
    title: 'Training & Workshops',
    description:
      'Educational programs and workshops on sustainable agriculture, best practices, and new techniques',
    icon: '📚',
    details:
      'We offer customized training sessions for farmers, farm staff, and agricultural professionals covering topics like soil health, modern farming techniques, sustainability practices, and regulatory requirements.',
  },
];

export const serviceCategories = [
  {
    id: 'soil-water',
    name: 'Soil & Water',
    services: ['soil-analysis', 'water-management'],
  },
  {
    id: 'crop-production',
    name: 'Crop Production',
    services: ['crop-advisory', 'pest-management', 'field-monitoring'],
  },
  {
    id: 'sustainability',
    name: 'Sustainability',
    services: [
      'environmental-impact',
      'land-management',
      'organic-certification',
      'climate-adaptation',
    ],
  },
  {
    id: 'professional',
    name: 'Professional Development',
    services: ['training-workshops'],
  },
];
