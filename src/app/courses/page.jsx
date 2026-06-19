import { Suspense } from "react";
import { CoursesClient } from "@/components/CoursesClient";
import { courses } from "@/lib/courses";

export default function CoursesPage() {
  return (
    <section className="section-shell py-14">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-bold uppercase tracking-[0.18em] text-primary">All Courses</p>
          <h1 className="mt-2 text-4xl font-black text-ink">Find your next skill</h1>
        </div>
        <p className="max-w-lg text-sm leading-6 text-slate-600">
          Search by title and open details to view curriculum, duration, level, and enrollment information.
        </p>
      </div>
      <Suspense fallback={<div className="mt-10 text-center"><span className="loading loading-spinner loading-lg text-primary" /></div>}>
        <CoursesClient courses={courses} />
      </Suspense>
    </section>
  );
}
