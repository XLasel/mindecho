import { Link, useParams } from "react-router-dom";
import { cloneDeep } from "lodash";

import s from "./DiaryEntry.module.scss";
import { useAppSelector } from "@/redux/hook";
import { selectAllNotes } from "@/redux/selectors";
import { NoteWrapper } from "@/components/common/NoteWrapper";
import { formatDateForUI } from "@/lib/dateUtils";
import { DateUI } from "@/components/common/DateUI";
import { biases, emotionGroups } from "@/constants";
import { EmotionChip } from "@/components/common/EmotionChip";
import { CognitiveBiasCard } from "@/components/common/CognitiveBiasCard";
import { ThoughtTable } from "./ThoughtTable";
import { SpoilerText } from "@/components/common/SpoilerText";
import {
  cn,
  filteredEmotionsGroup,
  getKeysByValue,
  splitArrayInHalf,
} from "@/lib/utils";
import { PostCheckoutForm } from "./PostCheckoutForm";
import clsx from "clsx";
import { NoteActions } from "@/components/common/NoteActions";
import { buttonVariants } from "@/components/common/Button";
import FeatherIcon from "feather-icons-react";

export const DiaryEntry = () => {
  const { id } = useParams();
  const notes = useAppSelector(selectAllNotes);
  const note = notes.find((note) => note.id === id);
  // const filteredEmotions = Object.entries(note.emotions).filter(([key, value]) => value)
  // const currentEmotion = Object.keys(emotionGroups).filter((groupName) => emotionGroups[groupName].emojis.filter(({ name: emojiName, ...rest }) => filteredEmotions.some((item) => item[0] === emojiName)))

  // console.log(filteredEmotions);
  // console.log(Object.keys(emotionGroups));

  // const filteredEmotionsGroup = (referenceEmotion, emotionData) => {
  //   const currentEmotion = cloneDeep(emotionData);
  //   const actualKeyRefEmotions = getKeysByValue(referenceEmotion);
  //   const groupNames = Object.keys(emotionData);

  //   groupNames.forEach((group) => {
  //     // console.log(currentEmotion[group].emojis);

  //     const filtredGroup = emotionData[group].emojis.filter(
  //       ({ name: emojiName }) => actualKeyRefEmotions.includes(emojiName)
  //     );
  //     // console.log(filtredGroup);
  //     filtredGroup.length
  //       ? (currentEmotion[group].emojis = filtredGroup)
  //       : delete currentEmotion[group];
  //   });
  //   return currentEmotion;
  // };

  const filteredBiases = biases.filter((bias) =>
    getKeysByValue(note.cognitiveDistortions).includes(bias.id)
  );

  const { leftColumn, rightColumn } = splitArrayInHalf(filteredBiases);

  // console.log(
  //   biases.filter((bias) =>
  //     getKeysByValue(note.cognitiveDistortions).includes(bias.id)
  //   )
  // );

  const emotionField = filteredEmotionsGroup(note?.emotions, emotionGroups);
  console.log(filteredEmotionsGroup(note?.emotions, emotionGroups));
  console.log(filteredBiases);

  // console.log(currentEmotion);
  return (
    <NoteWrapper>
      <div className={s.root}>
        <header className={s.header}>
          <NoteActions date={note?.date} id={id} />
          {/* <DateUI date={note.date} /> */}
          <h1 className={s.title}>{note?.title}</h1>
        </header>

        <section className={s.section}>
          <h4>Ситуация</h4>
          <div className={s.content}>
            {note?.situation !== "" ? (
              <p>{note?.situation}</p>
            ) : (
              <Link
                to={`/diary/${id}/edit/#discomfort-level`}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "italic text-foreground/80 hover:text-secondary"
                )}
              >
                {/* Дополнить */}
                ...
                <FeatherIcon icon="edit-2" size={18} />
              </Link>
            )}
          </div>
        </section>
        <section className={s.section}>
          <h4>Адаптивные мысли</h4>
          <div className={s.content}>
            <ol className={s.textList}>
              {note?.automaticThoughts &&
              note.automaticThoughts.some((el) => el.response !== "") ? (
                note.automaticThoughts.map((el, index) => (
                  <li>{el.response}</li>
                ))
              ) : (
                <li>
                  <Link
                    to={`/diary/${id}/edit/#discomfort-level`}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "self-start hover:text-secondary"
                    )}
                  >
                    ...
                    <FeatherIcon icon="edit-2" size={18} />
                  </Link>
                </li>
              )}
            </ol>
          </div>
        </section>
        <section className={s.section}>
          <h4>С чем мы работали</h4>
          <SpoilerText statusOpen={true}>
            {/* <h5>Как вы проживали</h5> */}
            <ThoughtTable data={{ ...note, emotionField }} />
            {/* <h5>Когнитивные искажения</h5> */}
            {/* <div className={s.bias}>
              <div className={s.biasColumn}>
                {leftColumn.map((bias) => (
                  <CognitiveBiasCard key={bias.id} bias={bias} checked={true} />
                ))}
              </div>
              <div className={s.biasColumn}>
                {rightColumn.map((bias) => (
                  <CognitiveBiasCard key={bias.id} bias={bias} checked={true} />
                ))}
              </div>
            </div> */}
          </SpoilerText>
        </section>

        <section className={clsx(s.section, s.form)}>
          <h4>Инсайт</h4>
          <p>
            Теперь, взглянув на ситуацию и мысли свежим взглядом - есть ли у вас
            что-то, что вы хотите сказать себе?
          </p>
          <PostCheckoutForm note={note} />
        </section>
      </div>
    </NoteWrapper>
  );
};

export default DiaryEntry;
