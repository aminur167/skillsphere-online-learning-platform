export default function PrivacyPage() {
  return (
    <section className="section-shell py-16">
      <div className="rounded-lg bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black text-ink">Privacy Policy</h1>
        <p className="mt-4 leading-7 text-slate-600">
          SkillSphere stores demo authentication data locally in the browser for assignment review. Environment
          variables are reserved for production secrets and provider credentials.
        </p>
      </div>
    </section>
  );
}
