// components/FlexiblePlatforms.tsx

import React from 'react';
import PlatformCard from './PlatformCard';

const platformsData = [
  {
    logoSrc: '/images/liferay.png',
    platformName: 'Liferay',
    hoverDescription: (
      <p>
        Liferay is a <strong>Digital Experience Platform (DXP)</strong> that enables organizations to build and manage <strong>digital experiences across various channels</strong>. It provides tools for creating and managing websites, portals, intranets, and more. Liferay is known for its <strong>flexibility, scalability, and open-source</strong> nature.
      </p>
    ),
  },
  {
    logoSrc: '/images/aem.png',
    platformName: 'AEM',
    hoverDescription: (
      <p>
        AEM, or <strong>Adobe Experience Manager</strong>, is a comprehensive content management system (CMS) that allows businesses to manage and deliver <strong>digital experiences across various channels like websites, mobile apps, and forms</strong>. It's a Java-based platform known for its flexibility, scalability, and ability to integrate with other Adobe products like Adobe Marketing Cloud.
      </p>
    ),
  }
];

const FlexiblePlatforms = () => {
  return (
    <section className="bg-[#F9FAF7] text-black py-20 lg:py-24">
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Title and Description */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Flexible Platforms.
            <span className="block">Scalable Experiences.</span>
          </h2>
          <p className="mt-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
          </p>
        </div>

        {/* Right Column: Platform Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {platformsData.map((platform) => (
            <PlatformCard
              key={platform.platformName}
              logoSrc={platform.logoSrc}
              platformName={platform.platformName}
              hoverDescription={platform.hoverDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlexiblePlatforms;