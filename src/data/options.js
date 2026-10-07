// Semua pilihan + path gambar. Ubah path di sini kalau nama file berbeda.
const A = "/assets";
export const QUALITIES = [
  { id: "Terrible", emoji: "😫", score: 40 },
  { id: "Bad", emoji: "😞", score: 55 },
  { id: "Okay", emoji: "😐", score: 70 },
  { id: "Good", emoji: "🙂", score: 85 },
  { id: "Great", emoji: "😴", score: 95 },
];
export const MOODS = [
  { id: "Sleepy", emoji: "😴", img: `${A}/icons/sleepy.png` },
  { id: "Relaxed", emoji: "😌", img: `${A}/icons/relaxed.png` },
  { id: "Happy", emoji: "😊", img: `${A}/icons/happy.png` },
  { id: "Energetic", emoji: "⚡", img: `${A}/icons/energetic.png` },
];
export const ACTIVITIES = [
  { id: "Coffee", emoji: "☕", img: `${A}/icons/coffee.png` },
  { id: "Breakfast", emoji: "🍳", img: `${A}/icons/breakfast.png` },
  { id: "Shower", emoji: "🚿", img: `${A}/icons/shower.png` },
  { id: "Exercise", emoji: "🏃", img: `${A}/icons/exercise.png` },
  { id: "Study", emoji: "📚", img: `${A}/icons/study.png` },
  { id: "Work", emoji: "💻", img: `${A}/icons/work.png` },
];
// Hanya 2 gambar scene yang dipakai (objek & dekorasi sudah ada di dalam scene).
export const IMG = {
  bgDim: `${A}/background/bedroom-morning.png`,
  bgLight: `${A}/background/bedroom-morning-light.png`,
  alarmRinging: `${A}/objects/alarm-ringing.png`,
};
