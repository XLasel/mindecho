import { CognitiveBiasBadge } from "../CognitiveBiasBadge";
import s from "./CognitiveBiasList.module.scss";
import { biases } from "@/constants";

export const CognitiveBiasList = ({ cognitiveDistortions }) => {
  const filteredBiases = biases.filter((bias) => {
    return Object.entries(cognitiveDistortions).some(([key, value]) => {
      if (value) {
        return bias.id === key;
      }
      return false;
    });
  });

  return (
    <div className={s.root}>
      {filteredBiases.map((bias) => (
        <CognitiveBiasBadge key={bias.id} {...bias} />
      ))}
    </div>
  );
};
