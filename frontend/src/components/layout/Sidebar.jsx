import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Activity,
  FolderKanban,
  Settings,
  Menu,
  ChevronLeft,
  ChartNoAxesCombined,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Repositories",
    icon: FolderKanban,
  },
  {
    label: "Activity",
    icon: Activity,
  },
  {
    label: "Analytics",
    icon: ChartNoAxesCombined,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar({ active, setActive }) {
  // Inside Sidebar component
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setCollapsed(isMobile);  // simply set to true on mobile, false on desktop
    };

    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // no dependencies – runs once on mount

  // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",active);

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside
        className={`
          relative
          transition-all
          duration-300
          ${collapsed ? "w-20" : "w-72"}
          bg-white/85
          backdrop-blur-xl
          border-r
          border-slate-200
          shadow-sm
        `}
      >
        {/* Header */}
        <div className="h-20 px-5 flex items-center justify-between">
          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold text-slate-800">
                Devpulse
              </h1>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="
              h-10
              w-10
              rounded-xl
              hover:bg-slate-100
              flex
              items-center
              justify-center
              transition
            "
          >
            {collapsed ? (
              <Menu size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-3 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const selected = active === item.label;

            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`
                  group
                  relative
                  w-full
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3
                  rounded-2xl
                  transition-all

                  ${
                    selected
                      ? `
                        bg-gradient-to-r
                        from-indigo-500
                        to-violet-500
                        text-white
                        shadow-lg
                      `
                      : `
                        hover:bg-slate-100
                        text-slate-600
                      `
                  }
                `}
              >
                <Icon size={22} />

                {!collapsed && (
                  <span className="font-medium">
                    {item.label}
                  </span>
                )}

                {/* Tooltip */}
                {collapsed && (
                  <div
                    className="
                      absolute
                      left-full
                      ml-3
                      opacity-0
                      invisible
                      group-hover:visible
                      group-hover:opacity-100
                      transition
                      bg-slate-900
                      text-white
                      px-3
                      py-1
                      rounded-lg
                      text-sm
                      whitespace-nowrap
                    "
                  >
                    {item.label}
                  </div>
                )}
              </button>
            );
          })}
        </nav>

      </aside>

    </div>
  );
}