const ASPECT_RATIO = 440 / 360;

export function Logo({
  height = 44,
  className,
}: {
  height?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 440 360"
      width={height * ASPECT_RATIO}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Daniel Adjei Mensah logo"
      className={className}
    >
      <g transform="translate(220, 108)" stroke="#0D0F12" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="-62" y="-56" width="124" height="84" rx="6" strokeWidth="6" />
        <path d="M -78 32 L -82 54 Q -82 60 -76 60 L 76 60 Q 82 60 82 54 L 78 32 Z" strokeWidth="5.5" fillOpacity="0" />
        <line x1="-14" y1="60" x2="14" y2="60" strokeWidth="5.5" />
      </g>
      <text
        x="220"
        y="236"
        textAnchor="middle"
        fill="#0D0F12"
        fontSize="88"
        fontWeight="700"
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        letterSpacing="-2"
      >
        DAM
      </text>
      <line x1="100" y1="264" x2="340" y2="264" stroke="#0D0F12" strokeWidth="1" opacity="0.2" />
      <text
        x="220"
        y="294"
        textAnchor="middle"
        fill="#0D0F12"
        fontSize="11.5"
        fontWeight="500"
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        letterSpacing="4"
        opacity="0.5"
      >
        CYBERSECURITY · FRONTEND
      </text>
    </svg>
  );
}
