import PixelImg from "../PixelImg.jsx";
import { IMG } from "../../data/options.js";

// Gambar jam "berdering" ditaruh persis di atas jam asli di scene dan bergetar.
// Setelah dimatikan, gambar ini hilang dan jam asli di scene terlihat lagi.
// Posisi/ukuran: variabel --alarm-* di styles.css.
export default function Alarm({ alarmOff, onTurnOff }) {
  if (alarmOff) return null;
  return (
    <button className="alarm-clock" onClick={onTurnOff} aria-label="Turn off alarm">
      <PixelImg src={IMG.alarmRinging} fallback="⏰" alt="" />
    </button>
  );
}
