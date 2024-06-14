import { EmotionChip } from "@/components/common/EmotionChip";
import s from "./ThoughtTable.module.scss";
import { CognitiveBiasList } from "@/components/common/CognitiveBiasList";

export const ThoughtTable = ({ data }) => {
  return (
    <div className={s.root}>
      <table className={s.table}>
        <tbody>
          <tr>
            <th>Автоматические мысли</th>
            <td>
              <ol>
                {data.automaticThoughts.map((el, index) => (
                  <li>{el.thought}</li>
                ))}
              </ol>
            </td>
          </tr>
          <tr>
            <th>Эмоции</th>
            <td>
              <div className={s.emotionGroup}>
                {Object.keys(data.emotionField).map((groupName) =>
                  data.emotionField[groupName].emojis.map(
                    ({ emoji, label, name: emojiName }) => (
                      <EmotionChip
                        key={emojiName}
                        emoji={emoji}
                        label={label}
                        selected={true}
                      />
                    )
                  )
                )}
              </div>
            </td>
          </tr>
          <tr>
            <th>Физические ощущения</th>
            <td>
              <p>{data.physicalSensations}</p>
            </td>
          </tr>
          <tr>
            <th>Поведения</th>
            <td>
              <p>{data.behavior}</p>
            </td>
          </tr>
          <tr>
            <th>Уровень дискомфорта</th>
            <td>
              <p>{data.discomfortLevel} / 10</p>
            </td>
          </tr>
          <tr>
            <th>Когнитивные искажения</th>
            <td>
              <CognitiveBiasList
                cognitiveDistortions={data.cognitiveDistortions}
              />
            </td>
          </tr>

          {/* <td>{item.thought}</td> */}
          {/* <td>{item.response}</td> */}
        </tbody>
      </table>
    </div>
  );
};
