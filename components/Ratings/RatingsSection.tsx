// components/RatingsSection.tsx

import React from 'react';
import RatingItem from './RatingItem';

const ratingsData = [
  { logoSrc: '/images/ratings/google_logo.webp', logoAlt: 'Google', ratingValue: '4.9' },
  { logoSrc: '/images/ratings/upwork-logo.svg.png', logoAlt: 'Upwork', ratingValue: '5.0' },
  { logoSrc: '/images/ratings/clutch-logo.png', logoAlt: 'Clutch', ratingValue: '5.0' },
  { logoSrc: '/images/ratings/ambition.png', logoAlt: 'Ambition', ratingValue: '5.0' },
];

const RatingsSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl">
        <div className="
          flex flex-col md:flex-row md:h-[240px] items-center justify-evenly
          divide-y divide-gray-200 md:divide-y-0 md:divide-x
        ">
          {ratingsData.map((rating, index) => (
            <RatingItem
              key={index}
              logoSrc={rating.logoSrc}
              logoAlt={rating.logoAlt}
              ratingValue={rating.ratingValue}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;