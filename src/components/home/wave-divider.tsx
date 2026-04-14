export function WaveDivider({
  flip = false,
  fromColor = "var(--background)",
  toColor = "var(--primary)",
  className,
}: {
  flip?: boolean;
  fromColor?: string;
  toColor?: string;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        marginTop: "-1px",
        marginBottom: "-1px",
        lineHeight: 0,
        transform: flip ? "rotate(180deg)" : undefined,
      }}
    >
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "clamp(40px, 5vw, 80px)" }}
      >
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z"
          fill={toColor}
        />
        <path
          d="M0,50 C360,80 720,20 1080,50 C1260,65 1380,40 1440,50 L1440,80 L0,80 Z"
          fill={toColor}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
