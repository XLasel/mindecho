import React from "react";

import { CognitiveBias } from "@/constants";

import { CognitiveBiasBadge } from "../CognitiveBiasBadge";

import s from "./CognitiveBiasBadgeList.module.scss";

interface CognitiveBiasBadgeListProps {
  biasesData: CognitiveBias[];
}

export const CognitiveBiasBadgeList: React.FC<CognitiveBiasBadgeListProps> = ({
  biasesData,
}) => {
  return (
    <div className={s.root}>
      {biasesData.map((bias) => (
        <CognitiveBiasBadge key={bias.id} {...bias} />
      ))}
    </div>
  );
};
