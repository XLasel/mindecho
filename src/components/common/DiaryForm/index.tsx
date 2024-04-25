import { useForm, SubmitHandler } from "react-hook-form";

import s from "./DiaryForm.module.scss";
import { Button } from "@/components/common/Button";
// import FeatherIcon from "feather-icons-react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Note, addNote, updateNote } from "@/redux/noteSlice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect, useState } from "react";
import { redirectDocument, useNavigate } from "react-router-dom";
import { TitleField } from "./TitleField";

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

type IFormInput = yup.InferType<typeof schemaNote>;

export const DiaryForm = ({ noteToEdit }: { noteToEdit: Note | null }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isEditMode = !!noteToEdit;
  console.log(isEditMode);
  console.log(noteToEdit);

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
      title: noteToEdit?.title || "Новая запись",
      situation: noteToEdit?.situation || "",
      automaticThoughts: noteToEdit?.automaticThoughts || "",
      emotions: noteToEdit?.emotions || [],
      physicalSensations: noteToEdit?.physicalSensations || "",
      behavior: noteToEdit?.behavior || "",
      discomfortLevel: noteToEdit?.discomfortLevel || 1,
      cognitiveDistortions: noteToEdit?.cognitiveDistortions || [],
      adaptiveResponse: noteToEdit?.adaptiveResponse || "",
    },
    resolver: yupResolver(schemaNote),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (isEditMode) {
      const currentData = { ...noteToEdit, ...data };
      dispatch(updateNote(currentData));
      navigate("/diary");
    } else {
      // Обработка добавления
      console.log(data);
      dispatch(addNote(data));
      navigate("/diary");
    }
    //   reset();
  };
  console.log(getValues("discomfortLevel"));

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  const [readOnly, setReadOnly] = useState(true);
  console.log(readOnly);

  const handleFocus = () => {
    setReadOnly(false);
  };

  const handleBlur = () => {
    setReadOnly(true);
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <TitleField {...register("title")} />
        {/* <input
          {...register("title2")}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={s.title}
          maxLength={22}
          autoComplete="off"
        /> */}
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
        <Button type="submit">{isEditMode ? "Сохранить" : "Отправить"}</Button>
      </form>
    </div>
  );
};
