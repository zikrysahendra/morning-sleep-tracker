import { useState } from "react";
// Tampilkan gambar; kalau file belum ada, tampilkan fallback (emoji/teks).
export default function PixelImg({ src, alt = "", fallback = "", className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className={`fallback ${className}`} role="img" aria-label={alt}>{fallback}</span>;
  return <img className={`pixel ${className}`} src={src} alt={alt} onError={() => setFailed(true)} />;
}
