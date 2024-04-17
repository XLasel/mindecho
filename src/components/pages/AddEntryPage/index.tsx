import { useForm, SubmitHandler } from "react-hook-form";

import s from "./AddEntryPage.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/common/Button";
import FeatherIcon from "feather-icons-react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addNote } from "@/redux/noteSlice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

const schemaNote = yup.object().shape({
  title: yup.string(),
  situation: yup.string(),
  automaticThoughts: yup.string(),
  emotions: yup.array().of(yup.string()),
  physicalSensations: yup.string(),
  behavior: yup.string(),
  discomfortLevel: yup.number().min(1).max(10),
  cognitiveDistortions: yup.array().of(yup.string()),
  adaptiveResponse: yup.string(),
});

// const schema = yup.object({
//   firstName: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// }).required();

type IFormInput = yup.InferType<typeof schemaNote>;

// interface DairyEntry extends IFormInput {
//   id: string;
//   date: string;
// }

// enum GenderEnum {
//   female = "female",
//   male = "male",
//   other = "other",
// }

// interface IFormInput {
//   firstName: string;
//   gender: GenderEnum;
// }

// interface IFormInput {
//   situation: string;
//   automaticThoughts: string;
//   emotions: string[];
//   physicalSensations: string;
//   behavior: string;
//   discomfortLevel: number;
//   cognitiveDistortions: string[];
//   adaptiveResponse: string;
// }

export const AddEntryPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    setFocus,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      discomfortLevel: 1,
      title: "Новая запись",
    },
    resolver: yupResolver(schemaNote),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    dispatch(addNote(data));
  };
  console.log(getValues("discomfortLevel"));

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  return (
    <div>
      <Button
        onClick={() => navigate(-1)}
        variant="link"
        className="self-start gap-1"
      >
        <FeatherIcon icon="chevron-left" /> Назад к записям
      </Button>
      <input className={s.title} maxLength="22" {...register("title")} />
      {/* <h2>Новая запись</h2> */}
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <h4>Ситуация</h4>
          <textarea {...register("situation")} />
        </label>
        <p>
          Опишите обстоятельства, при которых возникла автоматическая мысль или
          появился дискомфорт.
        </p>
        <label>
          <h4>Автоматические мысли</h4>
          <textarea {...register("automaticThoughts")} />
        </label>
        <p>
          Иррациональные пугающие, обесценивающие и огорчающие мысли, которые
          проносятся у Вас в голове, когда Вы расстроены или встревожены.
        </p>
        <legend>
          <h4>Ваши эмоции</h4>
          <label>
            Грусть
            <input {...register("emotions")} type="checkbox" value="sad" />
          </label>
          <label>
            Радость
            <input {...register("emotions")} type="checkbox" value="joy" />
          </label>
        </legend>
        <p>
          Выберете эмоции которые наболее точно отражают то, что вы испытали
        </p>
        <label>
          <h4>Ощущения в теле</h4>
          <textarea {...register("physicalSensations")} />
        </label>
        <p>Телесные проявления</p>
        <label>
          <h4>Поведение</h4>
          <textarea {...register("behavior")} />
        </label>
        <p>Что делали, чтобы справиться с чувствами</p>
        <label>
          <h4>Уровень дискомфорта</h4>
          <input
            type="range"
            min="1"
            max="10"
            {...register("discomfortLevel")}
          />
          {watch("discomfortLevel")}
        </label>
        <p>
          Крайняя левая точка - не волнует, крайняя правая - очень сильно
          волнует
        </p>
        <legend>
          <h4>Когнитивные искажения</h4>
          <label>
            Грусть
            <input
              {...register("cognitiveDistortions")}
              type="checkbox"
              value="sad"
            />
          </label>
          <label>
            Радость
            <input
              {...register("cognitiveDistortions")}
              type="checkbox"
              value="joy"
            />
          </label>
        </legend>
        <p>Когнетивные искажение, которые вы наблюдаете вы своих мыслях</p>
        <label>
          <h4>Адаптивный ответ</h4>
          <textarea {...register("adaptiveResponse")} />
        </label>
        <p>Когнетивные искажение, которые вы наблюдаете вы своих мыслях</p>
        <Button onClick={() => reset()}>Сбросить</Button>
        <Button type="submit">Отправить</Button>
      </form>
    </div>
  );
};
