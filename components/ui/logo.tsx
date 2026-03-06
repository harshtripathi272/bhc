interface BHCLogoProps {
  className?: string
  /** Renders only the B+pulse icon, no wordmark */
  iconOnly?: boolean
  /** Inverted — white icon for dark backgrounds */
  inverted?: boolean
}

export default function BHCLogo({
  className,
  iconOnly = false,
  inverted = false,
}: BHCLogoProps) {
  const navy = inverted ? "#FFFFFF" : "#0B2B5E"
  const cyan = inverted ? "#7DD3FC" : "#38BDF8"

  if (iconOnly) {
    return (
      <svg
        viewBox="0 0 58 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Balaji Health Care"
      >
        {/* Upper lobe of B */}
        <path
          d="M9 4 H27 Q47 4 47 18 Q47 32 27 32 H9 Z"
          stroke={navy}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Lower lobe of B (slightly wider) */}
        <path
          d="M9 42 H27 Q51 42 51 56 Q51 70 27 70 H9 Z"
          stroke={navy}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Heartbeat / ECG pulse line */}
        <path
          d="M0 37 L13 37 L18 24 L23 50 L28 30 L32 37 L58 37"
          stroke={cyan}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 234 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Balaji Health Care"
    >
      {/* Upper lobe of B */}
      <path
        d="M9 4 H27 Q47 4 47 18 Q47 32 27 32 H9 Z"
        stroke={navy}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Lower lobe of B */}
      <path
        d="M9 42 H27 Q51 42 51 56 Q51 70 27 70 H9 Z"
        stroke={navy}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Heartbeat / ECG pulse line */}
      <path
        d="M0 37 L13 37 L18 24 L23 50 L28 30 L32 37 L62 37"
        stroke={cyan}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* BALAJI wordmark */}
      <text
        x="72"
        y="40"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="28"
        fill={navy}
        letterSpacing="2"
      >
        BALAJI
      </text>
      {/* HEALTH CARE sub-text */}
      <text
        x="75"
        y="58"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="400"
        fontSize="13"
        fill={navy}
        letterSpacing="4.5"
      >
        HEALTH CARE
      </text>
    </svg>
  )
}
