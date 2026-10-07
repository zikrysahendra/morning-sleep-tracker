const toMin = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };

// Menangani lewat tengah malam: 23:30 -> 06:30 = 420 menit (7h)
export function calcDuration(bed, wake) {
  if (!bed || !wake) return null;
  return (toMin(wake) - toMin(bed) + 1440) % 1440;
}
export function formatDuration(min) {
  if (min === null || min === undefined) return "--";
  const h = Math.floor(min / 60), m = min % 60;
  return m === 0 ? `${h}h` : `${h}h ${m}m`;
}
