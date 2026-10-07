import { useState } from "react";
import SleepQuality from "./SleepQuality.jsx";
import SleepDuration from "./SleepDuration.jsx";
import MoodSelector from "./MoodSelector.jsx";
import MorningActivity from "./MorningActivity.jsx";
import { calcDuration } from "../../utils/sleep.js";

export default function MorningCheckIn({ data, set, onFinish }) {
  const [step, setStep] = useState(0); // 0 quality, 1 duration, 2 mood, 3 activity
  const [error, setError] = useState("");
  const last = step === 3;

  function validate() {
    if (step === 0 && !data.sleepQuality) return "Please tell us how you slept.";
    if (step === 1) {
      if (!data.bedTime || !data.wakeTime) return "Please complete your sleep time.";
      if (calcDuration(data.bedTime, data.wakeTime) === 0) return "Bedtime and wake-up time can't be the same.";
    }
    if (step === 2 && !data.mood) return "Please pick how you feel.";
    if (step === 3 && !data.morningActivity) return "Please pick your first move.";
    return "";
  }
  function next() {
    const e = validate();
    setError(e);
    if (e) return;
    last ? onFinish() : setStep(step + 1);
  }
  const pick = (fn) => (v) => { fn(v); setError(""); };

  return (
    <section className="panel" aria-label="Morning check-in">
      <p className="progress">STEP {step + 1} / 4</p>
      <div key={step} className="step">
        {step === 0 && <SleepQuality value={data.sleepQuality} onChange={pick(set.sleepQuality)} />}
        {step === 1 && <SleepDuration bedTime={data.bedTime} wakeTime={data.wakeTime} onBed={set.bedTime} onWake={set.wakeTime} />}
        {step === 2 && <MoodSelector value={data.mood} onChange={pick(set.mood)} />}
        {step === 3 && <MorningActivity value={data.morningActivity} onChange={pick(set.morningActivity)} />}
      </div>
      {error && <p className="error" role="alert">{error}</p>}
      <div className="nav">
        {step > 0 && <button className="btn ghost" onClick={() => { setError(""); setStep(step - 1); }}>BACK</button>}
        <button className="btn" onClick={next}>{last ? "SEE MY SLEEP SUMMARY" : "CONTINUE"}</button>
      </div>
    </section>
  );
}
