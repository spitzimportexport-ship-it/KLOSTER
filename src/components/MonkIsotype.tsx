import React from 'react';

interface MonkIsotypeProps {
  className?: string;
  variant?: 'full' | 'isotype' | 'emblem';
  accentColor?: string;
}

export const MonkIsotype: React.FC<MonkIsotypeProps> = ({
  className = 'w-24 h-32',
  variant = 'isotype',
  accentColor = '#D1A85A'
}) => {
  return (
    <div className={`relative inline-flex flex-col items-center justify-center select-none ${className}`}>
      {/* SVG Vector Monastic Emblema & Monk */}
      <svg
        viewBox="0 0 240 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_4px_20px_rgba(209,168,90,0.25)]"
      >
        <defs>
          <linearGradient id="goldArchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7F4EA" />
            <stop offset="35%" stopColor="#D1A85A" />
            <stop offset="70%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#8A6828" />
          </linearGradient>

          <linearGradient id="darkBgGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1A1510" />
            <stop offset="100%" stopColor="#0C0C0C" />
          </linearGradient>

          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* TOP GOTHIC LATIN CROSS */}
        <g id="apex-cross">
          {/* Vertical beam */}
          <path
            d="M 120 4 L 123 18 L 128 20 L 123 22 L 120 42 L 117 22 L 112 20 L 117 18 Z"
            fill="url(#goldArchGrad)"
            stroke="#8A6828"
            strokeWidth="0.8"
          />
          {/* Horizontal beam */}
          <path
            d="M 102 21 L 116 18 L 118 13 L 120 18 L 138 21 L 124 24 L 122 29 L 120 24 Z"
            fill="url(#goldArchGrad)"
            stroke="#8A6828"
            strokeWidth="0.8"
          />
          <circle cx="120" cy="21" r="2" fill="#F7F4EA" />
        </g>

        {/* OUTER ROMAN ARCH WITH DOUBLE GOLD LINE */}
        <path
          d="M 36 300 L 36 130 C 36 68 73 40 120 40 C 167 40 204 68 204 130 L 204 300"
          stroke="url(#goldArchGrad)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M 42 300 L 42 132 C 42 74 76 48 120 48 C 164 48 198 74 198 132 L 198 300"
          stroke="rgba(209, 168, 90, 0.4)"
          strokeWidth="1.5"
        />

        {/* INNER SHADOW BACKDROP */}
        <path
          d="M 44 298 L 44 133 C 44 76 78 50 120 50 C 162 50 196 76 196 133 L 196 298 Z"
          fill="url(#darkBgGrad)"
        />

        {/* BACKGROUND ABBEY CHURCH ARCHITECTURE */}
        <g id="abbey-tower" opacity="0.85">
          {/* Tower body */}
          <path
            d="M 160 160 L 160 270 L 192 270 L 192 160 Z"
            fill="#14100C"
            stroke="url(#goldArchGrad)"
            strokeWidth="1.2"
          />
          {/* Gable / steeple */}
          <path
            d="M 156 160 L 176 112 L 196 160 Z"
            fill="#1A1510"
            stroke="url(#goldArchGrad)"
            strokeWidth="1.5"
          />
          {/* Arched lancet window */}
          <path
            d="M 172 145 C 172 138 176 134 176 134 C 176 134 180 138 180 145 L 180 165 L 172 165 Z"
            fill="url(#goldArchGrad)"
          />
          <path
            d="M 168 205 C 168 198 176 194 176 194 C 176 194 184 198 184 205 L 184 235 L 168 235 Z"
            stroke="url(#goldArchGrad)"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Transept side roof */}
          <path
            d="M 136 210 L 160 185 L 160 270 L 136 270 Z"
            fill="#110E0B"
            stroke="url(#goldArchGrad)"
            strokeWidth="1.2"
          />
        </g>

        {/* MONASTIC GOTHIC CROSS & EMBLEM CENTERPIECE (MONK REMOVED) */}
        <g id="monastic-cross-centerpiece">
          {/* Central Gothic Latin Cross */}
          <path
            d="M 120 90 L 124 165 L 132 170 L 124 175 L 120 260 L 116 175 L 108 170 L 116 165 Z"
            fill="url(#goldArchGrad)"
            stroke="#8A6828"
            strokeWidth="1.2"
          />
          <path
            d="M 75 170 L 115 166 L 120 156 L 125 166 L 165 170 L 125 174 L 120 184 L 115 174 Z"
            fill="url(#goldArchGrad)"
            stroke="#8A6828"
            strokeWidth="1.2"
          />
          <circle cx="120" cy="170" r="4.5" fill="#F7F4EA" stroke="#8A6828" strokeWidth="1" />
          
          {/* Inner Halo Ring */}
          <circle
            cx="120"
            cy="170"
            r="38"
            stroke="url(#goldArchGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            fill="none"
            opacity="0.85"
          />
          <circle
            cx="120"
            cy="170"
            r="44"
            stroke="rgba(209, 168, 90, 0.4)"
            strokeWidth="1"
            fill="none"
          />
        </g>

        {/* BOTTOM WHEAT EARS / ESPIGAS DE MALTA */}
        <g id="wheat-wreath" transform="translate(0, 10)">
          {/* Left wheat branch */}
          <path
            d="M 120 295 C 95 295 70 285 45 268"
            stroke="url(#goldArchGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Wheat grains left */}
          <path d="M 52 268 C 50 262 58 258 64 262 C 60 268 54 270 52 268 Z" fill="url(#goldArchGrad)" />
          <path d="M 68 274 C 66 268 74 264 80 268 C 76 274 70 276 68 274 Z" fill="url(#goldArchGrad)" />
          <path d="M 85 282 C 83 276 91 272 97 276 C 93 282 87 284 85 282 Z" fill="url(#goldArchGrad)" />
          <path d="M 103 290 C 101 284 109 280 115 284 C 111 290 105 292 103 290 Z" fill="url(#goldArchGrad)" />

          {/* Right wheat branch */}
          <path
            d="M 120 295 C 145 295 170 285 195 268"
            stroke="url(#goldArchGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Wheat grains right */}
          <path d="M 188 268 C 190 262 182 258 176 262 C 180 268 186 270 188 268 Z" fill="url(#goldArchGrad)" />
          <path d="M 172 274 C 174 268 166 264 160 268 C 164 274 170 276 172 274 Z" fill="url(#goldArchGrad)" />
          <path d="M 155 282 C 157 276 149 272 143 276 C 147 282 153 284 155 282 Z" fill="url(#goldArchGrad)" />
          <path d="M 137 290 C 139 284 131 280 125 284 C 129 290 135 292 137 290 Z" fill="url(#goldArchGrad)" />
        </g>
      </svg>
    </div>
  );
};

export const GothicCross: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-6',
  color = '#D1A85A'
}) => {
  return (
    <svg viewBox="0 0 32 36" fill="none" className={`inline-block ${className}`} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 16 2 L 18 10 L 22 11 L 18 13 L 16 32 L 14 13 L 10 11 L 14 10 Z"
        fill={color}
      />
      <path
        d="M 4 12 L 13 10 L 14 6 L 16 10 L 28 12 L 19 14 L 18 18 L 16 14 Z"
        fill={color}
      />
      <circle cx="16" cy="12" r="2" fill="#F7F4EA" />
    </svg>
  );
};
