import React, { useEffect,useState } from "react";
import { pdf } from "@react-pdf/renderer";
import FeatherIcon from "feather-icons-react";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";

import { Button, type ButtonProps } from "@/components/common/Button";
import { filterNotesByDateRange } from "@/lib/dateUtils";
import { useAppSelector } from "@/redux/hook";
import { Note } from "@/redux/noteSlice";

import { PDFTemplateNotes } from "../PDFTemplateNotes";

const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1,
};

interface ExportButtonProps extends ButtonProps {
  startDate: Date | string | undefined;
  endDate: Date | string | undefined;
}

export const ExportButton: React.FC<ExportButtonProps> = ({
  startDate,
  endDate,
  ...props
}) => {
  const notes = useAppSelector((state) => state.notes.notes);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [isReadyToRender, setIsReadyToRender] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (startDate && endDate) {
      const filtered = filterNotesByDateRange(notes, startDate, endDate);
      setFilteredNotes(filtered);
      setIsReadyToRender(filtered.length > 0);
    } else {
      setIsReadyToRender(false);
    }
  }, [notes, startDate, endDate]);

  const handleDownload = async () => {
    if (!startDate || !endDate) return;
    setLoading(true);
    const doc = (
      <PDFTemplateNotes
        notes={filteredNotes}
        startDate={startDate}
        endDate={endDate}
      />
    );
    const asPdf = pdf();
    asPdf.updateContainer(doc);
    const blob = await asPdf.toBlob();
    saveAs(blob, "notes.pdf");
    setLoading(false);
  };

  return (
    <Button
      type="button"
      aria-label="Экпортировать записи за указанный период в PDF"
      title="Экпортировать записи за указанный период в PDF"
      disabled={!isReadyToRender || loading}
      onClick={handleDownload}
      {...props}
    >
      {loading ? (
        <motion.span animate={{ rotate: 360 }} transition={spinTransition}>
          <FeatherIcon icon="loader" />
        </motion.span>
      ) : (
        <FeatherIcon icon="download" />
      )}
    </Button>
  );
};
