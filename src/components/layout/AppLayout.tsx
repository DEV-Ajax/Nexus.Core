import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { motion, AnimatePresence } from "motion/react";

export function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      <Navbar />
      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex"
          >
            <main className="w-full">
              <Outlet />
            </main>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
