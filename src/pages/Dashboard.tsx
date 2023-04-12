import { useState, useEffect, useMemo } from "react";
import PageHeader from "../components/PageHeader";
import ScatterPlot from "../components/ScatterPlot";
import { getHabitsForWeek } from "../helpers/helpers";
import { HabitData } from "../helpers/interfaces";

const DashboardPage = () => {
  const [weeklyData, setWeeklyData] = useState<HabitData[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const now = new Date();
    const weeklyStuff = await getHabitsForWeek(now);
    setWeeklyData(weeklyStuff);
  }

  const moodData = useMemo(() => {
    return weeklyData.map((data) => data.mood);
  }, [weeklyData]);

  const waterData = useMemo(() => {
    return weeklyData.map((data) => data.glassesOfWater);
  }, [weeklyData]);

  return (
    <div>
      <PageHeader title="Dashboard" />
      <pre>{JSON.stringify(waterData, null, 2)}</pre>
      {weeklyData.length > 0 && <ScatterPlot habits={weeklyData} />}
    </div>
  );
};

export default DashboardPage;
