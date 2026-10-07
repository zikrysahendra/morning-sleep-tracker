import PixelImg from "../PixelImg.jsx";
// Grid pilihan bergambar untuk MoodSelector & MorningActivity
export default function Choices({ title, items, value, onChange }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="choices grid">
        {items.map((it) => (
          <button key={it.id} className={value === it.id ? "card selected" : "card"} onClick={() => onChange(it.id)}>
            <PixelImg src={it.img} fallback={it.emoji} alt="" className="icon" />
            {it.id}
          </button>
        ))}
      </div>
    </div>
  );
}
