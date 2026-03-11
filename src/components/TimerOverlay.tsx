const TimerOverlay = () => {
  return (
    <div className="overlay-panel max-w-sm mx-auto text-center">
      <div className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-5">
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
              <div
                className="text-6xl font-display font-black text-primary leading-none tracking-wider animate-count-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {unit.value}
              </div>
              <span className="text-[9px] text-muted-foreground mt-2 tracking-wider">{unit.label}</span>
            </div>
            {i < 2 && (
              <span className="text-3xl font-display text-primary/30 -mt-5 animate-pulse-glow">:</span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 w-full h-1.5 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full animate-shimmer"
          style={{
            width: "35%",
            background: "linear-gradient(90deg, hsl(190 100% 40%), hsl(280 80% 50%), hsl(190 100% 40%))",
            backgroundSize: "200% 100%",
          }}
        />
      </div>
      <div className="mt-3 text-[11px] text-muted-foreground">
        잠시 후 방송이 시작됩니다
      </div>
    </div>
  );
};

export default TimerOverlay;
