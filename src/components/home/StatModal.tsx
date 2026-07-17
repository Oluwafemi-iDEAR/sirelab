import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import RichText from "../common/RichText";
import StudentSearchList from "./StudentSearchList";
import type { SiteStat } from "../../data/homeStats";

type StatModalProps = {
  stat: SiteStat | null;
  onClose: () => void;
};

export default function StatModal({ stat, onClose }: StatModalProps) {
  useEffect(() => {
    if (!stat) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [stat, onClose]);

  return (
    <AnimatePresence>
      {stat && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={stat.modalTitle ?? stat.label}
        >
          <motion.div
            className="max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 p-6">
              <h2 className="text-2xl font-bold text-slate-900">
                {stat.modalTitle ?? stat.label}
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-red-500"
              >
                <X size={24} />
              </button>
            </div>

            <div className="max-h-[calc(85vh-5rem)] overflow-y-auto p-6">
              <RichText value={stat.modalContent} />

              {stat.hasSearch && (
                <StudentSearchList key={stat.key} students={stat.students ?? []} />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
