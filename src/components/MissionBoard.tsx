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

const MissionBoard = () => {
  return (
    <div className="overlay-panel glow-purple max-w-md mx-auto" style={{
      background: "linear-gradient(145deg, hsl(280 40% 12%), hsl(230 30% 8%))",
    }}>
      <h3 className="text-lg font-bold text-neon-purple text-glow-magenta tracking-wide mb-4 text-center">
        🎯 미션판
      </h3>
      <div className="grid grid-cols-4 gap-1.5">
        {missions.map((m, i) => (
          <div
            key={i}
            className={`relative rounded-md p-2 text-center border transition-all ${
              m.done
                ? "bg-neon-green/10 border-neon-green/30"
                : "bg-muted/20 border-border/50 hover:border-neon-purple/40"
            }`}
          >
            <div className={`text-[11px] font-medium leading-tight ${m.done ? "line-through text-muted-foreground" : "text-foreground"}`}>
              {m.text}
            </div>
            <div className={`text-[9px] mt-1 ${m.done ? "text-neon-green/60" : "text-neon-yellow/70"}`}>
              {m.amount}
            </div>
            {m.done && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-neon-green text-[10px] font-bold bg-card/80 px-1.5 py-0.5 rounded">완료</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-between text-[10px] text-muted-foreground">
        <span>완료: {missions.filter(m => m.done).length}/{missions.length}</span>
        <span>총 후원금: {missions.filter(m => m.done).reduce((_, m) => _, 0).toLocaleString()}원 달성</span>
      </div>
    </div>
  );
};

export default MissionBoard;
