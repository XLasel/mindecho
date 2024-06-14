import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { useNoteDataProcessing } from "@/hook/useNoteDataProcessing";
import { Button } from "@/components/common/Button";
import { prepareTableData } from "@/lib/utils";
import { useSearchParamsByDateRangeFilters } from "@/hook/useSearchParamsByDateRange";
import { format } from "date-fns";
import { filterNotesByDateRange } from "@/lib/dateUtils";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";
import { ru } from "date-fns/locale";
// import InterRegular from "@/fonts/Inter-Regular-normal.js";
import { callAddFont } from "@/fonts/Inter.js";

interface ExportButtonProps extends React.ComponentProps<"button"> {
  startDate?: Date;
  endDate?: Date;
}
export const ExportButton = ({
  startDate,
  endDate,
  ...props
}: ExportButtonProps) => {
  const notes = useAppSelector((state) => state.notes.notes);

  const handleExportPDF = () => {
    console.log("hello");
    console.log(startDate);
    if (!startDate || !endDate) return;

    // const filteredNotes = filterNotesByDateRange(notes, date);
    const filteredNotes = filterNotesByDateRange(notes, startDate, endDate);
    const tableData = prepareTableData(filteredNotes);

    jsPDF.API.events.push(["addFonts", callAddFont]);

    const doc = new jsPDF("landscape");
    doc.setFont("Inter-Regular");
    doc.text(
      `Date Range: ${format(startDate, "dd MMMM yyyy", {
        locale: ru,
      })} - ${format(endDate, "dd MMMM yyyy", { locale: ru })}`,
      10,
      10
    );

    autoTable(doc, {
      startY: 20,
      head: [
        [
          "Дата",
          "Ситуация",
          "Автоматическая мысль",
          "Эмоции",
          "Ощущения",
          "Поведение",
          "Уровень дискомфорта",
          "Когнитивные искажения",
          "Адаптивный ответ",
          "Комметрий после",
          "Обновленная оценка дискомфорта",
        ],
      ],
      body: tableData,
      styles: { font: "Inter-Regular", overflow: "linebreak" },
    });

    doc.save("date-range.pdf");
  };

  return (
    <Button
      type="button"
      onClick={handleExportPDF}
      variant="outline"
      {...props}
    >
      Экспорт в PDF
    </Button>
  );
};
