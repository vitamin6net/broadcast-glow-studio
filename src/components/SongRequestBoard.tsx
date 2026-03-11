const songs = [
  { num: 1, title: "Ditto", artist: "NewJeans", tag: "댄스", tagColor: "neon-magenta" },
  { num: 2, title: "사건의 지평선", artist: "윤하", tag: "발라드", tagColor: "neon-cyan" },
  { num: 3, title: "Supernova", artist: "aespa", tag: "댄스", tagColor: "neon-magenta" },
  { num: 4, title: "좋은 날", artist: "IU", tag: "발라드", tagColor: "neon-cyan" },
  { num: 5, title: "GODS", artist: "NewJeans", tag: "댄스", tagColor: "neon-magenta" },
  { num: 6, title: "그때 그 순간 그대로", artist: "WSG워너비", tag: "발라드", tagColor: "neon-cyan" },
  { num: 7, title: "Dynamite", artist: "BTS", tag: "댄스", tagColor: "neon-magenta" },
  { num: 8, title: "스트레칭 타임", artist: "—", tag: "스트레칭", tagColor: "neon-green" },
  { num: 9, title: "밤양갱", artist: "비비", tag: "발라드", tagColor: "neon-cyan" },
  { num: 10, title: "OMG", artist: "NewJeans", tag: "댄스", tagColor: "neon-magenta" },
  { num: 11, title: "Love Dive", artist: "IVE", tag: "댄스", tagColor: "neon-magenta" },
  { num: 12, title: "잠깐 휴식!", artist: "—", tag: "스트레칭", tagColor: "neon-green" },
];

const tagColorMap: Record<string, string> = {
  "neon-magenta": "bg-neon-magenta/15 text-neon-magenta border-neon-magenta/25",
  "neon-cyan": "bg-neon-cyan/15 text-neon-cyan border-neon-cyan/25",
  "neon-green": "bg-neon-green/15 text-neon-green border-neon-green/25",
};

const SongRequestBoard = () => {
  return (
    <div className="overlay-panel glow-cyan max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-primary tracking-wide">
          신청곡 목록
        </h3>
        <span className="text-xs text-muted-foreground">{songs.length}곡 대기중</span>
      </div>
      <div className="space-y-1.5 max-h-[360px] overflow-hidden relative">
        {songs.map((song, i) => (
          <div
            key={song.num}
            className="flex items-center gap-3 px-3 py-2 rounded-md bg-muted/40 hover:bg-muted/70 transition-all duration-300 hover:translate-x-1 animate-slide-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="text-xs font-display text-primary/50 w-5 text-right">
              {String(song.num).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium text-foreground truncate block">
                {song.title}
              </span>
              <span className="text-xs text-muted-foreground">{song.artist}</span>
            </div>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full border ${tagColorMap[song.tagColor]}`}
            >
              {song.tag}
            </span>
          </div>
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default SongRequestBoard;
