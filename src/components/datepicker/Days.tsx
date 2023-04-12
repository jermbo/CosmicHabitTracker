import { useMemo } from "react";

interface Props {
  onDayClick: (day: number) => void;
  activeMonth: Date;
  selectedDate: Date;
}

const DayView = ({ onDayClick, activeMonth, selectedDate }: Props) => {
  const daysInMonth = useMemo(() => {
    const month = activeMonth.getMonth();
    const year = activeMonth.getFullYear();
    return new Date(year, month + 1, 0).getDate();
  }, [activeMonth]);

  const selectedDay = useMemo(() => {
    return selectedDate.getDay();
  }, [selectedDate]);

  const getDateFormatted = (month: Date, dayNum: number) => {
    return new Date(
      month.getFullYear(),
      month.getMonth(),
      dayNum
    ).toLocaleString("default", { weekday: "short" });
  };

  const generateDays = useMemo(() => {
    const localDays = [];
    for (let dayNum = 1; dayNum <= daysInMonth; dayNum++) {
      localDays.push(
        <button
          key={dayNum}
          className={`day ${dayNum === selectedDay ? "active" : ""}`}
          onClick={() => onDayClick(dayNum)}
        >
          <span className="dayOfWeek">
            {getDateFormatted(activeMonth, dayNum)}
          </span>
          <span className="dayNumber">{dayNum}</span>
        </button>
      );
    }
    return localDays;
  }, [daysInMonth]);

  return (
    <div className="daysContainer">
      <div
        className="daysGrid"
        style={{ ["--daysOfMonth" as unknown as number]: daysInMonth }}
      >
        {generateDays}
      </div>
    </div>
  );
};

export default DayView;
