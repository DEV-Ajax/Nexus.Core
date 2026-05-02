import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Search, ShoppingBag, LayoutDashboard, Shield, Globe } from "lucide-react";
import { motion } from "motion/react";

export function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Discovery", icon: Search },
    { to: "/vendor", label: "Vendor Hub", icon: LayoutDashboard },
    { to: "/admin", label: "Central Admin", icon: Shield },
  ];

  return (
    <nav className="sticky top-0 z-50 h-20 bg-slate-950/50 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <Link to="/" className="font-sans font-bold text-xl tracking-tight text-white">
              NEXUS.CORE
            </Link>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center gap-1 min-w-0">
            <div className="flex bg-slate-900/50 p-1 rounded-full border border-slate-800">
              {links.map((link) => {
                const isActive = location.pathname === link.to;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={cn(
                      "relative flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                      isActive ? "text-white" : "text-slate-400 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-indigo-500/20 rounded-full border border-indigo-500/30"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            </button>
            <div className="h-8 w-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="Avatar" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
