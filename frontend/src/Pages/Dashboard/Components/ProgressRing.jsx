
function ProgressRing({
  percentage,
  label,
  size = 160,
  radius = 68,
  gradientId,
  colors,
  className = "completion",
  backgroundClassName,
  fillClassName,
  textClassName,
}) {
  // Keep the percentage within the valid range.
  const safePercentage = Math.min(100, Math.max(0, percentage || 0));

  const circumference = 2 * Math.PI * radius;

  return (
    <div
      className={`${className}-ring`}
      style={{ "--progress": `${safePercentage}%` }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className={`${className}-chart`}
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            {colors.map((color, index) => (
              <stop
                key={color}
                offset={
                  colors.length === 1
                    ? "0%"
                    : `${(index / (colors.length - 1)) * 100}%`
                }
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>

        <circle
          className={backgroundClassName || `${className}-ring-bg`}
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />

        <circle
          className={fillClassName || `${className}-ring-fill`}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeDasharray={circumference}
          strokeDashoffset={
            circumference * (1 - safePercentage / 100)
          }
        />
      </svg>

      <div className={textClassName || `${className}-ring-text`}>
        <strong>{safePercentage}%</strong>
        {label && <span>{label}</span>}
      </div>
    </div>
  );
}

export default ProgressRing;
