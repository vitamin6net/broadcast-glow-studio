const Scoreboard = () => {
  return (
    <div className="overlay-panel max-w-md mx-auto" style={{
      background: "linear-gradient(180deg, hsl(230 30% 12%), hsl(230 25% 7%))",
      boxShadow: "0 0 30px hsl(190 100% 50% / 0.1), 0 0 60px hsl(330 90% 55% / 0.05)",
    }}>
      <div className="text-center mb-3">
        <span className="text-[10px] font-display tracking-[0.3em] text-muted-foreground uppercase">
          Battle Royale
        </span>
        <div className="flex items-center justify-center gap-2 mt-1">
          {[1, 2, 3, 4, 5].map((r) => (
            <div
              key={r}
              className={`w-5 h-5 rounded-sm flex items-center justify-center text-[9px] font-display font-bold ${
                r <= 3 ? "bg-primary/20 text-primary" : r === 4 ? "bg-neon-yellow/20 text-neon-yellow border border-neon-yellow/40" : "bg-muted/30 text-muted-foreground"
              }`}
            >
              {r}
            </div>
          ))}
          <span className="text-[9px] text-muted-foreground ml-1">ROUND</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Team A */}
        <div className="flex-1 text-center">
          <div className="text-xs font-display tracking-wider text-primary mb-2">TEAM A</div>
          <div className="text-lg font-bold text-foreground mb-1">드래곤즈</div>
          <div className="text-5xl font-display font-black text-primary text-glow-cyan leading-none">
            7
          </div>
        </div>

        {/* VS */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-full border-2 border-neon-magenta/50 flex items-center justify-center glow-magenta">
            <span className="font-display text-xs font-bold text-neon-magenta">VS</span>
          </div>
        </div>

        {/* Team B */}
        <div className="flex-1 text-center">
          <div className="text-xs font-display tracking-wider text-neon-magenta mb-2">TEAM B</div>
          <div className="text-lg font-bold text-foreground mb-1">피닉스</div>
          <div className="text-5xl font-display font-black text-neon-magenta text-glow-magenta leading-none">
            5
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-[10px] font-bold tracking-wider">
          ● LIVE
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
