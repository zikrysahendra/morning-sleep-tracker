import { calcDuration, formatDuration } from "../../utils/sleep.js";
export default function SleepDuration({ bedTime, wakeTime, onBed, onWake }) {
  const d = calcDuration(bedTime, wakeTime);
  return (
    <div>
      <h2>HOW LONG?</h2>
      <label className="field">BEDTIME<input type="time" value={bedTime} onChange={(e) => onBed(e.target.value)} /></label>
      <label className="field">WAKE UP<input type="time" value={wakeTime} onChange={(e) => onWake(e.target.value)} /></label>
      <p className="duration">YOU SLEPT<br /><strong>{formatDuration(d)}</strong></p>
    </div>
  );
}
