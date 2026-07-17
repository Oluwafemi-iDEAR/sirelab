import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";

import type { Student } from "../../data/homeStats";

export default function StudentSearchList({ students }: { students: Student[] }) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return students;
    return students.filter((student) =>
      student.name.toLowerCase().includes(query),
    );
  }, [students, search]);

  return (
    <div className="mt-5">
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search student by name..."
        className="w-full rounded-xl border border-orange-200 px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <div className="mt-4 grid gap-2">
        {filtered.length === 0 ? (
          <p className="text-slate-500">No student found.</p>
        ) : (
          filtered.map((student) => (
            <a
              key={student.name}
              href={student.linkedin ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 text-slate-700 transition hover:border-orange-200 hover:bg-orange-50"
            >
              <span>{student.name}</span>
              <ExternalLink size={16} className="text-slate-400" />
            </a>
          ))
        )}
      </div>
    </div>
  );
}
