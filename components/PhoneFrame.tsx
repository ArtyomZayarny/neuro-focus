"use client";
export default function PhoneFrame({
  label,
  colorFrom = "#6366f1",
  colorTo = "#38bdf8",
}: {
  label: string;
  colorFrom?: string;
  colorTo?: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[18rem]">
      <div
        className="relative aspect-[9/19] rounded-[2rem] p-3"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 24px 60px -24px rgba(0,0,0,0.6)",
        }}
      >
        <div
          className="h-full w-full rounded-[1.5rem]"
          style={{
            background: `linear-gradient(160deg, ${colorFrom}33, ${colorTo}26)`,
          }}
        >
          <div className="flex h-full flex-col justify-between p-4">
            <div className="flex items-center justify-between text-xs text-adaptive-tertiary">
              <span>Now Playing</span>
              <span>Hi‑Fi</span>
            </div>
            <div
              className="mx-auto mb-6 h-40 w-full max-w-[12rem] overflow-hidden rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div className="flex h-full items-end justify-between gap-[1px] p-3">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-full audio-bar"
                    style={{
                      background: "rgba(255,255,255,0.3)",
                      height: `${20 + Math.abs(Math.sin(i / 2)) * 50}px`,
                      animationDelay: `${i * 30}ms`,
                      animationDuration: `${1.5 + (i % 4) * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold">{label} • Session</div>
              <div className="text-xs text-adaptive-quaternary">45:00 • Adaptive</div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                <button
                  className="rounded-lg px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  ◄◄
                </button>
                <button
                  className="rounded-lg px-3 py-2 font-semibold"
                  style={{
                    background: `linear-gradient(45deg, ${colorFrom}, ${colorTo})`,
                  }}
                >
                  ▶
                </button>
                <button
                  className="rounded-lg px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  ►►
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
