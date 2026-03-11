const TimerOverlay = () => {
  return (
    <div className="overlay-panel max-w-sm mx-auto text-center" style={{
      background: "linear-gradient(180deg, hsl(230 25% 10%), hsl(230 25% 6%))",
      boxShadow: "0 0 40px hsl(190 100% 50% / 0.08)",
    }}>
      <div className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-4">
        방송 시작까지
      </div>
      <div className="flex items-center justify-center gap-3">
        {[
          { value: "00", label: "시간" },
          { value: "14", label: "분" },
          { value: "37", label: "초" },
        ].map((unit, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-display font-black text-primary text-glow-cyan leading-none tracking-wider">
                {unit.value}
              </div>
              <span className="text-[9px] text-muted-foreground mt-1 tracking-wider">{unit.label}</span>
            </div>
            {i < 2 && (
              <span className="text-3xl font-display text-primary/40 -mt-4">:</span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 w-full h-1 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: "35%",
            background: "linear-gradient(90deg, hsl(190 100% 50%), hsl(280 80% 55%))",
          }}
        />
      </div>
      <div className="mt-3 text-[10px] text-muted-foreground">
        잠시 후 방송이 시작됩니다 🎮
      </div>
    </div>
  );
};

export default TimerOverlay;
