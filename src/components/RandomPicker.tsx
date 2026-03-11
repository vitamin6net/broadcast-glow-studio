const items = [
  "치킨 먹방", "노래 한곡", "댄스 타임", "팔굽혀펴기 10회",
  "개인기 공개", "구독자 감사", "즉흥 랩", "귀여운 포즈",
];

const colors = [
  "from-neon-magenta to-neon-purple",
  "from-neon-cyan to-neon-green",
  "from-neon-yellow to-neon-orange",
  "from-neon-purple to-neon-cyan",
  "from-neon-green to-neon-yellow",
  "from-neon-magenta to-neon-cyan",
  "from-neon-orange to-neon-magenta",
  "from-neon-cyan to-neon-purple",
];

const RandomPicker = () => {
  const size = 260;
  const center = size / 2;
  const radius = 110;

  return (
    <div className="overlay-panel glow-magenta max-w-sm mx-auto flex flex-col items-center">
      <h3 className="text-lg font-bold text-neon-magenta text-glow-magenta tracking-wide mb-4">
        🎰 뽑기판
      </h3>
      <div className="relative" style={{ width: size, height: size }}>
        {/* Wheel segments as colored arcs */}
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
          {items.map((_, i) => {
            const angle = (360 / items.length) * i - 90;
            const nextAngle = (360 / items.length) * (i + 1) - 90;
            const rad = (a: number) => (a * Math.PI) / 180;
            const x1 = center + radius * Math.cos(rad(angle));
            const y1 = center + radius * Math.sin(rad(angle));
            const x2 = center + radius * Math.cos(rad(nextAngle));
            const y2 = center + radius * Math.sin(rad(nextAngle));
            const segColors = [
              "hsl(330,90%,55%)", "hsl(190,100%,50%)", "hsl(45,100%,55%)", "hsl(280,80%,55%)",
              "hsl(150,90%,45%)", "hsl(25,100%,55%)", "hsl(330,90%,55%)", "hsl(190,100%,50%)",
            ];
            return (
              <path
                key={i}
                d={`M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`}
                fill={segColors[i % segColors.length]}
                opacity={0.7}
                stroke="hsl(230,25%,7%)"
                strokeWidth={2}
              />
            );
          })}
          {/* Item labels */}
          {items.map((item, i) => {
            const angle = (360 / items.length) * i + 360 / items.length / 2 - 90;
            const rad = (angle * Math.PI) / 180;
            const tx = center + radius * 0.65 * Math.cos(rad);
            const ty = center + radius * 0.65 * Math.sin(rad);
            return (
              <text
                key={i}
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
        {/* Center button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-card border-2 border-neon-magenta flex items-center justify-center glow-magenta">
            <span className="font-display text-sm font-bold text-neon-magenta">START</span>
          </div>
        </div>
        {/* Arrow indicator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
          <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[14px] border-l-transparent border-r-transparent border-t-neon-yellow" />
        </div>
        {/* Winner highlight */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-neon-yellow/20 border border-neon-yellow/40 text-neon-yellow text-xs font-bold">
          🏆 당첨: 노래 한곡!
        </div>
      </div>
    </div>
  );
};

export default RandomPicker;
