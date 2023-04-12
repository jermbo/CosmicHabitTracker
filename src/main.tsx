import ReactDOM from "react-dom/client";
import App from "./App";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
