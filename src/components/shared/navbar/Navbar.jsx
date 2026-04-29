import { FaChartLine, FaClock, FaHome } from "react-icons/fa";
import { NavLink } from "react-router";
import { assetPaths } from "../../../utils/assets";

const navItems = [
  { path: "/", label: "Home", icon: FaHome },
  { path: "/timeline", label: "Timeline", icon: FaClock },
  { path: "/stats", label: "Stats", icon: FaChartLine },
];

const Navbar = () => {
  return (
    <header className="h-[78px] border-b border-[#eef2f7] bg-white">
      <nav className="keen-nav-container flex h-full items-center justify-between gap-4">
        <NavLink to="/" aria-label="KeenKeeper Home" className="shrink-0">
          <img
            src={assetPaths.logo}
            alt="KeenKeeper"
            className="h-[31px] w-[141px] object-contain max-[470px]:h-[24px] max-[470px]:w-[110px]"
          />
        </NavLink>

        <div className="flex items-center justify-end gap-0 max-[460px]:gap-1">
          {navItems.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `inline-flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition max-[460px]:h-10 max-[460px]:px-2 max-[460px]:text-xs ${
                  isActive
                    ? "bg-[#244d3f] text-white shadow-sm"
                    : "bg-white text-[#64748b] hover:bg-[#f8fafc] hover:text-[#244d3f]"
                }`
              }
            >
              <Icon className="text-base max-[460px]:text-sm" />
              <span className="max-[470px]:sr-only">{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
