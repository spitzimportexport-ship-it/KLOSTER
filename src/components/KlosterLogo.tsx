import React from 'react';
import { GothicCross } from './MonkIsotype';

interface KlosterLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showDescriptor?: boolean;
  withIsotype?: boolean;
  isotypeOnly?: boolean;
}

export const KlosterLogo: React.FC<KlosterLogoProps> = ({
  className = '',
  size = 'md',
  showDescriptor = true,
  withIsotype = true,
  isotypeOnly = false
}) => {
  const crossSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  };

  if (isotypeOnly) {
    return <GothicCross className={`${crossSizes[size]} ${className}`} />;
  }

  const textSizes = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-7xl md:text-8xl'
  };

  const descriptorSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[11px] tracking-[0.35em]',
    lg: 'text-sm tracking-[0.45em]',
    xl: 'text-base tracking-[0.55em]'
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      {withIsotype && (
        <div className="mb-2.5 transition-transform duration-500 hover:scale-110">
          <GothicCross className={`${crossSizes[size]} text-[#D1A85A]`} />
        </div>
      )}

      {/* Gothic / Blackletter Brand Wordmark */}
      <div className="relative group">
        <h1
          className={`logo-text font-normal leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] tracking-tight inline-flex items-start ${textSizes[size]}`}
          style={{ textShadow: '0 2px 10px rgba(12,12,12,0.95), 0 0 1px #D1A85A' }}
        >
          kloster
          <span className="text-[0.28em] font-sans font-bold text-[#F7F4EA] ml-0.5 -mt-[0.08em] select-none leading-none drop-shadow-sm">
            ®
          </span>
        </h1>
        {/* Subtle gold underline shimmer */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#D1A85A] to-transparent group-hover:w-full transition-all duration-700" />
      </div>

      {/* Official Descriptor "CERVEZA ARTESANAL" between delicate golden spurs */}
      {showDescriptor && (
        <div className="mt-1 flex items-center justify-center gap-3 w-full max-w-[280px]">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D1A85A]/60 to-[#D1A85A]" />
          <span className={`font-cinzel uppercase font-semibold text-[#D1A85A] whitespace-nowrap ${descriptorSizes[size]}`}>
            CERVEZA ARTESANAL
          </span>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D1A85A]/60 to-[#D1A85A]" />
        </div>
      )}
    </div>
  );
};
