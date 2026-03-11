import SongRequestBoard from "@/components/SongRequestBoard";
import RandomPicker from "@/components/RandomPicker";
import MissionBoard from "@/components/MissionBoard";
import Scoreboard from "@/components/Scoreboard";
import TimerOverlay from "@/components/TimerOverlay";

const overlays = [
  { label: "신청곡 목록판", desc: "실시간 신청곡 관리 오버레이", component: <SongRequestBoard /> },
  { label: "뽑기판 / 룰렛", desc: "시청자 참여형 랜덤 뽑기", component: <RandomPicker /> },
  { label: "미션판", desc: "후원 미션 보드 오버레이", component: <MissionBoard /> },
  { label: "점수판", desc: "팀 대결 스코어보드", component: <Scoreboard /> },
  { label: "타이머 / 카운트다운", desc: "방송 대기 화면 타이머", component: <TimerOverlay /> },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 py-10">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <div className="text-[10px] font-display tracking-[0.4em] text-primary/60 uppercase mb-3">
            Streaming Overlay
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-2">
            방송 오버레이 <span className="text-primary text-glow-cyan">포트폴리오</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            방송에 활력을 더하는 커스텀 오버레이 제작 서비스
          </p>
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 py-14 space-y-20">
        {overlays.map((item, i) => (
          <section key={i} className="space-y-5">
            {item.component}
            <div className="text-center">
              <h2 className="text-sm font-bold text-foreground">{item.label}</h2>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t border-border/50 py-8 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 방송 오버레이 제작 · 문의: overlay@example.com
        </p>
      </footer>
    </div>
  );
};

export default Index;
