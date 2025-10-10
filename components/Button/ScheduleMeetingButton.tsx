// components/ScheduleMeetingButton.tsx

import React from 'react';
import Image from 'next/image';
import { cn } from '../../lib/utils'; // Assuming your utility path

interface ScheduleMeetingButtonProps {
  className?: string;
}

const ScheduleMeetingButton: React.FC<ScheduleMeetingButtonProps> = ({ className }) => {
  return (
    <button
     className={cn(
        "relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden",
        // CORRECTED: Removed `border border-white` and added the gradient background
        "bg-gradient-to-br from-[#00979E] to-blue-600",
        "group hover:scale-105 transition-transform duration-200",
        className
      )}
    >
      <span className="relative flex items-center gap-3 px-8 py-3 bg-black rounded-full text-white text-lg font-medium">
        Schedule Meeting
       <Image
          src="/images/calendar.png"
          alt="Calendar icon"
          width={20}
          height={20}
        />
      </span>
    </button>
  );
};

export default ScheduleMeetingButton;