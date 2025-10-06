import React from 'react';
import Image from 'next/image';

interface CapabilityCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="flex flex-col p-4">
      {/* Icon and Title */}
      <div className="mb-2 flex items-center space-x-3">
        <Image src={iconSrc} alt={`${title} icon`} width={36} height={36} className="object-contain" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      {/* "Progress Bar" */}
      <video
        src="/images/our-capabilities/progressbar-animation.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="mb-4 h-1 w-full rounded-full object-cover"
      >
        {/* Providing a fallback for browsers that don't support the video tag */}
        Your browser does not support the video tag.
      </video>
      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-300">{description}</p>
    </div>
  )
};

export default CapabilityCard;