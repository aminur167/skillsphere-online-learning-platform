import Image from "next/image";
import Link from "next/link";
import { CourseCard } from "@/components/CourseCard";
import { getPopularCourses, getTrendingCourses } from "@/lib/courses";
import { instructors } from "@/lib/instructors";
import { HeroSlider } from "@/components/HeroSlider";

export default function HomePage() {
  const popularCourses = getPopularCourses();
  const trendingCourses = getTrendingCourses();

  return (
    <>
      <HeroSlider />

      <section className="section-shell py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-primary">Popular Courses</p>
            <h2 className="mt-2 text-3xl font-black text-ink md:text-4xl">Highest rated learning paths</h2>
          </div>
          <Link href="/courses" className="btn btn-outline btn-primary">Browse All Courses</Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {popularCourses.map((course) => <CourseCard key={course.id} course={course} />)}
        </div>
      </section>

      <section className="bg-white/72 py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-secondary">Learning Tips</p>
            <h2 className="mt-2 text-3xl font-black text-ink">Study smarter every week</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Strong learning habits make every lesson easier to finish and easier to remember.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["Use 45-minute focus blocks", "Build a tiny project after each module", "Review notes within 24 hours"].map((tip) => (
              <div key={tip} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-ink">{tip}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">A simple habit that keeps your progress visible and consistent.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-accent">Top Instructors</p>
          <h2 className="mt-2 text-3xl font-black text-ink">Learn from industry mentors</h2>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <article key={instructor.name} className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm">
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full">
                <Image src={instructor.image} alt={instructor.name} fill className="object-cover" sizes="96px" />
              </div>
              <h3 className="mt-4 text-lg font-black text-ink">{instructor.name}</h3>
              <p className="text-sm text-slate-600">{instructor.role}</p>
              <span className="badge badge-secondary mt-3 border-0 text-white">{instructor.specialty}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.18em] text-mint">Trending Courses</p>
              <h2 className="mt-2 text-3xl font-black">Fresh skills learners are choosing now</h2>
            </div>
            <Link href="/courses" className="btn btn-accent">Start Learning</Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {trendingCourses.map((course) => <CourseCard key={course.id} course={course} />)}
          </div>
        </div>
      </section>
    </>
  );
}
