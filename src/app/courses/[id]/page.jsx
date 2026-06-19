import Image from "next/image";
import { notFound } from "next/navigation";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { getCourseById } from "@/lib/courses";

export default async function CourseDetailsPage({ params }) {
  const { id } = await params;
  const course = getCourseById(id);
  if (!course) notFound();

  return (
    <ProtectedRoute>
      <section className="section-shell py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-soft">
            <Image src={course.image} alt={course.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
          </div>
          <div className="glass-panel rounded-lg p-6">
            <span className="badge badge-primary border-0 text-white">{course.category}</span>
            <h1 className="mt-4 text-4xl font-black leading-tight text-ink">{course.title}</h1>
            <p className="mt-4 leading-7 text-slate-600">{course.description}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <Stat label="Instructor" value={course.instructor} />
              <Stat label="Duration" value={course.duration} />
              <Stat label="Rating" value={course.rating.toFixed(1)} />
              <Stat label="Level" value={course.level} />
              <Stat label="Lessons" value={`${course.lessons}`} />
              <Stat label="Students" value={`${course.students.toLocaleString()}`} />
            </div>
            <button className="btn btn-primary mt-6 w-full">Enroll Now</button>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-ink">Course Curriculum</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {course.curriculum.map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-50 p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-white">{index + 1}</span>
                <span className="font-semibold text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg bg-white p-4">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p>
      <p className="mt-1 font-black text-ink">{value}</p>
    </div>
  );
}
