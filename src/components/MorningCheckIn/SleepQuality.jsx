import { QUALITIES } from "../../data/options.js";
export default function SleepQuality({ value, onChange }) {
  return (
    <div>
      <h2>HOW DID YOU SLEEP?</h2>
      <div className="choices row">
        {QUALITIES.map((q) => (
          <button key={q.id} className={value === q.id ? "card selected" : "card"} onClick={() => onChange(q.id)}>
            <span className="emoji">{q.emoji}</span>{q.id}
          </button>
        ))}
      </div>
    </div>
  );
}
