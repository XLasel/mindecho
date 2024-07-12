import { useNavigate } from "react-router-dom";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  useFieldArray,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/common/Button";
import { TitleField } from "./TitleField";
import { EmotionField } from "./EmotionField";
import { CognitiveBiasField } from "./CognitiveBiasField";
import { useAppDispatch } from "@/redux/hook";
import { Note, addNote, updateNote } from "@/redux/noteSlice";
import s from "./DiaryForm.module.scss";
import { DynamicInputForm } from "./DynamicInputForm";
import { AdaptiveResponseField } from "./AdaptiveResponseField";
import { ResizableTextarea } from "../ResizableTextarea";
import { RangeInput } from "../RangeInput";
import { SpoilerText } from "../SpoilerText";
import { NoteActions } from "../NoteActions";
import { SectionForm } from "./SectionForm";
import { sectionData } from "@/constants";
import { useBackNavigation } from "@/hook/useBackNavigation";
import { type SectionsRefs } from "@/components/pages/DiaryPage/NoteEditorLayout";

const cognitiveDistortionSchema = z.object({
  everythingOrNothing: z.boolean(),
  overgeneralization: z.boolean(),
  negativeFilter: z.boolean(),
  discountingThePositive: z.boolean(),
  mindreading: z.boolean(),
  fortuneTelling: z.boolean(),
  catastrophizing: z.boolean(),
  magnificationAndMinimization: z.boolean(),
  emotionalReasoning: z.boolean(),
  shouldStatements: z.boolean(),
  labeling: z.boolean(),
  personalization: z.boolean(),
  retrospectiveDistortion: z.boolean(),
});

const emotionsSchema = z.record(z.boolean());

const automaticThoughtsSchema = z.array(
  z.object({
    thought: z.string(),
    response: z.string(),
  }),
);

const schemaNote = z.object({
  title: z.string().optional(),
  situation: z.string().optional(),
  automaticThoughts: automaticThoughtsSchema,
  emotions: emotionsSchema,
  physicalSensations: z.string(),
  behavior: z.string(),
  discomfortLevel: z.coerce.number().min(0).max(10),
  cognitiveDistortions: cognitiveDistortionSchema,
});

export type FormFieldsType = z.infer<typeof schemaNote>;

interface DiaryFormProps {
  noteToEdit?: Note | null;
  sectionsRefs: SectionsRefs;
}

export const DiaryForm = ({ noteToEdit, sectionsRefs }: DiaryFormProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isEditMode = !!noteToEdit;

  const methods = useForm<FormFieldsType>({
    defaultValues: {
      title: noteToEdit?.title || "",
      situation: noteToEdit?.situation || "",
      automaticThoughts: noteToEdit?.automaticThoughts || [
        { thought: "", response: "" },
      ],
      emotions: noteToEdit?.emotions || {},
      physicalSensations: noteToEdit?.physicalSensations || "",
      behavior: noteToEdit?.behavior || "",
      discomfortLevel: noteToEdit?.discomfortLevel || 1,
      cognitiveDistortions: noteToEdit?.cognitiveDistortions || {},
    },
    resolver: zodResolver(schemaNote),
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const thoughtsArray = useFieldArray<FormFieldsType, "automaticThoughts">({
    control,
    name: "automaticThoughts",
  });

  const onSubmit: SubmitHandler<FormFieldsType> = (data) => {
    if (!data.title) {
      data.title = "Новая запись";
    }
    if (isEditMode) {
      const currentData = { ...noteToEdit, ...data };
      dispatch(updateNote(currentData));
      navigate(`/diary/${noteToEdit?.id}`);
    } else {
      dispatch(addNote(data));
      navigate("/diary");
    }
  };

  return (
    <FormProvider {...methods}>
      <form className={s.root} onSubmit={handleSubmit(onSubmit)}>
        <header className={s.header}>
          {isEditMode && (
            <NoteActions
              date={noteToEdit?.date}
              id={noteToEdit?.id}
              isEditMode
              saveEdit={handleSubmit(onSubmit)}
              resetChanges={reset}
            />
          )}
          <TitleField {...register("title")} />
        </header>
        <SectionForm
          section={sectionData.situation}
          ref={sectionsRefs[sectionData.situation.idFormInput]}
          description={
            <p>
              Опишите обстоятельства, при которых возникла автоматическая мысль
              или появился дискомфорт
            </p>
          }
        >
          <ResizableTextarea
            id="situation"
            name="situation"
            placeholder="Опишите ситуацию"
          />
        </SectionForm>
        <hr />
        <SectionForm
          section={sectionData.emotions}
          ref={sectionsRefs[sectionData.emotions.idFormInput]}
          description={
            <p>
              Отметьте эмоции, которые наиболее точно отражают то, что вы
              почувствовали
            </p>
          }
        >
          <EmotionField name="emotions" control={control} />
        </SectionForm>
        <hr />
        <SectionForm
          section={sectionData.automaticThoughts}
          ref={sectionsRefs[sectionData.automaticThoughts.idFormInput]}
          description={
            <p>Какая мысль или мысли вертелись у вас в голове в тот момент?</p>
          }
        >
          <DynamicInputForm
            label="automaticThoughts"
            pattern={{ thought: "", response: "" }}
            fieldArray={thoughtsArray}
          />
        </SectionForm>
        <hr />
        <SectionForm
          section={sectionData.physicalSensations}
          ref={sectionsRefs[sectionData.physicalSensations.idFormInput]}
          description={
            <p>
              Что вы чувствовали в теле? Тошноту, головокружение, боль,
              слабость?
            </p>
          }
        >
          <ResizableTextarea
            name="physicalSensations"
            placeholder="Ваши ощущения"
          />
        </SectionForm>
        <hr />
        <SectionForm
          section={sectionData.behavior}
          ref={sectionsRefs[sectionData.behavior.idFormInput]}
          description={
            <p>Опишите, что вы сделали в этот момент или сразу после</p>
          }
        >
          <ResizableTextarea name="behavior" placeholder="Ваши действия" />
        </SectionForm>
        <hr />
        <SectionForm
          section={sectionData.discomfortLevel}
          ref={sectionsRefs[sectionData.discomfortLevel.idFormInput]}
          description={
            <p>
              С помощью ползунка оцените уровень неприятных ощущений от 0 до 10
            </p>
          }
        >
          <RangeInput id="discomfort-level" name="discomfortLevel" />
        </SectionForm>

        <hr />
        <SectionForm
          section={sectionData.cognitiveDistortions}
          ref={sectionsRefs[sectionData.cognitiveDistortions.idFormInput]}
          role="group"
          description={
            <p>Когнетивные искажение, которые вы наблюдаете в своих мыслях</p>
          }
        >
          <CognitiveBiasField name="cognitiveDistortions" control={control} />
        </SectionForm>

        <hr />
        <SectionForm
          section={sectionData.adaptiveResponse}
          ref={sectionsRefs[sectionData.adaptiveResponse.idFormInput]}
          role="group"
          description={
            <>
              <p>
                Дайте отпор автоматическим мыслям. Замените их на более
                рациональные и правдоподобные
              </p>
              <SpoilerText titleClosed="Подробнее">
                <>
                  <p>
                    Например, в ответ на мысль «У меня всегда всё не так», вы
                    можете сказать себе «Всё не может быть не так. У меня, по
                    крайней мере, иногда все получается хорошо»
                  </p>
                  <p>
                    Вот несколько вопросов, которые можно задать себе при
                    ведении дневника:
                  </p>
                  <ol>
                    <li>
                      Какие есть доказательства того, что какая-то мысль —
                      правда? А каковы доказательства, что это не так?
                    </li>
                    <li>Чем мешает мне эта мысль?</li>
                    <li>
                      Что самое страшное случится, если это правда? Как я это
                      самое страшное переживу?
                    </li>
                    <li>
                      Как я могу отреагировать на ситуацию таким образом, чтобы
                      достичь наилучшего результата для себя и других?
                    </li>
                  </ol>
                </>
              </SpoilerText>
            </>
          }
        >
          <AdaptiveResponseField fieldArray={thoughtsArray} />
        </SectionForm>
        <hr />
        <div className={s.buttons}>
          <Button type="submit" size="lg" className="text-xl h-12">
            {isEditMode ? "Сохранить" : "Отправить"}
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-xl h-12"
            onClick={() => reset()}
          >
            Сбросить
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
