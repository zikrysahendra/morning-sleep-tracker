import Choices from "./Choices.jsx";
import { ACTIVITIES } from "../../data/options.js";
export default function MorningActivity({ value, onChange }) {
  return <Choices title="WHAT'S YOUR FIRST MOVE?" items={ACTIVITIES} value={value} onChange={onChange} />;
}
