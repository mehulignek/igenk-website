// components/SuccessStories.tsx

import React from 'react';
import SuccessStoryCard, { Story } from './SuccessStoryCard';
import motion from 'framer-motion';

// CHANGED: Consolidated Provided Services data
const commonProvidedServices = [
  { name: 'Java', iconSrc: '/images/success-stories/java.png' }, { name: 'Bootstrap', iconSrc: '/images/success-stories/bootstrap.png' }, { name: 'Kenesis', iconSrc: '/images/success-stories/javascript.png' }, { name: 'My Sql', iconSrc: '/images/success-stories/mysql.png' }, { name: 'React Js', iconSrc: '/images/success-stories/react.png' },
  { name: 'Liferay DXP 7.4', iconSrc: '/images/success-stories/liferay.png' }, { name: 'ElasticSearch', iconSrc: '/images/success-stories/elasticSearch.png' }, { name: 'Jest', iconSrc: '/images/success-stories/jest.png' }, { name: 'HashRouter', iconSrc: '/images/success-stories/hashRouter.png' },
  { name: 'TypeScript', iconSrc: '/images/success-stories/typescript.png' }
];

// Dummy Data - Updated to use commonProvidedServices
const stories: Story[] = [
  {
    imageSrc: '/images/success-stories/Music-license.png',
    tag: 'Corporate',
    title: 'Music License Management Portal : Onboarding & Data Integrity',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.',
    services: commonProvidedServices // Use the common services array
  },
  {
    imageSrc: '/images/success-stories/Music-license.png',
    tag: 'Enterprise',
    title: 'Global CRM Platform for a Leading Tech Company',
    description: 'A second story about a different project, highlighting other skills and outcomes to showcase a range of capabilities.',
    services: commonProvidedServices // Use the common services array
  },
  {
    imageSrc: '/images/success-stories/Music-license.png',
    tag: 'E-Commerce',
    title: 'Scalable Online Marketplace for a Retail Giant', // Example for third story
    description: 'The third story focuses on e-commerce, discussing challenges like payment gateway integration and inventory management.',
    services: commonProvidedServices // Use the common services array
  }
];

// Animation variants for the container of the cards
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Time delay between each card animation
    },
  },
};

// Animation variants for each individual card
const cardVariants = {
  hidden: { opacity: 0, y: 150, scale: 0.8 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};


const SuccessStories: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto w-full px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-4 text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
          </p>
        </div>

        {/* Cards Container - uses space-y to add margin between cards */}
        <div className="space-y-8">
          {stories.map((story, index) => (
            <SuccessStoryCard key={index} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;