// components/WhatWeBring.tsx

import React from 'react';
import WhatWeBringCard from './WhatWeBringCard'; 


// Dummy data for the six cards
const cardData = [
  {
    cardNumber: '01',
    title: 'Enterprise Websites',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.'
  },
  {
    cardNumber: '02',
    title: 'Employee Experience',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.'
  },
  {
    cardNumber: '03',
    title: 'Digital Commerce',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.'
  },
  {
    cardNumber: '04',
    title: 'Another Service',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.'
  },
  {
    cardNumber: '05',
    title: 'Creative Solutions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.'
  },
  {
    cardNumber: '06',
    title: 'Data Insights',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.'
  }
];

const WhatWeBring = () => {
  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      {/* Container for the header, matching your site's padding */}
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] mb-16">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          <h2 className="text-5xl font-bold leading-tight">
            What We Bring To Your 
            <br />
            Digital Experience
          </h2>
          <p className="text-gray-300 text-lg max-w-xl pt-2">
            We help businesses craft a clear and actionable digital roadmap that aligns with both short-term objectives and long-term vision.
          </p>
        </div>
      </div>

      {/* Horizontally scrolling container for the cards */}
    <div className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">        {cardData.map((card) => (
          <WhatWeBringCard
            key={card.cardNumber}
            cardNumber={card.cardNumber}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeBring;