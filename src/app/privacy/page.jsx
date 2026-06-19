export default function PrivacyPage() {
  return (
    <section className="section-shell py-16">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm">
        <p className="font-bold uppercase tracking-[0.18em] text-primary">Privacy Policy</p>
        <h1 className="mt-2 text-4xl font-black text-ink">Your learning data stays clear and protected</h1>
        <p className="mt-4 leading-7 text-slate-600">
          SkillSphere is designed to keep account information, profile details, and learning activity transparent.
          The demo version stores login and profile data in the browser so learners can review the full experience
          without sharing sensitive production credentials.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <PolicyCard
            title="Account Information"
            description="Name, email, and profile image URL are used only to personalize the dashboard, navbar, and profile pages."
          />
          <PolicyCard
            title="Local Demo Storage"
            description="Demo login data is saved in localStorage on the current browser and can be removed by logging out or clearing browser data."
          />
          <PolicyCard
            title="Secure Configuration"
            description="Provider credentials and authentication secrets are kept in environment variables instead of source code."
          />
          <PolicyCard
            title="External Links"
            description="Social links and image resources may open third-party websites with their own privacy practices."
          />
        </div>
      </div>
    </section>
  );
}

function PolicyCard({ title, description }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
      <h2 className="text-lg font-black text-ink">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
