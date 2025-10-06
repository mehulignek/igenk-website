// components/PlatformCard.tsx

import React from 'react';
import Image from 'next/image';
import Card from '../Common/Card'; 


const PlusIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15.5" stroke="currentColor" fill='none'/>
      <path d="M16 10V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 16H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


interface PlatformCardProps {
  logoSrc: string;
  platformName: string;
  hoverDescription: React.ReactNode;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ logoSrc, platformName, hoverDescription }) => {
  return (
    <Card
      variant="filled"
      padding="lg"
      radius="none"
      className="group bg-white hover:bg-gray-100 h-[450px] flex flex-col justify-between"
    >
      {/* Centered content area (all this is now CHILDREN of the Card) */}
      <div className="relative flex-grow flex items-center justify-center">
        {/* Logo: Visible by default, fades out on hover */}
        <div className="transition-opacity duration-300 group-hover:opacity-0">
          <Image
            src={logoSrc}
            alt={`${platformName} logo`}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Description: Hidden by default, fades in on hover */}
        <div className="absolute inset-0 flex items-center justify-center p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="text-[16px] text-gray-800 leading-relaxed ">
            {hoverDescription}
          </div>
        </div>
      </div>

      {/* Bottom section */}
     <div className="flex justify-between items-center mt-auto pt-4">
        {/* REVERTED: The platform name now stays black on hover */}
        <span className="text-lg font-medium text-black">
          {platformName}
        </span>
        {/* CHANGED: New hover effect applied ONLY to the icon's wrapper */}
        <div className="flex items-center justify-center w-8 h-8 rounded-full text-black/40 group-hover:bg-black group-hover:text-white transition-colors duration-300">
          <PlusIcon />
        </div>
      </div>
    </Card>
  );
};

export default PlatformCard;