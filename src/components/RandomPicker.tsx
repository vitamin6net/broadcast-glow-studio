const items = [
  "치킨 먹방", "노래 한곡", "댄스 타임", "팔굽혀펴기 10회",
  "개인기 공개", "구독자 감사", "즉흥 랩", "귀여운 포즈",
];

const segColors = [
  "hsl(330,90%,55%)", "hsl(190,100%,50%)", "hsl(45,100%,55%)", "hsl(280,80%,55%)",
  "hsl(150,90%,45%)", "hsl(25,100%,55%)", "hsl(330,90%,55%)", "hsl(190,100%,50%)",
];

const RandomPicker = () => {
  const size = 280;
  const center = size / 2;
  const radius = 120;

  return (
    <div className="overlay-panel glow-magenta max-w-sm mx-auto flex flex-col items-center">
      <h3 className="text-lg font-bold text-neon-magenta text-glow-magenta tracking-wide mb-5">
        뽑기판
      </h3>
      <div className="relative animate-float" style={{ width: size, height: size }}>
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full animate-spin-slow" style={{ animationDuration: '20s' }}>
          {items.map((_, i) => {
            const angle = (360 / items.length) * i - 90;
            const nextAngle = (360 / items.length) * (i + 1) - 90;
            const rad = (a: number) => (a * Math.PI) / 180;
            const x1 = center + radius * Math.cos(rad(angle));
            const y1 = center + radius * Math.sin(rad(angle));
            const x2 = center + radius * Math.cos(rad(nextAngle));
            const y2 = center + radius * Math.sin(rad(nextAngle));
            return (
              <path
                key={i}
                d={`M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`}
                fill={segColors[i]}
                opacity={0.75}
                stroke="hsl(228,22%,15%)"
                strokeWidth={2}
              />
            );
          })}
          {items.map((item, i) => {
            const angle = (360 / items.length) * i + 360 / items.length / 2 - 90;
            const rad = (angle * Math.PI) / 180;
            const tx = center + radius * 0.65 * Math.cos(rad);
            const ty = center + radius * 0.65 * Math.sin(rad);
            return (
              <text
                key={`t-${i}`}
                x={tx}
                y={ty}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="9"
                fontWeight="bold"
                transform={`rotate(${angle + 90}, ${tx}, ${ty})`}
              >
                {item}
              </text>
            );
          })}
        </svg>
        {/* Center button - doesn't rotate */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-card border-2 border-neon-magenta flex items-center justify-center glow-magenta animate-pulse-glow">
            <span className="font-display text-sm font-bold text-neon-magenta">START</span>
          </div>
        </div>
        {/* Arrow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 pointer-events-none">
          <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[14px] border-l-transparent border-r-transparent border-t-neon-yellow" />
        </div>
      </div>
      <div className="mt-4 px-4 py-1.5 rounded-full bg-neon-yellow/15 border border-neon-yellow/30 text-neon-yellow text-xs font-bold animate-pulse-glow">
        당첨: 노래 한곡!
      </div>
    </div>
  );
};

export default RandomPicker;
