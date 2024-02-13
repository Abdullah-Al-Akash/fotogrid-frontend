import {
  defaultOptions,
  gameOptions,
  genderOptions,
} from "../../constants/player.constants";
import Dropdown from "../ui/dropdown";

const PlayerTopbar = () => {
  return (
    <section className="flex gap-5">
      <Dropdown options={gameOptions} label="Select Game" />
      <Dropdown options={defaultOptions} label="Age Group 10" />
      <Dropdown options={genderOptions} label="Select Gender" />
      <Dropdown options={defaultOptions} label="Point Guard" />
      <Dropdown options={defaultOptions} label="KejurprovDKI 2023" />
    </section>
  );
};

export default PlayerTopbar;
