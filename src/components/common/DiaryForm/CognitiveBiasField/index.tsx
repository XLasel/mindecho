import React from "react";
import { Controller } from "react-hook-form";

import { CognitiveBiasCard } from "@/components/common/CognitiveBiasCard";

import { splitArrayInHalf } from "@/lib/utils";
import { biases } from "@/constants";

import s from "./CognitiveBiasField.module.scss";

interface CognitiveBiasFieldProps {
  name: string;
  control: any;
}

const BiasColumn: React.FC<{
  biases: typeof biases;
  name: string;
  control: any;
}> = ({ biases, name, control }) => (
  <>
    {biases.map((bias) => (
      <Controller
        key={bias.id}
        name={`${name}.${bias.id}`}
        control={control}
        defaultValue={false}
        render={({ field: { onChange, value } }) => (
          <CognitiveBiasCard
            bias={bias}
            onChange={() => onChange(!value)}
            checked={value}
          />
        )}
      />
    ))}
  </>
);

export const CognitiveBiasField: React.FC<CognitiveBiasFieldProps> = ({
  name,
  control,
}) => {
  const { leftColumn, rightColumn } = splitArrayInHalf(biases);

  return (
    <div className={s.root}>
      <div className={s.column}>
        <BiasColumn biases={leftColumn} name={name} control={control} />
      </div>
      <div className={s.column}>
        <BiasColumn biases={rightColumn} name={name} control={control} />
      </div>
    </div>
  );
};
