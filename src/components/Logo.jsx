import React from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * DisasterMS Lifebuoy Logo (SVG)
 * - Flat, minimal geometry with clean concentric structure
 * - Animations: slow rotation, pulse glow, segment activation, entrance, scroll focus
 *
 * Props:
 * - size: number (px)
 * - animated: boolean
 * - className: string
 */
function Logo({ size = 200, animated = true, className = '' }) {
  const idSuffix = React.useId().replace(/:/g, '')
  const glowId = `glow-${idSuffix}`

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      whileInView={{ filter: animated ? 'drop-shadow(0 0 12px rgba(211,77,56,0.25))' : 'none' }}
      viewport={{ once: true, amount: 0.6 }}
      className={className}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="DisasterMS lifebuoy logo"
        className={animated ? 'logo-rotate-slow' : ''}
      >
        <defs>
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.83  0 0 0 0 0.30  0 0 0 0 0.22  0 0 0 0.35 0" />
          </filter>
        </defs>

        {/* Background for watermark scenarios (kept transparent by default) */}
        <rect x="0" y="0" width="200" height="200" fill="none" />

        {/* Geometry parameters */}
        {(() => {
          const cx = 100
          const cy = 100
          const outerRadius = 88
          const innerWhiteRadius = 70
          const orangeRadius = 78 // stroke radius for orange ring
          const outerStroke = 4 // deep navy
          const innerStroke = 6 // white ring
          const orangeStroke = 20 // thickness of orange ring
          const navy = '#0C1130'
          const orange = '#D34D38'

          return (
            <g>
              {/* Outer dark-navy circle (thin stroke) */}
              <circle cx={cx} cy={cy} r={outerRadius} fill="none" stroke={navy} strokeWidth={outerStroke} />

              {/* Inner white ring (slightly thicker) */}
              <circle cx={cx} cy={cy} r={innerWhiteRadius} fill="none" stroke="#FFFFFF" strokeWidth={innerStroke} />

              {/* Main rescue-orange ring */}
              {/* Use stroke to keep center empty; add subtle pulse glow overlay when animated */}
              <g>
                <circle cx={cx} cy={cy} r={orangeRadius} fill="none" stroke={orange} strokeWidth={orangeStroke} strokeLinecap="butt" />
                {animated && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={orangeRadius}
                    fill="none"
                    stroke={orange}
                    strokeWidth={orangeStroke + 8}
                    strokeLinecap="round"
                    opacity="0.0"
                    className="logo-pulse"
                    filter={`url(#${glowId})`}
                  />
                )}
              </g>

              {/* Four deep-navy segments on top of orange ring at diagonal positions */}
              {/* Each with a smaller orange cushion on top */}
              {['seg1','seg2','seg3','seg4'].map((key, idx) => {
                // positions: 45, 135, 225, 315 degrees (diagonals)
                const angle = 45 + 90 * idx
                const rad = (angle * Math.PI) / 180
                const radius = orangeRadius
                const x = 100 + Math.cos(rad) * radius
                const y = 100 + Math.sin(rad) * radius
                const rotate = angle
                const segClass = animated ? `segment-activate delay-${idx}` : ''
                return (
                  <g key={key} transform={`translate(${x}, ${y}) rotate(${rotate})`}>
                    {/* Navy segment block */}
                    <rect x={-10} y={-20} width={20} height={40} rx={2} fill={navy} className={segClass} />
                    {/* Orange cushion centered on segment */}
                    <rect x={-7} y={-14} width={14} height={28} rx={1.5} fill={orange} />
                  </g>
                )
              })}

              {/* Hollow center remains transparent/white by page background */}
            </g>
          )
        })()}
      </svg>
    </motion.div>
  )
}

export default Logo
