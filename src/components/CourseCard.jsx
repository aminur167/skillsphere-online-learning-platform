import Image from "next/image";
import Link from "next/link";

export function CourseCard({ course }) {
  return (
    <article className="course-card grid h-full overflow-hidden rounded-lg shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10]">
        <Image src={course.image} alt={course.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <span className="badge badge-primary absolute left-4 top-4 border-0 text-white">{course.category}</span>
      </div>
      <div className="flex flex-col gap-4 p-5">
        <div>
          <p className="text-sm font-semibold text-secondary">{course.instructor}</p>
          <h3 className="mt-1 text-xl font-black leading-tight text-ink">{course.title}</h3>
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-slate-600">{course.description}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 text-sm font-semibold text-slate-600">
          <span>{course.duration}</span>
          <span>{course.rating.toFixed(1)} rating</span>
          <span>{course.level}</span>
        </div>
        <Link href={`/courses/${course.id}`} className="btn btn-primary btn-block">View Details</Link>
      </div>
    </article>
  );
}
