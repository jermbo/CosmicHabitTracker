import { useEffect, useMemo, useRef } from "react";

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

  const selectedDay = useMemo(() => selectedDate.getDate(), [selectedDate]);

  const getDateFormatted = (month: Date, dayNum: number) => {
    return new Date(
      month.getFullYear(),
      month.getMonth(),
      dayNum
    ).toLocaleString("default", { weekday: "short" });
  };

  const daysOfMonth = useMemo(() => {
    const localDays = [];
    for (let dayNum = 1; dayNum <= daysInMonth; dayNum++) {
      localDays.push({
        dayNum,
        weekDay: getDateFormatted(activeMonth, dayNum),
      });
    }
    return localDays;
  }, [daysInMonth]);

  return (
    <div className="daysContainer">
      <div
        className="daysGrid"
        style={{ ["--daysOfMonth" as unknown as number]: daysInMonth }}
      >
        {daysOfMonth.map(({ dayNum, weekDay }) => {
          return (
            <button
              key={dayNum}
              className={`day`}
              data-date={dayNum}
              aria-selected={dayNum === selectedDay}
              onClick={() => onDayClick(dayNum)}
            >
              <span className="dayOfWeek">{weekDay}</span>
              <span className="dayNumber">{dayNum}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DayView;
