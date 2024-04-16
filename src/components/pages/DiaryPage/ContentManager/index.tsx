import { DatePickerWithRange } from "@/components/common/DatePicker";
import s from "./ContentManager.module.scss";
import { Button } from "@/components/common/Button";

export const ContentManager = () => {
  return (
    <section className={s.root}>
      <div className={s.range}>
        <DatePickerWithRange />
        <div className={s.buttons}>
          <Button size="sm">Показать записи</Button>
          <Button variant="ghost" size="sm">
            Сбросить
          </Button>
        </div>
      </div>
    </section>
  );
};
