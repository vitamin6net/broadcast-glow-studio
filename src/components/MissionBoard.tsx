const missions = [
  { text: "노래 한 곡", amount: "10,000원", done: true },
  { text: "댄스 커버", amount: "15,000원", done: false },
  { text: "개인기 공개", amount: "5,000원", done: true },
  { text: "즉흥 랩", amount: "8,000원", done: false },
  { text: "귀여운 포즈", amount: "3,000원", done: true },
  { text: "팔굽혀펴기 20회", amount: "20,000원", done: false },
  { text: "방언 도전", amount: "7,000원", done: false },
  { text: "ASMR 1분", amount: "12,000원", done: true },
  { text: "추억 이야기", amount: "5,000원", done: false },
  { text: "먹방 도전", amount: "25,000원", done: false },
  { text: "속삭임 노래", amount: "10,000원", done: false },
  { text: "고음 도전", amount: "15,000원", done: true },
  { text: "그림 그리기", amount: "8,000원", done: false },
  { text: "모창 도전", amount: "10,000원", done: false },
  { text: "윗몸일으키기", amount: "12,000원", done: false },
  { text: "칭찬 릴레이", amount: "3,000원", done: true },
];

const completedCount = missions.filter(m => m.done).length;

const MissionBoard = () => {
  return (
    <div className="overlay-panel glow-purple max-w-md mx-auto" style={{
      background: "linear-gradient(145deg, hsl(280 30% 18%), hsl(228 25% 14%))",
    }}>
      <h3 className="text-lg font-bold text-neon-purple text-glow-magenta tracking-wide mb-4 text-center">
        미션판
      </h3>
      <div className="grid grid-cols-4 gap-2">
        {missions.map((m, i) => (
          <div
            key={i}
            className={`relative rounded-lg p-2.5 text-center border transition-all duration-300 animate-slide-up hover:scale-105 ${
              m.done
                ? "bg-neon-green/10 border-neon-green/30"
                : "bg-muted/20 border-border/50 hover:border-neon-purple/50"
            }`}
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className={`text-[11px] font-medium leading-tight ${m.done ? "line-through text-muted-foreground" : "text-foreground"}`}>
              {m.text}
            </div>
            <div className={`text-[9px] mt-1 ${m.done ? "text-neon-green/60" : "text-neon-yellow/70"}`}>
              {m.amount}
            </div>
            {m.done && (
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-card/60">
                <span className="text-neon-green text-[10px] font-bold px-2 py-0.5 rounded bg-card/90 border border-neon-green/30">완료</span>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex justify-between text-[10px] text-muted-foreground mb-1.5">
          <span>달성률</span>
          <span>{completedCount}/{missions.length}</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full animate-shimmer"
            style={{
              width: `${(completedCount / missions.length) * 100}%`,
              background: "linear-gradient(90deg, hsl(150 90% 45%), hsl(190 100% 50%), hsl(150 90% 45%))",
              backgroundSize: "200% 100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MissionBoard;
