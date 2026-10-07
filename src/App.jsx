import { useState } from "react";
import MorningRoom from "./components/MorningRoom/MorningRoom.jsx";
import MorningCheckIn from "./components/MorningCheckIn/MorningCheckIn.jsx";
import SleepSummary from "./components/SleepSummary.jsx";
import { calcDuration } from "./utils/sleep.js";

export default function App() {
  const [alarmOff, setAlarmOff] = useState(false);
  const [done, setDone] = useState(false);
  const [sleepQuality, setSleepQuality] = useState("");
  const [bedTime, setBedTime] = useState("");
  const [wakeTime, setWakeTime] = useState("");
  const [mood, setMood] = useState("");
  const [morningActivity, setMorningActivity] = useState("");

  const sleepDuration = calcDuration(bedTime, wakeTime); // derived state
  const data = { sleepQuality, bedTime, wakeTime, mood, morningActivity };
  const set = { sleepQuality: setSleepQuality, bedTime: setBedTime, wakeTime: setWakeTime, mood: setMood, morningActivity: setMorningActivity };

  function restart() {
    setAlarmOff(false); setDone(false);
    setSleepQuality(""); setBedTime(""); setWakeTime(""); setMood(""); setMorningActivity("");
  }

  return (
    <main className="app">
      <h1 className="title">MORNING SLEEP TRACKER</h1>
      <div className="layout">
        <MorningRoom alarmOff={alarmOff} onTurnOff={() => setAlarmOff(true)} />
        {alarmOff && !done && <MorningCheckIn data={data} set={set} onFinish={() => setDone(true)} />}
        {done && <SleepSummary data={data} duration={sleepDuration} onRestart={restart} />}
        {!alarmOff && <p className="hint">Start your morning!</p>}
      </div>
    </main>
  );
}
