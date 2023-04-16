import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-slate-200 mx-auto p-4 flex items-center justify-between">
      <div className="flex gap-2 nav">
        <NavLink to="/" className="nav-item">
          Welcome
        </NavLink>
        <NavLink to="/habit" className="nav-item">
          Habits
        </NavLink>
        <NavLink to="/dashboard" className="nav-item">
          Dashboard
        </NavLink>{" "}
      </div>
    </nav>
  );
};

export default Navigation;
