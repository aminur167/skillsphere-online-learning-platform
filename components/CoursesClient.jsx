"use client";

import { useMemo, useState } from "react";
import { CourseCard } from "@/components/CourseCard";

export function CoursesClient({ courses }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    return courses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase()));
  }, [courses, query]);

  return (
    <>
      <div className="mt-8">
        <label className="input input-bordered flex max-w-xl items-center gap-2 bg-white">
          <input
            type="search"
            className="grow"
            placeholder="Search courses by title"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => <CourseCard key={course.id} course={course} />)}
      </div>
      {filtered.length === 0 && (
        <div className="mt-12 rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center">
          <h2 className="text-2xl font-black text-ink">No courses found</h2>
          <p className="mt-2 text-slate-600">Try another title keyword.</p>
        </div>
      )}
    </>
  );
}
