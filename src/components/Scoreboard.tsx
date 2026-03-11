const Scoreboard = () => {
  return (
    <div className="overlay-panel max-w-md mx-auto" style={{
      background: "linear-gradient(180deg, hsl(228 25% 20%), hsl(228 22% 14%))",
      boxShadow: "0 0 30px hsl(190 100% 50% / 0.12), 0 0 60px hsl(330 90% 55% / 0.06)",
    }}>
      <div className="text-center mb-4">
        <span className="text-[10px] font-display tracking-[0.3em] text-muted-foreground uppercase">
          Battle Royale
        </span>
        <div className="flex items-center justify-center gap-2 mt-2">
          {[1, 2, 3, 4, 5].map((r) => (
            <div
              key={r}
              className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-display font-bold transition-all ${
                r <= 3 ? "bg-primary/20 text-primary" : r === 4 ? "bg-neon-yellow/20 text-neon-yellow border border-neon-yellow/40 animate-pulse-glow" : "bg-muted/30 text-muted-foreground"
              }`}
            >
              {r}
            </div>
          ))}
          <span className="text-[9px] text-muted-foreground ml-1 font-display tracking-wider">ROUND</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 text-center">
          <div className="text-[10px] font-display tracking-wider text-primary mb-1.5">TEAM A</div>
          <div className="text-base font-bold text-foreground mb-2">드래곤즈</div>
          <div className="text-6xl font-display font-black text-primary text-glow-cyan leading-none animate-count-pulse">
            7
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="w-11 h-11 rounded-full border-2 border-neon-magenta/50 flex items-center justify-center glow-magenta animate-pulse-glow">
            <span className="font-display text-xs font-bold text-neon-magenta">VS</span>
          </div>
        </div>

        <div className="flex-1 text-center">
          <div className="text-[10px] font-display tracking-wider text-neon-magenta mb-1.5">TEAM B</div>
          <div className="text-base font-bold text-foreground mb-2">피닉스</div>
          <div className="text-6xl font-display font-black text-neon-magenta text-glow-magenta leading-none animate-count-pulse" style={{ animationDelay: '1s' }}>
            5
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <div className="px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-[10px] font-bold tracking-wider animate-pulse-glow">
          LIVE
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
