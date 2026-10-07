import Choices from "./Choices.jsx";
import { MOODS } from "../../data/options.js";
export default function MoodSelector({ value, onChange }) {
  return <Choices title="HOW DO YOU FEEL THIS MORNING?" items={MOODS} value={value} onChange={onChange} />;
}
