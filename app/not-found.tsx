import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">404</p>
      <h1 className="mt-3 text-4xl font-black text-ink">This learning path is missing</h1>
      <p className="mx-auto mt-4 max-w-xl text-base text-slate-600">
        The page you are looking for may have moved. Return home and keep exploring courses.
      </p>
      <Link href="/" className="btn btn-primary mt-8">Back to Home</Link>
    </section>
  );
}
