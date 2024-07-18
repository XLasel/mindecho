import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { formatDateForUI } from "@/lib/dateUtils";
import { prepareTableData } from "@/lib/utils";
import { Note } from "@/redux/noteSlice";

import InterRegular from "/fonts/Inter-Regular.ttf";

Font.register({
  family: "Inter",
  src: InterRegular,
});

const isVowel = (char: string): boolean =>
  "аеёиоуыэюяАЕЁИОУЫЭЮЯ".includes(char);
const isLetter = (char: string): boolean => /[a-zA-Zа-яА-Я]/.test(char);

const findHyphenationPoint = (word: string): number => {
  const specialChars = ",.!?:;-";
  if (!word.split("").some(isLetter)) {
    return word.length;
  }
  for (let i = word.length - 1; i > 0; i--) {
    if (
      isVowel(word[i]) &&
      !specialChars.includes(word[i + 1]) &&
      !specialChars.includes(word[i - 1])
    ) {
      return i + 1;
    }
  }
  return Math.floor(word.length / 2);
};

Font.registerHyphenationCallback((word: string) => {
  const hyphenationPoint = findHyphenationPoint(word);
  const parts =
    word.length === 1
      ? [word]
      : [word.substr(0, hyphenationPoint), word.substr(hyphenationPoint)];

  return parts;
});

const styles = StyleSheet.create({
  page: {
    padding: 10,
    fontFamily: "Inter",
  },
  title: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: "left",
  },
  table: {
    display: "flex",
    flexDirection: "column",
  },
  cell: {
    fontSize: 11,
    padding: "5px",
    borderRight: "1px solid black",
    width: `${100 / 8}%`,
  },
  header: {
    fontSize: 11,
    padding: "5px",
    borderRight: "1px solid black",
    borderTop: "1px solid black",
    width: `${100 / 8}%`,
    backgroundColor: "#3D3B8E",
    color: "#fff",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
  },
});

interface PDFTemplateNotesProps {
  notes: Note[];
  startDate: string | Date;
  endDate: string | Date;
}

export const PDFTemplateNotes: React.FC<PDFTemplateNotesProps> = ({
  notes,
  startDate,
  endDate,
}) => {
  const tableData = prepareTableData(notes);

  const data = {
    title: "Дневник автоматических мыслей",
    headers: [
      "Ситуация",
      "Автоматическая мысль",
      "Эмоции",
      "Ощущения",
      "Поведение",
      "Когнитивные искажения",
      "Адаптивный ответ",
      "Повторная оценка",
    ],
    rows: tableData,
    footer: "footer",
  };

  if (notes.length < 0) return null;

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <Text style={styles.title}>
          «Дневник автоматических мыслей» за период:{" "}
          {formatDateForUI(startDate)} - {formatDateForUI(endDate)}
        </Text>
        <View style={styles.table}>
          <View style={styles.row} fixed>
            {data.headers.map((header, index) => (
              <View key={index} style={styles.header}>
                <Text>{header}</Text>
              </View>
            ))}
          </View>

          {data.rows.map((row, i) => (
            <View key={i} style={styles.row} wrap={false}>
              {row.map((cell, i) => (
                <Text key={i} style={styles.cell}>
                  {cell}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};
