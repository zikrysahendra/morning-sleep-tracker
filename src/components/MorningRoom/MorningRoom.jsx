import PixelImg from "../PixelImg.jsx";
import Alarm from "./Alarm.jsx";
import { IMG } from "../../data/options.js";

// Visual dikontrol prop `alarmOff` (State 1 Dim -> State 2 Awake).
export default function MorningRoom({ alarmOff, onTurnOff }) {
  return (
    <div className="room-wrap">
      <section className={alarmOff ? "room awake" : "room"} aria-label="Morning bedroom">
        <div className="room-bg"><PixelImg src={IMG.bgDim} fallback="" /></div>
        <div className="room-light"><PixelImg src={IMG.bgLight} fallback="" /></div>
        <div className="room-dim" />
        <div className="glow glow-window" />
        <div className="glow glow-lamp" />
        <Alarm alarmOff={alarmOff} onTurnOff={onTurnOff} />
        {!alarmOff && <button className="btn btn-alarm" onClick={onTurnOff}>TURN OFF ALARM</button>}
        <p className="room-caption">{alarmOff ? "Good morning." : "Beep.. beep.. beep.."}</p>
      </section>
    </div>
  );
}
