import { QUALITIES } from "../data/options.js";
import { formatDuration } from "../utils/sleep.js";

export default function SleepSummary({ data, duration, onRestart }) {
  const score = QUALITIES.find((q) => q.id === data.sleepQuality)?.score ?? 0;
  const rows = [
    ["Sleep Duration", formatDuration(duration)],
    ["Sleep Quality", data.sleepQuality],
    ["Morning Mood", data.mood],
    ["First Activity", data.morningActivity],
  ];
  return (
    <section className="panel summary" aria-label="Sleep summary">
      <h2>GOOD MORNING!</h2>
      <div className="summary-sun" aria-hidden="true">☀️</div>
      <p className="label">SLEEP SCORE</p>
      <p className="score">{score}</p>
      <dl>{rows.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}</dl>
      <button className="btn" onClick={onRestart}>START MY DAY</button>
    </section>
  );
}
